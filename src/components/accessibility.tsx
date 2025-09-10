/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// Skip to main content link
export const SkipToMain: React.FC = () => {
  return (
    <a
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      href="#main-content"
    >
      Skip to main content
    </a>
  );
};

// Focus trap for modals and dropdowns
interface FocusTrapProps {
  children: React.ReactNode;
  isActive: boolean;
  restoreFocus?: boolean;
  className?: string;
}

export const FocusTrap: React.FC<FocusTrapProps> = ({ 
  children, 
  isActive, 
  restoreFocus = true, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    // Store the previously focused element
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    const container = containerRef.current;

    if (!container) return;

    // Get all focusable elements
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus first element
    firstElement?.focus();

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);

    return () => {
      document.removeEventListener('keydown', handleTabKey);
      
      // Restore focus when component unmounts
      if (restoreFocus && previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [isActive, restoreFocus]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

// Announce changes to screen readers
interface LiveRegionProps {
  message: string;
  politeness?: 'polite' | 'assertive';
  clearOnUnmount?: boolean;
}

export const LiveRegion: React.FC<LiveRegionProps> = ({ 
  message, 
  politeness = 'polite', 
  clearOnUnmount = true 
}) => {
  const [announcement, setAnnouncement] = useState(message);

  useEffect(() => {
    setAnnouncement(message);
  }, [message]);

  useEffect(() => {
    return () => {
      if (clearOnUnmount) {
        setAnnouncement('');
      }
    };
  }, [clearOnUnmount]);

  return (
    <div
      aria-atomic="true"
      aria-live={politeness}
      className="sr-only"
    >
      {announcement}
    </div>
  );
};

// Progress indicator for loading states
interface ProgressAnnouncerProps {
  isLoading: boolean;
  loadingMessage?: string;
  completedMessage?: string;
}

export const ProgressAnnouncer: React.FC<ProgressAnnouncerProps> = ({
  isLoading,
  loadingMessage = 'Loading content, please wait...',
  completedMessage = 'Content loaded successfully'
}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isLoading) {
      setMessage(loadingMessage);
    } else {
      setMessage(completedMessage);
      // Clear message after announcement
      const timer = setTimeout(() => setMessage(''), 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, loadingMessage, completedMessage]);

  return <LiveRegion message={message} politeness="polite" />;
};

// Route change announcer
export const RouteChangeAnnouncer: React.FC = () => {
  const router = useRouter();
  const [routeChangeMessage, setRouteChangeMessage] = useState('');

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setRouteChangeMessage('Navigating to new page...');
    };

    const handleRouteChangeComplete = () => {
      // Get page title or create descriptive message
      const pageName = document.title.split(' | ')[0] || 'New page';

      setRouteChangeMessage(`Navigated to ${pageName}`);
      
      // Clear message after short delay
      setTimeout(() => setRouteChangeMessage(''), 1000);
    };

    const handleRouteChangeError = () => {
      setRouteChangeMessage('Navigation failed. Please try again.');
      setTimeout(() => setRouteChangeMessage(''), 3000);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);

  return <LiveRegion message={routeChangeMessage} politeness="polite" />;
};

// Keyboard navigation helper
interface KeyboardNavProps {
  children: React.ReactNode;
  onEscape?: () => void;
  onEnter?: () => void;
  className?: string;
}

export const KeyboardNav: React.FC<KeyboardNavProps> = ({ 
  children, 
  onEscape, 
  onEnter, 
  className = '' 
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onEscape?.();
        break;
      case 'Enter':
        onEnter?.();
        break;
    }
  };

  return (
    <div className={className} onKeyDown={handleKeyDown}>
      {children}
    </div>
  );
};

// Enhanced button with accessibility features
interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
}

export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  loadingText = 'Loading...',
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500',
    ghost: 'text-slate-300 hover:text-white hover:bg-slate-800 focus:ring-slate-500'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      aria-disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              fill="currentColor"
            />
          </svg>
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

// Screen reader only text
interface SROnlyProps {
  children: React.ReactNode;
}

export const SROnly: React.FC<SROnlyProps> = ({ children }) => {
  return <span className="sr-only">{children}</span>;
};

// Visually hidden but accessible content
export const VisuallyHidden: React.FC<SROnlyProps> = ({ children }) => {
  return (
    <span className="absolute w-px h-px p-0 -m-px overflow-hidden clip-rect-0 whitespace-nowrap border-0">
      {children}
    </span>
  );
};

// Hook for managing focus
export const useFocusManagement = () => {
  const focusElement = (selector: string, delay: number = 0) => {
    setTimeout(() => {
      const element = document.querySelector(selector) as HTMLElement;

      element?.focus();
    }, delay);
  };

  const focusFirstError = () => {
    const firstError = document.querySelector('[aria-invalid="true"]') as HTMLElement;

    firstError?.focus();
  };

  const trapFocus = (containerSelector: string) => {
    const container = document.querySelector(containerSelector);
    
    if (!container) return;

    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener('keydown', handleTabKey);
    };
  };

  return {
    focusElement,
    focusFirstError,
    trapFocus
  };
};