import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  placeholder = 'empty',
  blurDataURL,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Generate a simple blur placeholder if none provided
  const defaultBlurData = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzMzNzMzIi8+Cjwvc3ZnPgo=';

  if (error) {
    // Fallback component when image fails to load
    return (
      <div 
        className={`bg-slate-800 flex items-center justify-center ${className}`}
        style={{ width: width || '100%', height: height || 'auto' }}
      >
        <div className="text-slate-500 text-center">
          <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <p className="text-sm">Imagen no disponible</p>
        </div>
      </div>
    );
  }

  const imageProps: any = {
    src,
    alt,
    className: `${className || ''} ${
      isLoading ? 'blur-sm' : 'blur-0'
    } transition-all duration-300`,
    onLoad: () => setIsLoading(false),
    onError: () => setError(true),
    priority,
  };

  if (fill) {
    imageProps.fill = true;
    if (sizes) imageProps.sizes = sizes;
  } else {
    imageProps.width = width;
    imageProps.height = height;
  }

  if (placeholder === 'blur') {
    imageProps.placeholder = 'blur';
    imageProps.blurDataURL = blurDataURL || defaultBlurData;
  }

  return <Image {...imageProps} />;
};

// Component for hero/banner images with automatic optimization
export const HeroImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill
      priority
      className={className}
      sizes="100vw"
      placeholder="blur"
    />
  );
};

// Component for card/thumbnail images
export const ThumbnailImage: React.FC<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}> = ({ src, alt, width = 400, height = 300, className }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
    />
  );
};

// Logo component with optimization
export const Logo: React.FC<{
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}> = ({ src, alt = "Logo", width = 120, height = 40, className }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
};