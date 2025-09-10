import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardBody, Chip, Input, Button } from '@heroui/react';
import { SearchIcon, CalendarIcon, ClockIcon, CheckIcon } from '@/components/icons';
import { Navbar } from '@/components/navbar';
import { title, subtitle } from '@/components/primitives';
import { WaveBackground } from '@/components/wave-background';
import { Footer } from '@/components/footer';
import { useTranslations } from '@/config/i18n';
import blogData from '@/data/blog-posts.json';

interface BlogPost {
  id: string;
  slug: string;
  title: {
    es: string;
    en: string;
  };
  excerpt: {
    es: string;
    en: string;
  };
  author: {
    name: string;
    avatar: string;
    bio: {
      es: string;
      en: string;
    };
  };
  publishedAt: string;
  featured: boolean;
  categories: string[];
  tags: string[];
  readingTime: number;
  image: {
    src: string;
    alt: {
      es: string;
      en: string;
    };
    width: number;
    height: number;
  };
  cities: string[];
}

interface BlogPageProps {
  posts: BlogPost[];
  categories: Record<string, { es: string; en: string }>;
  locale: string;
}

export default function BlogPage({ posts, categories, locale }: BlogPageProps) {
  const t = useTranslations(locale as 'es' | 'en');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredPosts = posts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title[locale as 'es' | 'en'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt[locale as 'es' | 'en'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === '' || post.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Head>
        <title>{t.blog.title} | EvoSystems</title>
        <meta name="description" content={t.blog.subtitle} />
        <meta name="keywords" content="blog desarrollo software, artículos tecnología, tendencias desarrollo web" />
        <link rel="canonical" href={`https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${t.blog.title} | EvoSystems`} />
        <meta property="og:description" content={t.blog.subtitle} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog`} />
        <meta property="og:image" content="https://evosystems.dev/og-blog.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${t.blog.title} | EvoSystems`} />
        <meta name="twitter:description" content={t.blog.subtitle} />
        <meta name="twitter:image" content="https://evosystems.dev/og-blog.jpg" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": `${t.blog.title} | EvoSystems`,
              "description": t.blog.subtitle,
              "url": `https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog`,
              "publisher": {
                "@type": "Organization",
                "name": "EvoSystems",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://evosystems.dev/logo.png"
                }
              },
              "blogPost": posts.map(post => ({
                "@type": "BlogPosting",
                "headline": post.title[locale as 'es' | 'en'],
                "description": post.excerpt[locale as 'es' | 'en'],
                "url": `https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog/${post.slug}`,
                "datePublished": post.publishedAt,
                "author": {
                  "@type": "Person",
                  "name": post.author.name
                },
                "image": `https://evosystems.dev${post.image.src}`
              }))
            })
          }}
        />
      </Head>

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <h1 className={`${title({ size: "lg" })} text-white mb-6`}>
            EvoSystems{" "}
            <span className={title({ color: "blue", size: "lg" })}>
              Blog
            </span>
          </h1>
          <p className={`${subtitle()} text-slate-300 max-w-3xl mx-auto mb-8`}>
            {t.blog.subtitle}
          </p>
        </div>
      </section>
      
      <main className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-20">
          

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder={locale === 'es' ? 'Buscar artículos...' : 'Search articles...'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    startContent={<SearchIcon size={20} className="text-slate-400" />}
                    size="lg"
                    classNames={{
                      inputWrapper: "bg-white border-0 focus-within:ring-2 focus-within:ring-blue-500",
                      input: "text-slate-900 placeholder:text-slate-500 text-base font-medium"
                    }}
                  />
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Button
                    variant={selectedCategory === '' ? 'solid' : 'bordered'}
                    color={selectedCategory === '' ? 'primary' : 'default'}
                    onClick={() => setSelectedCategory('')}
                    className={selectedCategory === '' ? 'bg-blue-600 hover:bg-blue-700' : 'border-slate-600 text-slate-300 hover:border-slate-500'}
                  >
                    {locale === 'es' ? 'Todas' : 'All'}
                  </Button>
                  {Object.entries(categories).map(([key, value]) => (
                    <Button
                      key={key}
                      variant={selectedCategory === key ? 'solid' : 'bordered'}
                      color={selectedCategory === key ? 'primary' : 'default'}
                      onClick={() => setSelectedCategory(key)}
                      className={selectedCategory === key 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white'
                      }
                    >
                      {value[locale as 'es' | 'en']}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && searchTerm === '' && selectedCategory === '' && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">
                {locale === 'es' ? 'Artículo Destacado' : 'Featured Article'}
              </h2>
              <Link href={`/blog/${featuredPost.slug}`} className="block">
                <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl group cursor-pointer">
                  <div className="lg:flex">
                    <div className="lg:w-1/2">
                      <Image
                        src={featuredPost.image.src}
                        alt={featuredPost.image.alt[locale as 'es' | 'en']}
                        width={featuredPost.image.width}
                        height={featuredPost.image.height}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredPost.categories.map(category => (
                          <Chip
                            key={category}
                            variant="flat"
                            className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-3 py-1 font-medium"
                          >
                            {categories[category]?.[locale as 'es' | 'en'] || category}
                          </Chip>
                        ))}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {featuredPost.title[locale as 'es' | 'en']}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {featuredPost.excerpt[locale as 'es' | 'en']}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <Image
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span className="text-white">{featuredPost.author.name}</span>
                        </div>
                        <span className="flex items-center gap-1">
                          <CalendarIcon size={14} />
                          {formatDate(featuredPost.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon size={14} />
                          {featuredPost.readingTime} min
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          {/* Posts Grid */}
          {regularPosts.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                  <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl group cursor-pointer h-full">
                    <CardBody className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="text-blue-400" size={32} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.slice(0, 2).map(category => (
                              <Chip
                                key={category}
                                size="sm"
                                variant="flat"
                                className="bg-blue-600/20 text-blue-300 border border-blue-500/30 px-2 py-1"
                              >
                                {categories[category]?.[locale as 'es' | 'en'] || category}
                              </Chip>
                            ))}
                          </div>
                          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                            {post.title[locale as 'es' | 'en']}
                          </h3>
                          <p className="text-slate-400 mb-4">
                            {post.author.name} • {formatDate(post.publishedAt)}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {post.excerpt[locale as 'es' | 'en']}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1">
                          <ClockIcon size={14} />
                          {post.readingTime} {locale === 'es' ? 'min de lectura' : 'min read'}
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckIcon className="text-blue-400" size={14} />
                          {locale === 'es' ? 'Artículo completo' : 'Full article'}
                        </span>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <SearchIcon size={80} className="mx-auto text-slate-600 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === 'es' ? 'No se encontraron artículos' : 'No articles found'}
              </h3>
              <p className="text-slate-400">
                {locale === 'es' 
                  ? 'Prueba con diferentes términos de búsqueda o categorías' 
                  : 'Try different search terms or categories'
                }
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
  return {
    props: {
      posts: blogData.posts,
      categories: blogData.categories,
      locale,
    },
    revalidate: 3600, // Revalidate every hour
  };
};