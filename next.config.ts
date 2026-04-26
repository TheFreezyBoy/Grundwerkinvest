import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.90'],
  output: 'standalone',
}

export default withNextIntl(withPayload(nextConfig, { devBundleServerPackages: false }))
