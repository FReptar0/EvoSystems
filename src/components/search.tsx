import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Input, Card, CardBody, Kbd, Button } from '@heroui/react';

import { SearchIcon } from '@/components/icons';
import { useTranslations } from '@/config/i18n';
import blogData from '@/data/blog-posts.json';

// Add CloseIcon to icons.tsx if not present
const CloseIcon = ({ size = 24, ...props }: { size?: number; [key: string]: any }) => (
  <svg
    height={size}
    viewBox="0 0 24 24" 
    width={size}
    {...props}
  >
    <path
      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      fill="currentColor"
    />
  </svg>
);

interface SearchResult {
  type: 'page' | 'blog' | 'service';
  title: string;
  description: string;
  url: string;
  category?: string;
}

interface SearchProps {
  className?: string;
  onResultClick?: () => void;
}

export const Search: React.FC<SearchProps> = ({ className = '', onResultClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const locale = router.locale as 'es' | 'en';
  const t = useTranslations(locale);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Static page results for search
  const staticPages: SearchResult[] = [
    {
      type: 'page',
      title: t.navigation.home,
      description: t.seo.description,
      url: '/'
    },
    {
      type: 'page', 
      title: t.navigation.services,
      description: 'Servicios de desarrollo de software, aplicaciones web y móviles',
      url: '/services'
    },
    {
      type: 'page',
      title: t.navigation.solutions,
      description: 'Soluciones tecnológicas para empresas',
      url: '/solutions'
    },
    {
      type: 'page',
      title: t.navigation.about,
      description: 'Conoce más sobre EvoSystems y nuestro equipo',
      url: '/about'
    },
    {
      type: 'page',
      title: t.navigation.contact,
      description: 'Contáctanos para obtener una cotización gratuita',
      url: '/contact'
    },
    {
      type: 'page',
      title: t.navigation.faq,
      description: 'Preguntas frecuentes sobre nuestros servicios',
      url: '/faq'
    },
    {
      type: 'service',
      title: locale === 'es' ? 'Desarrollo Web' : 'Web Development',
      description: locale === 'es' ? 'Aplicaciones web modernas con React, Next.js y tecnologías de vanguardia' : 'Modern web applications with React, Next.js and cutting-edge technologies',
      url: '/services#web-development'
    },
    {
      type: 'service',
      title: locale === 'es' ? 'Aplicaciones Móviles' : 'Mobile Apps',
      description: locale === 'es' ? 'Apps nativas y multiplataforma para iOS y Android' : 'Native and cross-platform apps for iOS and Android',
      url: '/services#mobile-apps'
    },
    {
      type: 'service',
      title: locale === 'es' ? 'Sistemas ERP' : 'ERP Systems',
      description: locale === 'es' ? 'Implementación y personalización de sistemas ERP con Odoo' : 'Implementation and customization of ERP systems with Odoo',
      url: '/services#erp-systems'
    },
    {
      type: 'service',
      title: locale === 'es' ? 'Integraciones' : 'Integrations',
      description: locale === 'es' ? 'Conecta y sincroniza sistemas para automatizar procesos' : 'Connect and synchronize systems to automate processes',
      url: '/services#integrations'
    },
    {
      type: 'service',
      title: locale === 'es' ? 'Análisis de Datos' : 'Data Analysis',
      description: locale === 'es' ? 'Business Intelligence y análisis predictivo' : 'Business Intelligence and predictive analytics',
      url: '/services#analytics'
    },
    {
      type: 'service',
      title: locale === 'es' ? 'Apps de Escritorio' : 'Desktop Apps',
      description: locale === 'es' ? 'Software multiplataforma para Windows, Mac y Linux' : 'Cross-platform software for Windows, Mac and Linux',
      url: '/services#desktop-apps'
    }
  ];

  // Search function
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);

      return;
    }

    const query = searchQuery.toLowerCase();
    const allResults: SearchResult[] = [];

    // Search static pages
    staticPages.forEach(page => {
      const titleMatch = page.title.toLowerCase().includes(query);
      const descriptionMatch = page.description.toLowerCase().includes(query);
      
      if (titleMatch || descriptionMatch) {
        allResults.push(page);
      }
    });

    // Search blog posts
    blogData.posts.forEach(post => {
      const title = post.title[locale].toLowerCase();
      const excerpt = post.excerpt[locale].toLowerCase();
      const content = post.content[locale].toLowerCase();
      const tags = post.tags.join(' ').toLowerCase();
      
      if (title.includes(query) || excerpt.includes(query) || content.includes(query) || tags.includes(query)) {
        allResults.push({
          type: 'blog',
          title: post.title[locale],
          description: post.excerpt[locale],
          url: `/blog/${post.slug}`,
          category: blogData.categories[post.categories[0] as keyof typeof blogData.categories]?.[locale] || post.categories[0]
        });
      }
    });

    // Limit results and sort by relevance
    const limitedResults = allResults.slice(0, 8);

    setResults(limitedResults);
  };

  // Handle search input
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, locale]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        handleClose();
        break;
    }
  };

  // Handle result click
  const handleResultClick = (result: SearchResult) => {
    router.push(result.url);
    handleClose();
    onResultClick?.();
  };

  // Handle close
  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getResultIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'blog':
        return '📄';
      case 'service':
        return '⚙️';
      default:
        return '📖';
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <Input
        ref={inputRef}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={locale === 'es' ? 'Buscar en el sitio' : 'Search site'}
        classNames={{
          inputWrapper: "bg-white border-0 focus-within:ring-2 focus-within:ring-blue-500 hover:ring-2 hover:ring-blue-300",
          input: "text-slate-900 placeholder:text-slate-500 font-medium"
        }}
        endContent={
          !isOpen ? (
            <Kbd className="hidden lg:inline-block" keys={['command']}>
              K
            </Kbd>
          ) : (
            query && (
              <Button
                isIconOnly
                aria-label={locale === 'es' ? 'Cerrar búsqueda' : 'Close search'}
                size="sm"
                variant="light"
                onClick={handleClose}
              >
                <CloseIcon size={16} />
              </Button>
            )
          )
        }
        placeholder={locale === 'es' ? 'Buscar...' : 'Search...'}
        role="combobox"
        startContent={<SearchIcon size={20} />}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onKeyDown={handleKeyDown}
      />

      {/* Search Results */}
      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 bg-slate-800/95 border-slate-700 backdrop-blur-md max-h-96 overflow-hidden">
          <CardBody className="p-0">
            {results.length > 0 ? (
              <div aria-label={locale === 'es' ? 'Resultados de búsqueda' : 'Search results'} role="listbox">
                {results.map((result, index) => (
                  <button
                    key={`${result.type}-${result.url}`}
                    aria-selected={index === selectedIndex}
                    className={`w-full p-4 text-left hover:bg-slate-700/50 transition-colors border-b border-slate-700/50 last:border-b-0 ${
                      index === selectedIndex ? 'bg-slate-700/50' : ''
                    }`}
                    role="option"
                    onClick={() => handleResultClick(result)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-lg leading-none mt-0.5">
                        {getResultIcon(result.type)}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white mb-1 truncate">
                          {result.title}
                        </h4>
                        <p className="text-sm text-slate-300 line-clamp-2">
                          {result.description}
                        </p>
                        {result.category && (
                          <span className="text-xs text-blue-400 mt-1 inline-block">
                            {result.category}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : query ? (
              <div className="p-6 text-center text-slate-400">
                <SearchIcon className="mx-auto mb-3 opacity-50" size={48} />
                <p className="text-lg mb-2">
                  {locale === 'es' ? 'No se encontraron resultados' : 'No results found'}
                </p>
                <p className="text-sm">
                  {locale === 'es' 
                    ? 'Prueba con diferentes términos de búsqueda' 
                    : 'Try different search terms'
                  }
                </p>
              </div>
            ) : (
              <div className="p-6 text-center text-slate-400">
                <div className="mb-4">
                  <SearchIcon className="mx-auto mb-3 opacity-50" size={48} />
                  <p className="text-lg mb-2 whitespace-normal break-words">
                    {locale === 'es' ? 'Busca en nuestro sitio' : 'Search our site'}
                  </p>
                  <p className="text-sm mb-4 whitespace-normal break-words">
                    {locale === 'es' 
                      ? 'Encuentra páginas, servicios y artículos del blog' 
                      : 'Find pages, services and blog articles'
                    }
                  </p>
                </div>
                <div className="text-xs text-slate-500">
                  <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                    {locale === 'es' ? 'Atajo:' : 'Shortcut:'}
                    <Kbd keys={['command']}>K</Kbd>
                  </span>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default Search;