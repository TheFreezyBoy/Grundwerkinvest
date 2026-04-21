import { NextRequest, NextResponse } from 'next/server'
import payload from 'payload'
import payloadConfig from '@payload-config'

export async function GET(req: NextRequest) {
  if (!payload.isInitialized) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET,
      mongoURL: process.env.DATABASE_URL,
      config: payloadConfig,
      express: null,
    })
  }

  const { searchParams } = new URL(req.url)
  const cityFilter = searchParams.get('city')
  const budgetFilter = searchParams.get('budget')

  // Получаем все города для фильтра на фронте
  const allCitiesRes = await payload.find({
    collection: 'cities',
    limit: 100,
  })
  const cities = allCitiesRes.docs.map((c: any) => c.name)

  // Формируем where для Payload по новой структуре
  const where: any = {}

  // Фильтр по городу
  if (cityFilter && cityFilter !== 'All') {
    where['address.city'] = { equals: cityFilter }
  }

  // Фильтр по бюджету (price внутри prices)
  if (budgetFilter && budgetFilter !== 'All') {
    if (budgetFilter === '<300') {
      where['prices.price'] = { less_than: 300000 }
    } else if (budgetFilter === '300-500') {
      where.and = [
        { 'prices.price': { greater_than_or_equal_to: 300000 } },
        { 'prices.price': { less_than_or_equal_to: 500000 } },
      ]
    } else if (budgetFilter === '>500') {
      where['prices.price'] = { greater_than: 500000 }
    }
  }

  // Получаем сами объекты
  const listingsRes = await payload.find({
    collection: 'listings', // новая коллекция
    where,
    limit: 100,
    depth: 2, // подгружаем вложенные relationship
  })

  return NextResponse.json({
    cities,
    listings: listingsRes.docs,
  })
}
