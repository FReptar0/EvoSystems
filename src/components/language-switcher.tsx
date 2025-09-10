import { useRouter } from 'next/router';
import { useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react';
import { ChevronDownIcon } from '@/components/icons';

// Language configuration
const languages = {
  es: {
    name: 'Español',
    flag: '🇲🇽',
    country: 'México'
  },
  en: {
    name: 'English',
    flag: '🇺🇸',
    country: 'United States'
  }
};

interface LanguageSwitcherProps {
  variant?: 'default' | 'compact' | 'icon-only';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  variant = 'default',
  className = '' 
}) => {
  const router = useRouter();
  const { locale, asPath, locales } = router;
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages[locale as keyof typeof languages] || languages.es;

  const handleLanguageChange = (newLocale: string) => {
    // Close dropdown
    setIsOpen(false);
    
    // Navigate to the same page in the new locale
    router.push(asPath, asPath, { 
      locale: newLocale,
      scroll: false 
    });
  };

  const getButtonContent = () => {
    switch (variant) {
      case 'icon-only':
        return (
          <span className="text-lg" role="img" aria-label={currentLanguage.country}>
            {currentLanguage.flag}
          </span>
        );
      case 'compact':
        return (
          <div className="flex items-center gap-2">
            <span className="text-sm" role="img" aria-label={currentLanguage.country}>
              {currentLanguage.flag}
            </span>
            <span className="text-sm font-medium">
              {locale?.toUpperCase()}
            </span>
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2">
            <span role="img" aria-label={currentLanguage.country}>
              {currentLanguage.flag}
            </span>
            <span className="font-medium">
              {currentLanguage.name}
            </span>
          </div>
        );
    }
  };

  return (
    <Dropdown 
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      placement="bottom-end"
      className={className}
    >
      <DropdownTrigger>
        <Button
          variant="ghost"
          size="sm"
          endContent={variant !== 'icon-only' && <ChevronDownIcon size={16} />}
          className="min-w-unit-0 gap-2 text-slate-200 hover:text-white hover:bg-slate-800/50"
          aria-label={`Current language: ${currentLanguage.name}. Click to change language`}
          data-testid="language-switcher"
        >
          {getButtonContent()}
        </Button>
      </DropdownTrigger>
      
      <DropdownMenu
        aria-label="Select language"
        onAction={(key) => handleLanguageChange(key as string)}
        selectedKeys={locale ? [locale] : []}
        selectionMode="single"
        className="min-w-[160px]"
      >
        {locales?.map((localeCode) => {
          const lang = languages[localeCode as keyof typeof languages];
          if (!lang) return null;
          
          return (
            <DropdownItem 
              key={localeCode}
              textValue={lang.name}
              className="gap-2"
              startContent={
                <span role="img" aria-label={lang.country}>
                  {lang.flag}
                </span>
              }
              description={lang.country}
            >
              <div className="flex flex-col">
                <span className="font-medium">{lang.name}</span>
              </div>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

// Mobile-friendly language switcher
export const MobileLanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const router = useRouter();
  const { locale, asPath, locales } = router;
  
  const currentLanguage = languages[locale as keyof typeof languages] || languages.es;

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    router.push(asPath, asPath, { 
      locale: newLocale,
      scroll: false 
    });
  };

  return (
    <div className={`relative ${className}`}>
      <select
        value={locale}
        onChange={handleLanguageChange}
        className="appearance-none bg-slate-800/50 border border-slate-700 text-white text-sm rounded-lg px-3 py-2 pr-8 hover:border-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
        aria-label="Select language"
      >
        {locales?.map((localeCode) => {
          const lang = languages[localeCode as keyof typeof languages];
          if (!lang) return null;
          
          return (
            <option key={localeCode} value={localeCode}>
              {lang.flag} {lang.name}
            </option>
          );
        })}
      </select>
      
      {/* Custom dropdown arrow */}
      <ChevronDownIcon 
        size={16} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none"
      />
    </div>
  );
};

// Hook for getting current language info
export const useLanguage = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  
  const currentLanguage = languages[locale as keyof typeof languages] || languages.es;
  const availableLanguages = locales?.map(code => ({
    code,
    ...languages[code as keyof typeof languages]
  })).filter(Boolean) || [];

  const switchLanguage = (newLocale: string) => {
    router.push(asPath, asPath, { 
      locale: newLocale,
      scroll: false 
    });
  };

  return {
    currentLanguage: {
      code: locale,
      ...currentLanguage
    },
    availableLanguages,
    switchLanguage,
    isRTL: false, // None of our supported languages are RTL
  };
};

export default LanguageSwitcher;