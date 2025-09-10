import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@/components/icons';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const router = useRouter();
  
  // Auto-generate breadcrumbs if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = router.asPath.split('/').filter(segment => segment !== '');
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', href: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Convert segment to readable label
      let label = segment.replace(/-/g, ' ');
      label = label.charAt(0).toUpperCase() + label.slice(1);
      
      // Custom labels for known routes
      const routeLabels: { [key: string]: string } = {
        services: 'Servicios',
        solutions: 'Soluciones',
        about: 'Sobre Nosotros',
        contact: 'Contacto',
        faq: 'Preguntas Frecuentes',
        blog: 'Blog',
        privacy: 'Política de Privacidad',
        terms: 'Términos y Condiciones',
      };

      if (routeLabels[segment]) {
        label = routeLabels[segment];
      }

      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrentPage: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs for home page
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-2 text-sm ${className}`}
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon 
                className="text-slate-400 mx-2" 
                size={16}
                aria-hidden="true" 
              />
            )}
            {item.isCurrentPage ? (
              <span 
                className="text-slate-300 font-medium"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <NextLink
                href={item.href}
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </NextLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Compact breadcrumbs for mobile
export const MobileBreadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const router = useRouter();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = router.asPath.split('/').filter(segment => segment !== '');
    if (pathSegments.length === 0) return [];

    const currentSegment = pathSegments[pathSegments.length - 1];
    let label = currentSegment.replace(/-/g, ' ');
    label = label.charAt(0).toUpperCase() + label.slice(1);

    const routeLabels: { [key: string]: string } = {
      services: 'Servicios',
      solutions: 'Soluciones', 
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      faq: 'FAQ',
      blog: 'Blog',
    };

    if (routeLabels[currentSegment]) {
      label = routeLabels[currentSegment];
    }

    return [
      { label: 'Inicio', href: '/' },
      { label, href: router.asPath, isCurrentPage: true }
    ];
  };

  const breadcrumbItems = items || generateBreadcrumbs();

  if (breadcrumbItems.length <= 1) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-2 text-sm md:hidden ${className}`}
    >
      <NextLink
        href="/"
        className="text-blue-400 hover:text-blue-300"
        aria-label="Volver al inicio"
      >
        Inicio
      </NextLink>
      <ChevronRightIcon className="text-slate-400" size={14} />
      <span className="text-slate-300 font-medium truncate">
        {breadcrumbItems[breadcrumbItems.length - 1].label}
      </span>
    </nav>
  );
};