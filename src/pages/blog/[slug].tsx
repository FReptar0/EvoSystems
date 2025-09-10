import { GetStaticProps, GetStaticPaths } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, Chip, Button } from '@heroui/react';

import { ClockIcon, CalendarIcon, UserIcon, LinkedInIcon, WhatsAppIcon, EmailIcon } from '@/components/icons';
import { Navbar } from '@/components/navbar';
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
  content: {
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
  updatedAt: string;
  featured: boolean;
  categories: string[];
  tags: string[];
  seo: {
    metaTitle: {
      es: string;
      en: string;
    };
    metaDescription: {
      es: string;
      en: string;
    };
    keywords: string[];
  };
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
  relatedPosts: string[];
}

interface BlogPostPageProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
  categories: Record<string, { es: string; en: string }>;
  locale: string;
}

export default function BlogPostPage({ post, relatedPosts, categories, locale }: BlogPostPageProps) {
  const t = useTranslations(locale as 'es' | 'en');
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

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
        <title>{post.seo.metaTitle[locale as 'es' | 'en']}</title>
        <meta content={post.seo.metaDescription[locale as 'es' | 'en']} name="description" />
        <meta content={post.seo.keywords.join(', ')} name="keywords" />
        <meta content={post.author.name} name="author" />
        <meta content={post.publishedAt} name="article:published_time" />
        <meta content={post.updatedAt} name="article:modified_time" />
        <meta content={post.author.name} name="article:author" />
        <meta content={categories[post.categories[0]]?.[locale as 'es' | 'en']} name="article:section" />
        <meta content={post.tags.join(', ')} name="article:tag" />
        <link href={`https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog/${post.slug}`} rel="canonical" />

        {/* Open Graph */}
        <meta content={post.seo.metaTitle[locale as 'es' | 'en']} property="og:title" />
        <meta content={post.seo.metaDescription[locale as 'es' | 'en']} property="og:description" />
        <meta content="article" property="og:type" />
        <meta content={`https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog/${post.slug}`} property="og:url" />
        <meta content={`https://evosystems.dev${post.image.src}`} property="og:image" />
        <meta content={post.image.width.toString()} property="og:image:width" />
        <meta content={post.image.height.toString()} property="og:image:height" />
        <meta content={post.image.alt[locale as 'es' | 'en']} property="og:image:alt" />
        <meta content={post.publishedAt} property="article:published_time" />
        <meta content={post.updatedAt} property="article:modified_time" />
        <meta content={post.author.name} property="article:author" />

        {/* Twitter Card */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={post.seo.metaTitle[locale as 'es' | 'en']} name="twitter:title" />
        <meta content={post.seo.metaDescription[locale as 'es' | 'en']} name="twitter:description" />
        <meta content={`https://evosystems.dev${post.image.src}`} name="twitter:image" />
        <meta content={post.image.alt[locale as 'es' | 'en']} name="twitter:image:alt" />
        <meta content="@EvoSystemsDev" name="twitter:creator" />

        {/* Structured Data */}
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title[locale as 'es' | 'en'],
              "description": post.excerpt[locale as 'es' | 'en'],
              "image": {
                "@type": "ImageObject",
                "url": `https://evosystems.dev${post.image.src}`,
                "width": post.image.width,
                "height": post.image.height
              },
              "datePublished": post.publishedAt,
              "dateModified": post.updatedAt,
              "author": {
                "@type": "Person",
                "name": post.author.name,
                "image": `https://evosystems.dev${post.author.avatar}`,
                "jobTitle": post.author.bio[locale as 'es' | 'en']
              },
              "publisher": {
                "@type": "Organization",
                "name": "EvoSystems",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://evosystems.dev/logo.png"
                }
              },
              "url": `https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog/${post.slug}`,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog/${post.slug}`
              },
              "articleSection": categories[post.categories[0]]?.[locale as 'es' | 'en'],
              "keywords": post.tags.join(", "),
              "wordCount": post.content[locale as 'es' | 'en'].split(' ').length,
              "timeRequired": `PT${post.readingTime}M`,
              "inLanguage": locale === 'es' ? 'es-MX' : 'en-US',
              "isPartOf": {
                "@type": "Blog",
                "name": "EvoSystems Blog",
                "url": `https://evosystems.dev${locale === 'en' ? '/en' : ''}/blog`
              }
            })
          }}
          type="application/ld+json"
        />
      </Head>

      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* Article Header */}
          <article className="max-w-5xl mx-auto">
            <header className="text-center mb-20">
              {/* Categories and Meta Info */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {/* Categories */}
                {post.categories.map(category => (
                  <Chip
                    key={category}
                    className="bg-blue-600 text-white font-semibold px-4 py-2 hover:bg-blue-700 transition-colors"
                    size="lg"
                    variant="solid"
                  >
                    {categories[category]?.[locale as 'es' | 'en'] || category}
                  </Chip>
                ))}

                {/* Author */}
                <Chip
                  className="bg-slate-800/50 text-slate-200 border border-slate-700/50 font-medium px-4 py-2"
                  size="lg"
                  startContent={
                    post.author.avatar ? (
                      <Image
                        alt={post.author.name}
                        className="rounded-full"
                        height={24}
                        src={post.author.avatar}
                        width={24}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : (
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <UserIcon className="text-white" size={12} />
                      </div>
                    )
                  }
                  variant="flat"
                >
                  {post.author.name}
                </Chip>

                {/* Publication Date */}
                <Chip
                  className="bg-slate-800/50 text-slate-200 border border-slate-700/50 font-medium px-4 py-2"
                  size="lg"
                  startContent={<CalendarIcon className="text-blue-400" size={16} />}
                  variant="flat"
                >
                  {formatDate(post.publishedAt)}
                </Chip>

                {/* Reading Time */}
                <Chip
                  className="bg-slate-800/50 text-slate-200 border border-slate-700/50 font-medium px-4 py-2"
                  size="lg"
                  startContent={<ClockIcon className="text-purple-400" size={16} />}
                  variant="flat"
                >
                  {post.readingTime} {locale === 'es' ? 'min' : 'min'}
                </Chip>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight max-w-4xl mx-auto">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200">
                  {post.title[locale as 'es' | 'en']}
                </span>
              </h1>

              {/* Excerpt */}
              <p className="text-2xl text-slate-200 mb-32 leading-relaxed max-w-3xl mx-auto">
                {post.excerpt[locale as 'es' | 'en']}
              </p>

              {/* Featured Image */}
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
                <Image
                  fill
                  priority
                  alt={post.image.alt[locale as 'es' | 'en']}
                  className="object-cover"
                  src={post.image.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </header>

            {/* Article Content */}
            <div className="max-w-4xl mx-auto mb-24">
              <div className="bg-white/[0.02] backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="prose prose-invert prose-lg max-w-none text-left">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content[locale as 'es' | 'en']
                        // First, handle numbered lists (1. 2. 3. etc.)
                        .replace(/^(\d+)\.\s+(.*$)/gim, '<li class="numbered-item" data-number="$1">$2</li>')
                        // Convert markdown headers
                        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                        // Convert bold text
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        // Convert italic text
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        // Convert bullet points
                        .replace(/^•\s+(.*$)/gim, '<li class="bullet-item">$1</li>')
                        // Convert code blocks
                        .replace(/```javascript\n([\s\S]*?)\n```/g, '<pre><code class="language-javascript">$1</code></pre>')
                        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
                        // Convert inline code
                        .replace(/`([^`]+)`/g, '<code>$1</code>')
                        // Handle paragraphs - split by double line breaks but preserve single ones
                        .split('\n\n')
                        .map(paragraph => {
                          // If it contains list items, wrap in appropriate list
                          if (paragraph.includes('<li class="numbered-item"')) {
                            const items = paragraph.split('\n').filter(line => line.includes('<li class="numbered-item"'));
                            return `<ol class="numbered-list">${items.join('')}</ol>`;
                          } else if (paragraph.includes('<li class="bullet-item"')) {
                            const items = paragraph.split('\n').filter(line => line.includes('<li class="bullet-item"'));
                            return `<ul class="bullet-list">${items.join('')}</ul>`;
                          } else if (paragraph.includes('<h1>') || paragraph.includes('<h2>') || paragraph.includes('<h3>') || paragraph.includes('<pre>')) {
                            // Headers and code blocks don't need paragraph wrapper
                            return paragraph;
                          } else if (paragraph.trim()) {
                            // Regular paragraph - preserve line breaks within
                            return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`;
                          }
                          return '';
                        })
                        .join('')
                    }}
                    className="article-content text-white leading-relaxed text-lg space-y-6"
                  />
                  <style jsx>{`
                    .article-content p {
                      margin-bottom: 1.5rem;
                      line-height: 1.75;
                      color: white;
                      font-size: 1.125rem;
                    }
                    
                    .article-content h1 {
                      font-size: 2.5rem;
                      font-weight: bold;
                      color: white;
                      margin: 3rem 0 1.5rem 0;
                      border-bottom: 2px solid #3b82f6;
                      padding-bottom: 1rem;
                    }
                    
                    .article-content h2 {
                      font-size: 2rem;
                      font-weight: bold;
                      color: white;
                      margin: 2.5rem 0 1.25rem 0;
                      border-bottom: 2px solid #3b82f6;
                      padding-bottom: 0.75rem;
                    }
                    
                    .article-content h3 {
                      font-size: 1.5rem;
                      font-weight: 600;
                      color: #93c5fd;
                      margin: 2rem 0 1rem 0;
                    }
                    
                    .article-content .numbered-list {
                      margin: 1.5rem 0;
                      padding-left: 0;
                      counter-reset: item;
                    }
                    
                    .article-content .numbered-item {
                      display: block;
                      margin-bottom: 0.75rem;
                      padding-left: 2rem;
                      color: white;
                      line-height: 1.6;
                      position: relative;
                      counter-increment: item;
                    }
                    
                    .article-content .numbered-item::before {
                      content: counter(item) ". ";
                      position: absolute;
                      left: 0;
                      color: #60a5fa;
                      font-weight: bold;
                    }
                    
                    .article-content .bullet-list {
                      margin: 1.5rem 0;
                      padding-left: 0;
                    }
                    
                    .article-content .bullet-item {
                      display: block;
                      margin-bottom: 0.75rem;
                      padding-left: 1.5rem;
                      color: white;
                      line-height: 1.6;
                      position: relative;
                    }
                    
                    .article-content .bullet-item::before {
                      content: "•";
                      position: absolute;
                      left: 0;
                      color: #60a5fa;
                      font-weight: bold;
                    }
                    
                    .article-content strong {
                      color: #bfdbfe;
                      font-weight: bold;
                    }
                    
                    .article-content em {
                      color: #e2e8f0;
                      font-style: italic;
                    }
                    
                    .article-content pre {
                      background-color: #1e293b;
                      padding: 1.5rem;
                      border-radius: 0.5rem;
                      overflow-x: auto;
                      margin: 1.5rem 0;
                      border: 1px solid #475569;
                    }
                    
                    .article-content pre code {
                      color: #86efac;
                      background: none;
                      padding: 0;
                      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                      font-size: 0.875rem;
                    }
                    
                    .article-content code {
                      background-color: #374151;
                      color: #86efac;
                      padding: 0.125rem 0.375rem;
                      border-radius: 0.25rem;
                      font-size: 0.875rem;
                      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
                    }
                    
                    .article-content blockquote {
                      border-left: 4px solid #60a5fa;
                      background-color: rgba(59, 130, 246, 0.1);
                      padding: 1.5rem;
                      margin: 1.5rem 0;
                      border-radius: 0 0.5rem 0.5rem 0;
                      font-style: italic;
                      color: white;
                    }
                    
                    .article-content br {
                      line-height: 2;
                    }
                  `}</style>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="max-w-4xl mx-auto mb-32 mt-12">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {locale === 'es' ? 'Compartir artículo' : 'Share Article'}
                </h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    aria-label="Share on WhatsApp"
                    as={Link}
                    className="font-medium"
                    color="success"
                    href={currentUrl ? `https://wa.me/?text=${encodeURIComponent(post.title[locale as 'es' | 'en'] + ' - ' + currentUrl)}` : '#'}
                    isDisabled={!currentUrl}
                    startContent={<WhatsAppIcon size={18} />}
                    variant="flat"
                  >
                    WhatsApp
                  </Button>
                  <Button
                    aria-label="Share on LinkedIn"
                    as={Link}
                    className="font-medium"
                    color="primary"
                    href={currentUrl ? `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}` : '#'}
                    isDisabled={!currentUrl}
                    startContent={<LinkedInIcon size={18} />}
                    variant="flat"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    aria-label="Share via Email"
                    as={Link}
                    className="border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white font-medium"
                    href={currentUrl ? `mailto:?subject=${encodeURIComponent(post.title[locale as 'es' | 'en'])}&body=${encodeURIComponent(post.excerpt[locale as 'es' | 'en'] + '\n\n' + currentUrl)}` : '#'}
                    isDisabled={!currentUrl}
                    startContent={<EmailIcon size={18} />}
                    variant="flat"
                  >
                    Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <section className="relative mb-24 -mx-6 mt-12">
              <div className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
                <WaveBackground className="absolute inset-0 z-10" variant="cta" />

                <div className="relative z-20 max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {locale === 'es' ? '¿Te gustó este artículo?' : 'Did you enjoy this article?'}
                  </h3>
                  <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
                    {locale === 'es'
                      ? 'Déjanos ayudarte a hacer realidad tu próximo proyecto de software. Contáctanos para una consulta gratuita.'
                      : 'Let us help you bring your next software project to life. Contact us for a free consultation.'
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      as={Link}
                      className="bg-green-600 hover:bg-green-700 font-semibold shadow-lg"
                      color="success"
                      href="https://wa.me/5550000000"
                      size="lg"
                      startContent={<WhatsAppIcon size={20} />}
                    >
                      {locale === 'es' ? 'Consulta por WhatsApp' : 'WhatsApp Consultation'}
                    </Button>
                    <Button
                      as={Link}
                      className="bg-blue-600 hover:bg-blue-700 font-semibold shadow-lg"
                      color="primary"
                      href="/contact"
                      size="lg"
                      startContent={<EmailIcon size={20} />}
                    >
                      {locale === 'es' ? 'Solicitar Cotización' : 'Get Quote'}
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="max-w-7xl mx-auto mt-12">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {t.blog.relatedPosts}
                </h2>
                <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-6">
                  {locale === 'es' ? 'Te podrían interesar estos artículos relacionados' : 'You might be interested in these related articles'}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} className="block group" href={`/blog/${relatedPost.slug}`}>
                    <Card className="bg-slate-900/60 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-sm hover:bg-slate-900/80 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 h-full">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
                        <Image
                          fill
                          alt={relatedPost.image.alt[locale as 'es' | 'en']}
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          src={relatedPost.image.src}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardBody className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {relatedPost.categories.slice(0, 2).map(category => (
                            <Chip
                              key={category}
                              className="bg-blue-600 text-white font-medium"
                              size="sm"
                              variant="solid"
                            >
                              {categories[category]?.[locale as 'es' | 'en'] || category}
                            </Chip>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                          {relatedPost.title[locale as 'es' | 'en']}
                        </h3>
                        <p className="text-slate-300 mb-6 line-clamp-3 leading-relaxed">
                          {relatedPost.excerpt[locale as 'es' | 'en']}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-3">
                            {relatedPost.author.avatar ? (
                              <Image
                                alt={relatedPost.author.name}
                                className="rounded-full ring-2 ring-slate-600"
                                height={40}
                                src={relatedPost.author.avatar}
                                width={40}
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none';
                                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                              />
                            ) : null}
                            <div className={`w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center ring-2 ring-slate-600 ${relatedPost.author.avatar ? 'hidden' : ''}`}>
                              <UserIcon className="text-white" size={20} />
                            </div>
                            <div>
                              <p className="text-white text-sm font-semibold">{relatedPost.author.name}</p>
                              <p className="text-slate-400 text-xs">{relatedPost.readingTime} min {locale === 'es' ? 'lectura' : 'read'}</p>
                            </div>
                          </div>
                          <Button
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 font-medium"
                            size="sm"
                            variant="ghost"
                          >
                            {locale === 'es' ? 'Leer' : 'Read'} →
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Footer Tags */}
          <footer className="border-t border-slate-700/50 pt-8 mt-16">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-slate-400 mb-4">
                {locale === 'es' ? 'Etiquetas' : 'Tags'}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {post.tags.map(tag => (
                  <Chip
                    key={tag}
                    className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 cursor-pointer font-medium"
                    size="sm"
                    variant="solid"
                  >
                    #{tag}
                  </Chip>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </main>
      
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogData.posts.flatMap(post => [
    { params: { slug: post.slug }, locale: 'es' },
    { params: { slug: post.slug }, locale: 'en' }
  ]);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale = 'es' }) => {
  const slug = params?.slug as string;
  const post = blogData.posts.find(p => p.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts
  const relatedPosts = blogData.posts
    .filter(p =>
      p.id !== post.id &&
      (post.relatedPosts.includes(p.id) ||
        p.categories.some(cat => post.categories.includes(cat)))
    )
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
      categories: blogData.categories,
      locale,
    },
    revalidate: 3600,
  };
};