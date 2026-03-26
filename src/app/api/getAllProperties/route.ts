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

  const allCitiesRes = await payload.find({
    collection: 'cities',
    limit: 100,
  })
  const cities = allCitiesRes.docs.map((c: any) => c.name)

  const where: any = {}

  if (cityFilter && cityFilter !== 'All') {
    const cityEntry = allCitiesRes.docs.find(
      (c: any) => c.name === cityFilter || c.slug === cityFilter.toLowerCase(),
    )
    if (cityEntry) {
      where.city = { equals: cityEntry.id }
    }
  }

  if (budgetFilter && budgetFilter !== 'All') {
    if (budgetFilter === '<300') {
      where.price = { less_than: 300000 }
    } else if (budgetFilter === '300-500') {
      where.and = [{ price: { greater_than: 299999 } }, { price: { less_than: 500001 } }]
    } else if (budgetFilter === '>500') {
      where.price = { greater_than: 500000 }
    }
  }

  const propertiesRes = await payload.find({
    collection: 'properties',
    where,
    limit: 100,
    depth: 1
  })

  return NextResponse.json({
    cities,
    properties: propertiesRes.docs,
  })
}
