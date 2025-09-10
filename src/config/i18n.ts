// Internationalization configuration and translations

export interface Translations {
  common: {
    loading: string;
    error: string;
    retry: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    readMore: string;
    contactUs: string;
    learnMore: string;
    getStarted: string;
  };
  navigation: {
    home: string;
    services: string;
    solutions: string;
    about: string;
    contact: string;
    faq: string;
    blog: string;
    privacy: string;
    terms: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  home: {
    hero: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      chip: string;
    };
    services: {
      title: string;
      titleHighlight: string;
      subtitle: string;
    };
    about: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      description: string;
      methodology: string;
      stats: {
        projects: string;
        years: string;
        clients: string;
      };
    };
    caseStudies: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      viewMore: string;
    };
    cta: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      button: string;
      linkedinButton: string;
    };
  };
  services: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    webDev: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      button: string;
    };
    mobile: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      button: string;
    };
    erp: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      button: string;
    };
    integrations: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      button: string;
    };
    analytics: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      button: string;
    };
    desktop: {
      title: string;
      subtitle: string;
      description: string;
      features: string[];
      button: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      name: string;
      email: string;
      company: string;
      phone: string;
      service: string;
      message: string;
      whatsappButton: string;
      emailButton: string;
    };
    info: {
      title: string;
      titleHighlight: string;
      whatsapp: {
        title: string;
        description: string;
        button: string;
      };
      email: {
        title: string;
        description: string;
        button: string;
      };
      linkedin: {
        title: string;
        description: string;
        button: string;
      };
      hours: {
        title: string;
        weekdays: string;
        saturday: string;
        sunday: string;
        emergency: string;
      };
    };
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    backToBlog: string;
    relatedPosts: string;
    categories: string;
    publishedOn: string;
    author: string;
  };
  cities: {
    cdmx: string;
    queretaro: string;
    edomex: string;
    guadalajara: string;
    monterrey: string;
    cancun: string;
    veracruz: string;
    puebla: string;
    tijuana: string;
    mexicoCity: string;
  };
}

export const translations: Record<'es' | 'en', Translations> = {
  es: {
    common: {
      loading: 'Cargando...',
      error: 'Error',
      retry: 'Reintentar',
      close: 'Cerrar',
      back: 'Volver',
      next: 'Siguiente',
      previous: 'Anterior',
      readMore: 'Leer más',
      contactUs: 'Contáctanos',
      learnMore: 'Conocer más',
      getStarted: 'Comenzar',
    },
    navigation: {
      home: 'Inicio',
      services: 'Servicios',
      solutions: 'Soluciones',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      faq: 'FAQ',
      blog: 'Blog',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
    },
    seo: {
      title: 'EvoSystems - Desarrollo de Software Profesional en México',
      description: 'Empresa líder en desarrollo de software en CDMX, Querétaro, Guadalajara, Monterrey. Aplicaciones web, móviles, sistemas ERP y soluciones tecnológicas.',
      keywords: 'desarrollo software México, aplicaciones web CDMX, desarrollo móvil Querétaro, ERP Guadalajara, sistemas empresariales Monterrey',
    },
    home: {
      hero: {
        title: 'Transformamos',
        titleHighlight: 'ideas',
        subtitle: 'Desarrollo de software profesional, aplicaciones web y móviles con tecnología de vanguardia. Sistemas ERP, integraciones y análisis de datos para impulsar tu negocio.',
        ctaPrimary: 'Solicitar cotización',
        ctaSecondary: 'Ver servicios',
        chip: '💻 Innovación • Calidad • Resultados',
      },
      services: {
        title: 'Nuestros',
        titleHighlight: 'servicios',
        subtitle: 'Soluciones tecnológicas integrales para empresas modernas',
      },
      about: {
        title: '¿Por qué elegir',
        titleHighlight: 'EvoSystems?',
        subtitle: 'Más de 5 años de experiencia',
        description: 'Somos una empresa de desarrollo de software especializada en crear soluciones tecnológicas que impulsan el crecimiento empresarial con más de 5 años de experiencia.',
        methodology: 'Nuestra metodología',
        stats: {
          projects: 'proyectos entregados',
          years: 'años de experiencia',
          clients: 'clientes satisfechos',
        },
      },
      caseStudies: {
        title: 'Casos de',
        titleHighlight: 'éxito',
        subtitle: 'Proyectos reales que han transformado negocios y generado resultados excepcionales',
        viewMore: 'Ver más casos de éxito',
      },
      cta: {
        title: '¿Listo para digitalizar',
        titleHighlight: 'tu negocio?',
        subtitle: 'Contáctanos por WhatsApp para una consulta gratuita y descubre cómo podemos ayudarte a transformar tu empresa con tecnología de vanguardia.',
        button: 'Consulta gratuita',
        linkedinButton: 'Síguenos en LinkedIn',
      },
    },
    services: {
      title: 'Nuestros',
      titleHighlight: 'Servicios',
      subtitle: 'Ofrecemos una gama completa de servicios de desarrollo de software para impulsar la transformación digital de tu empresa.',
      webDev: {
        title: 'Desarrollo Web',
        subtitle: 'Aplicaciones web modernas y escalables',
        description: 'Creamos aplicaciones web responsivas, rápidas y seguras utilizando las últimas tecnologías como React, Next.js, Vue.js y Angular.',
        features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'E-commerce y tiendas online', 'APIs REST y GraphQL'],
        button: 'Cotizar proyecto web',
      },
      mobile: {
        title: 'Apps Móviles',
        subtitle: 'Apps nativas y multiplataforma',
        description: 'Desarrollamos aplicaciones móviles para iOS y Android utilizando React Native, Flutter y tecnologías nativas.',
        features: ['iOS y Android nativo', 'React Native y Flutter', 'Publicación en tiendas', 'Integración con APIs'],
        button: 'Cotizar app móvil',
      },
      erp: {
        title: 'Sistemas ERP',
        subtitle: 'Gestión empresarial integral',
        description: 'Implementamos y personalizamos sistemas ERP con Odoo para optimizar todos los procesos de tu empresa.',
        features: ['Implementación de Odoo', 'Módulos personalizados', 'Migración de datos', 'Capacitación y soporte'],
        button: 'Consultar ERP',
      },
      integrations: {
        title: 'Integraciones',
        subtitle: 'Conecta todos tus sistemas',
        description: 'Conectamos y sincronizamos diferentes sistemas y plataformas para automatizar procesos y eliminar trabajo manual.',
        features: ['Integración de APIs', 'Webhooks y eventos', 'Sincronización de datos', 'Middleware personalizado'],
        button: 'Cotizar integración',
      },
      analytics: {
        title: 'Análisis de Datos',
        subtitle: 'Business Intelligence y reportes',
        description: 'Transformamos tus datos en información valiosa con dashboards interactivos, reportes automatizados y análisis predictivo.',
        features: ['Dashboards en Power BI', 'Visualizaciones en Tableau', 'Análisis con Python/R', 'Reportes automatizados'],
        button: 'Consultar análisis',
      },
      desktop: {
        title: 'Apps de Escritorio',
        subtitle: 'Software multiplataforma',
        description: 'Desarrollamos aplicaciones de escritorio para Windows, Mac y Linux usando Electron, Tauri y tecnologías nativas.',
        features: ['Electron y Tauri', 'Windows, Mac y Linux', 'Instaladores automáticos', 'Auto-actualizaciones'],
        button: 'Cotizar desktop app',
      },
      cta: {
        title: '¿Necesitas una solución personalizada?',
        subtitle: 'Contáctanos para una consulta gratuita y definamos juntos la mejor estrategia tecnológica para tu empresa.',
        button: 'Consulta gratuita',
      },
    },
    contact: {
      title: 'Contáctanos',
      subtitle: '¿Tienes un proyecto en mente? Obtén una cotización gratuita y descubre cómo podemos ayudarte a transformar tu idea en realidad.',
      form: {
        title: 'Solicita tu',
        titleHighlight: 'cotización',
        subtitle: 'Completa el formulario y te contactaremos para discutir tu proyecto y proporcionarte una cotización personalizada sin compromiso.',
        name: 'Nombre completo',
        email: 'Email',
        company: 'Empresa',
        phone: 'Teléfono',
        service: 'Servicio de interés',
        message: 'Mensaje',
        whatsappButton: 'Enviar por WhatsApp',
        emailButton: 'Enviar por Email',
      },
      info: {
        title: 'Información de',
        titleHighlight: 'contacto',
        whatsapp: {
          title: 'WhatsApp',
          description: 'Respuesta inmediata para cotizaciones y consultas',
          button: '+52 55 0000 0000',
        },
        email: {
          title: 'Email',
          description: 'Para consultas formales y documentación detallada',
          button: 'info@evosystems.dev',
        },
        linkedin: {
          title: 'LinkedIn',
          description: 'Síguenos para actualizaciones y casos de éxito',
          button: 'Seguir en LinkedIn',
        },
        hours: {
          title: 'Horarios de Atención',
          weekdays: 'Lunes a Viernes: 9:00 AM - 7:00 PM',
          saturday: 'Sábados: 10:00 AM - 2:00 PM',
          sunday: 'Domingos: Cerrado',
          emergency: '⚡ WhatsApp disponible 24/7 para urgencias',
        },
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Artículos sobre desarrollo de software, tecnología y tendencias digitales',
      readMore: 'Leer más',
      backToBlog: 'Volver al blog',
      relatedPosts: 'Artículos relacionados',
      categories: 'Categorías',
      publishedOn: 'Publicado el',
      author: 'Autor',
    },
    cities: {
      cdmx: 'Ciudad de México',
      queretaro: 'Querétaro',
      edomex: 'Estado de México',
      guadalajara: 'Guadalajara',
      monterrey: 'Monterrey',
      cancun: 'Cancún',
      veracruz: 'Veracruz',
      puebla: 'Puebla',
      tijuana: 'Tijuana',
      mexicoCity: 'CDMX',
    },
  },
  en: {
    common: {
      loading: 'Loading...',
      error: 'Error',
      retry: 'Retry',
      close: 'Close',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      readMore: 'Read more',
      contactUs: 'Contact Us',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
    },
    navigation: {
      home: 'Home',
      services: 'Services',
      solutions: 'Solutions',
      about: 'About Us',
      contact: 'Contact',
      faq: 'FAQ',
      blog: 'Blog',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
    },
    seo: {
      title: 'EvoSystems - Professional Software Development in Mexico',
      description: 'Leading software development company in Mexico City, Queretaro, Guadalajara, Monterrey. Web applications, mobile apps, ERP systems and technological solutions.',
      keywords: 'software development Mexico, web applications Mexico City, mobile development Queretaro, ERP Guadalajara, enterprise systems Monterrey',
    },
    home: {
      hero: {
        title: 'We transform',
        titleHighlight: 'ideas',
        subtitle: 'Professional software development, web and mobile applications with cutting-edge technology. ERP systems, integrations and data analysis to boost your business.',
        ctaPrimary: 'Request quote',
        ctaSecondary: 'View services',
        chip: '💻 Innovation • Quality • Results',
      },
      services: {
        title: 'Our',
        titleHighlight: 'services',
        subtitle: 'Comprehensive technological solutions for modern companies',
      },
      about: {
        title: 'Why choose',
        titleHighlight: 'EvoSystems?',
        subtitle: 'More than 5 years of experience',
        description: 'We are a software development company specialized in creating technological solutions that drive business growth with more than 5 years of experience.',
        methodology: 'Our methodology',
        stats: {
          projects: 'delivered projects',
          years: 'years of experience',
          clients: 'satisfied clients',
        },
      },
      caseStudies: {
        title: 'Success',
        titleHighlight: 'stories',
        subtitle: 'Real projects that have transformed businesses and generated exceptional results',
        viewMore: 'View more success stories',
      },
      cta: {
        title: 'Ready to digitize',
        titleHighlight: 'your business?',
        subtitle: 'Contact us via WhatsApp for a free consultation and discover how we can help you transform your company with cutting-edge technology.',
        button: 'Free consultation',
        linkedinButton: 'Follow us on LinkedIn',
      },
    },
    services: {
      title: 'Our',
      titleHighlight: 'Services',
      subtitle: 'We offer a complete range of software development services to drive your company\'s digital transformation.',
      webDev: {
        title: 'Web Development',
        subtitle: 'Modern and scalable web applications',
        description: 'We create responsive, fast and secure web applications using the latest technologies like React, Next.js, Vue.js and Angular.',
        features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'E-commerce and online stores', 'REST and GraphQL APIs'],
        button: 'Quote web project',
      },
      mobile: {
        title: 'Mobile Apps',
        subtitle: 'Native and cross-platform apps',
        description: 'We develop mobile applications for iOS and Android using React Native, Flutter and native technologies.',
        features: ['Native iOS & Android', 'React Native & Flutter', 'App store publishing', 'API integration'],
        button: 'Quote mobile app',
      },
      erp: {
        title: 'ERP Systems',
        subtitle: 'Comprehensive business management',
        description: 'We implement and customize ERP systems with Odoo to optimize all your company\'s processes.',
        features: ['Odoo implementation', 'Custom modules', 'Data migration', 'Training and support'],
        button: 'Consult ERP',
      },
      integrations: {
        title: 'Integrations',
        subtitle: 'Connect all your systems',
        description: 'We connect and synchronize different systems and platforms to automate processes and eliminate manual work.',
        features: ['API integration', 'Webhooks and events', 'Data synchronization', 'Custom middleware'],
        button: 'Quote integration',
      },
      analytics: {
        title: 'Data Analysis',
        subtitle: 'Business Intelligence and reports',
        description: 'We transform your data into valuable information with interactive dashboards, automated reports and predictive analysis.',
        features: ['Power BI dashboards', 'Tableau visualizations', 'Python/R analysis', 'Automated reports'],
        button: 'Consult analysis',
      },
      desktop: {
        title: 'Desktop Apps',
        subtitle: 'Cross-platform software',
        description: 'We develop desktop applications for Windows, Mac and Linux using Electron, Tauri and native technologies.',
        features: ['Electron & Tauri', 'Windows, Mac & Linux', 'Automatic installers', 'Auto-updates'],
        button: 'Quote desktop app',
      },
      cta: {
        title: 'Need a custom solution?',
        subtitle: 'Contact us for a free consultation and let\'s define together the best technological strategy for your company.',
        button: 'Free consultation',
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Have a project in mind? Get a free quote and discover how we can help you turn your idea into reality.',
      form: {
        title: 'Request your',
        titleHighlight: 'quote',
        subtitle: 'Complete the form and we\'ll contact you to discuss your project and provide you with a personalized quote at no cost.',
        name: 'Full name',
        email: 'Email',
        company: 'Company',
        phone: 'Phone',
        service: 'Service of interest',
        message: 'Message',
        whatsappButton: 'Send via WhatsApp',
        emailButton: 'Send via Email',
      },
      info: {
        title: 'Contact',
        titleHighlight: 'information',
        whatsapp: {
          title: 'WhatsApp',
          description: 'Immediate response for quotes and consultations',
          button: '+52 55 0000 0000',
        },
        email: {
          title: 'Email',
          description: 'For formal consultations and detailed documentation',
          button: 'info@evosystems.dev',
        },
        linkedin: {
          title: 'LinkedIn',
          description: 'Follow us for updates and success stories',
          button: 'Follow on LinkedIn',
        },
        hours: {
          title: 'Business Hours',
          weekdays: 'Monday to Friday: 9:00 AM - 7:00 PM',
          saturday: 'Saturdays: 10:00 AM - 2:00 PM',
          sunday: 'Sundays: Closed',
          emergency: '⚡ WhatsApp available 24/7 for emergencies',
        },
      },
    },
    blog: {
      title: 'Blog',
      subtitle: 'Articles about software development, technology and digital trends',
      readMore: 'Read more',
      backToBlog: 'Back to blog',
      relatedPosts: 'Related articles',
      categories: 'Categories',
      publishedOn: 'Published on',
      author: 'Author',
    },
    cities: {
      cdmx: 'Mexico City',
      queretaro: 'Queretaro',
      edomex: 'State of Mexico',
      guadalajara: 'Guadalajara',
      monterrey: 'Monterrey',
      cancun: 'Cancun',
      veracruz: 'Veracruz',
      puebla: 'Puebla',
      tijuana: 'Tijuana',
      mexicoCity: 'Mexico City',
    },
  },
};

// Utility function to get translations
export const useTranslations = (locale: 'es' | 'en' = 'es') => {
  return translations[locale] || translations.es;
};