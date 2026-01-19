import type {NextConfig} from "next"

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    // @ts-expect-error: Next.jsの型定義が追いついていないための暫定対応
    reactCompiler: true,
  },
}

export default nextConfig
