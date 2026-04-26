import PropertyDetailPageClient from '@/components/pages/PropertyDetailPageClient'
import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ url: string }>
}) {
  const { url } = await params
  if (!url) notFound()

  const payload = await getPayload({ config })

  const res = await payload.find({
    collection: 'listings',
    where: { url: { equals: url } },
    depth: 2,
  })

  const property = res.docs[0]
  if (!property) notFound()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PropertyDetailPageClient property={property as any} />
}
