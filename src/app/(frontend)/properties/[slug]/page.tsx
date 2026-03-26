import payload from 'payload'
import config from '@payload-config'
import PropertyDetailPageClient from '@/components/pages/PropertyDetailPageClient'

type Props = {
  params: {
    slug: string
  }
}
export const dynamic = 'force-dynamic'

export default async function PropertyDetailPage({ params }: Props) {
  const resolvedParams = await params

  if (!resolvedParams?.slug) {
    return <div>5121231</div>
  }

  const { slug } = resolvedParams

  if (!payload.isInitialized) {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET!,
      config,
    })
  }

  const res = await payload.find({
    collection: 'properties',
    where: {
      slug: {
        equals: slug,
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
