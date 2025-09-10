import { translations, Translations } from '@/config/i18n';

// Utility for getting current locale (for server-side or components without router)
export const getCurrentLocale = (): 'es' | 'en' => {
  if (typeof window === 'undefined') {
    return 'es'; // Default for SSR
  }
  
  // Get locale from URL pathname
  const pathname = window.location.pathname;
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  return 'es';
};

// Utility for getting translations with fallback
export const getTranslations = (locale?: 'es' | 'en'): Translations => {
  const currentLocale = locale || getCurrentLocale();
  return translations[currentLocale] || translations.es;
};

// Format date according to locale
export const formatDate = (
  date: string | Date,
  locale: 'es' | 'en' = 'es',
  options?: Intl.DateTimeFormatOptions
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  const formatOptions = { ...defaultOptions, ...options };
  const localeCode = locale === 'es' ? 'es-MX' : 'en-US';
  
  return dateObj.toLocaleDateString(localeCode, formatOptions);
};

// Format currency for Mexico
export const formatCurrency = (
  amount: number,
  locale: 'es' | 'en' = 'es',
  currency: string = 'MXN'
): string => {
  const localeCode = locale === 'es' ? 'es-MX' : 'en-US';
  
  return new Intl.NumberFormat(localeCode, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

// Format numbers with locale-specific separators
export const formatNumber = (
  num: number,
  locale: 'es' | 'en' = 'es'
): string => {
  const localeCode = locale === 'es' ? 'es-MX' : 'en-US';
  return new Intl.NumberFormat(localeCode).format(num);
};

// Get readable time ago string
export const getTimeAgo = (
  date: string | Date,
  locale: 'es' | 'en' = 'es'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  const intervals = {
    es: [
      { label: 'años', seconds: 31536000 },
      { label: 'meses', seconds: 2592000 },
      { label: 'días', seconds: 86400 },
      { label: 'horas', seconds: 3600 },
      { label: 'minutos', seconds: 60 },
      { label: 'segundos', seconds: 1 }
    ],
    en: [
      { label: 'years', seconds: 31536000 },
      { label: 'months', seconds: 2592000 },
      { label: 'days', seconds: 86400 },
      { label: 'hours', seconds: 3600 },
      { label: 'minutes', seconds: 60 },
      { label: 'seconds', seconds: 1 }
    ]
  };
  
  for (const interval of intervals[locale]) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count > 0) {
      if (locale === 'es') {
        return count === 1 
          ? `hace 1 ${interval.label.slice(0, -1)}` 
          : `hace ${count} ${interval.label}`;
      } else {
        return count === 1 
          ? `1 ${interval.label.slice(0, -1)} ago`
          : `${count} ${interval.label} ago`;
      }
    }
  }
  
  return locale === 'es' ? 'ahora' : 'now';
};

// Get appropriate greeting based on time of day
export const getGreeting = (locale: 'es' | 'en' = 'es'): string => {
  const hour = new Date().getHours();
  
  if (locale === 'es') {
    if (hour < 12) return 'Buenos días';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  } else {
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  }
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate Mexican phone number
export const isValidMexicanPhone = (phone: string): boolean => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Mexican phone numbers: 10 digits (mobile/landline) or 11 digits with country code
  return cleanPhone.length === 10 || (cleanPhone.length === 12 && cleanPhone.startsWith('52'));
};

// Format Mexican phone number
export const formatMexicanPhone = (phone: string): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  
  if (cleanPhone.length === 10) {
    // Format: (55) 1234-5678
    return `(${cleanPhone.slice(0, 2)}) ${cleanPhone.slice(2, 6)}-${cleanPhone.slice(6)}`;
  } else if (cleanPhone.length === 12 && cleanPhone.startsWith('52')) {
    // Format: +52 55 1234-5678
    const areaCode = cleanPhone.slice(2, 4);
    const number = cleanPhone.slice(4);
    return `+52 ${areaCode} ${number.slice(0, 4)}-${number.slice(4)}`;
  }
  
  return phone; // Return original if doesn't match expected patterns
};

// Generate WhatsApp URL with message
export const generateWhatsAppURL = (
  phone: string,
  message: string,
  locale: 'es' | 'en' = 'es'
): string => {
  const cleanPhone = phone.replace(/\D/g, '');
  const whatsappPhone = cleanPhone.startsWith('52') ? cleanPhone : `52${cleanPhone}`;
  
  const greeting = getGreeting(locale);
  const fullMessage = `${greeting}! ${message}`;
  
  return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(fullMessage)}`;
};

// Get SEO-friendly URL slug
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD') // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Remove duplicate hyphens
};

// Get opposite locale
export const getOppositeLocale = (currentLocale: 'es' | 'en'): 'es' | 'en' => {
  return currentLocale === 'es' ? 'en' : 'es';
};

// Build hreflang URLs for SEO
export const getHreflangURLs = (
  basePath: string,
  locales: string[] = ['es', 'en']
): Array<{ hreflang: string; href: string }> => {
  const baseURL = 'https://evosystems.dev';
  
  return locales.map(locale => ({
    hreflang: locale === 'es' ? 'es-MX' : 'en-US',
    href: locale === 'es' 
      ? `${baseURL}${basePath}` // Spanish is default, no prefix
      : `${baseURL}/en${basePath}` // English uses /en prefix
  }));
};

// Check if text contains Spanish-specific characters
export const isSpanishText = (text: string): boolean => {
  const spanishChars = /[ñáéíóúü¡¿]/i;
  return spanishChars.test(text);
};

// Truncate text respecting word boundaries
export const truncateText = (
  text: string,
  maxLength: number,
  locale: 'es' | 'en' = 'es'
): string => {
  if (text.length <= maxLength) return text;
  
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  const result = lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated;
  const ellipsis = locale === 'es' ? '...' : '...';
  
  return result + ellipsis;
};

// Get reading time estimate
export const getReadingTime = (
  text: string,
  locale: 'es' | 'en' = 'es',
  wpm: number = 200 // words per minute
): string => {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  
  if (locale === 'es') {
    return minutes === 1 ? '1 minuto' : `${minutes} minutos`;
  } else {
    return minutes === 1 ? '1 minute' : `${minutes} minutes`;
  }
};

export default {
  getCurrentLocale,
  getTranslations,
  formatDate,
  formatCurrency,
  formatNumber,
  getTimeAgo,
  getGreeting,
  isValidEmail,
  isValidMexicanPhone,
  formatMexicanPhone,
  generateWhatsAppURL,
  generateSlug,
  getOppositeLocale,
  getHreflangURLs,
  isSpanishText,
  truncateText,
  getReadingTime
};