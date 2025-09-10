/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // Internationalization
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: true,
    // Remove domain-based routing to use path-based routing
    // Default: / (Spanish), /en (English)
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Image optimization
  images: {
    domains: ['www.evosystems.dev', 'evosystems.dev'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Experimental features for performance
  experimental: {
    scrollRestoration: true,
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle splitting
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Split vendor libraries
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          // Split common code
          common: {
            name: 'common',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
          },
          // Split HeroUI components
          heroui: {
            name: 'heroui',
            test: /node_modules\/@heroui/,
            chunks: 'all',
            priority: 30,
          },
        },
      };
    }

    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vitals.vercel-insights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com; frame-src https://www.google.com;",
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Cache static assets
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images
      {
        source: '/:path*\\.(jpg|jpeg|png|gif|svg|webp|avif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400',
          },
        ],
      },
      // Cache fonts
      {
        source: '/:path*\\.(woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
