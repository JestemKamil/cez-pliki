import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'turbo-train-6pj5xx9prp4hrg6w-3000.app.github.dev', 
      ],
    },
  },
}

export default withPayload(nextConfig)
