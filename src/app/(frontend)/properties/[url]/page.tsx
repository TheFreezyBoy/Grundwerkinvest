import payload from 'payload'
import config from '@payload-config'
import PropertyDetailPageClient from '@/components/pages/PropertyDetailPageClient'

type Props = {
  params: {
    url: string
  }
}
export const dynamic = 'force-dynamic'

export default async function PropertyDetailPage({ params }: Props) {
  const resolvedParams = await params

  console.log(54213, resolvedParams?.url)
  if (!resolvedParams?.url) {
    return <div>5121231</div>
  }

  const { url } = resolvedParams

  if (!payload.isInitialized) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET!,
      config,
    })
  }

  const res = await payload.find({
    collection: 'listings',
    where: {
      url: {
        equals: url,
      },
    },
    depth: 2,
  })

  const property = res.docs[0]

  if (!property) {
    return <div className="p-10">Not found</div>
  }

  return <PropertyDetailPageClient property={property} />
}
