// Mexican cities data for local SEO
export interface CityData {
  id: string;
  name: {
    es: string;
    en: string;
  };
  state: {
    es: string;
    en: string;
  };
  slug: string;
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  timezone: string;
  economicSectors: string[];
  seo: {
    es: {
      title: string;
      description: string;
      keywords: string[];
    };
    en: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
  services: {
    priority: string[];
    industries: string[];
  };
  caseStudies?: string[];
  testimonials?: string[];
}

export const mexicanCities: CityData[] = [
  {
    id: 'cdmx',
    name: {
      es: 'Ciudad de México',
      en: 'Mexico City'
    },
    state: {
      es: 'Ciudad de México',
      en: 'Mexico City'
    },
    slug: 'ciudad-de-mexico',
    population: 21804515,
    coordinates: {
      lat: 19.4326,
      lng: -99.1332
    },
    timezone: 'America/Mexico_City',
    economicSectors: ['finance', 'technology', 'manufacturing', 'services', 'government'],
    seo: {
      es: {
        title: 'Desarrollo de Software en Ciudad de México | EvoSystems',
        description: 'Empresa líder en desarrollo de software en CDMX. Aplicaciones web, móviles, sistemas ERP y soluciones tecnológicas para empresas en Ciudad de México.',
        keywords: [
          'desarrollo software CDMX',
          'aplicaciones web Ciudad de México',
          'desarrollo móvil CDMX',
          'ERP Ciudad de México',
          'sistemas empresariales CDMX',
          'desarrollo web CDMX',
          'programadores CDMX'
        ]
      },
      en: {
        title: 'Software Development in Mexico City | EvoSystems',
        description: 'Leading software development company in Mexico City. Web applications, mobile apps, ERP systems and technological solutions for businesses in CDMX.',
        keywords: [
          'software development Mexico City',
          'web applications CDMX',
          'mobile development Mexico City',
          'ERP Mexico City',
          'enterprise systems CDMX',
          'web development Mexico City',
          'programmers CDMX'
        ]
      }
    },
    services: {
      priority: ['web-development', 'erp-systems', 'mobile-apps', 'integrations'],
      industries: ['finance', 'healthcare', 'retail', 'government', 'education']
    }
  },
  {
    id: 'queretaro',
    name: {
      es: 'Querétaro',
      en: 'Queretaro'
    },
    state: {
      es: 'Querétaro',
      en: 'Queretaro'
    },
    slug: 'queretaro',
    population: 2368467,
    coordinates: {
      lat: 20.5888,
      lng: -100.3899
    },
    timezone: 'America/Mexico_City',
    economicSectors: ['aerospace', 'automotive', 'technology', 'manufacturing'],
    seo: {
      es: {
        title: 'Desarrollo de Software en Querétaro | EvoSystems',
        description: 'Desarrollo de software profesional en Querétaro. Aplicaciones web, móviles y sistemas ERP para empresas en el Bajío mexicano.',
        keywords: [
          'desarrollo software Querétaro',
          'aplicaciones web Querétaro',
          'desarrollo móvil Querétaro',
          'ERP Querétaro',
          'sistemas empresariales Querétaro',
          'desarrollo web Querétaro',
          'programadores Querétaro'
        ]
      },
      en: {
        title: 'Software Development in Queretaro | EvoSystems',
        description: 'Professional software development in Queretaro. Web applications, mobile apps and ERP systems for companies in the Mexican Bajio.',
        keywords: [
          'software development Queretaro',
          'web applications Queretaro',
          'mobile development Queretaro',
          'ERP Queretaro',
          'enterprise systems Queretaro',
          'web development Queretaro',
          'programmers Queretaro'
        ]
      }
    },
    services: {
      priority: ['web-development', 'mobile-apps', 'erp-systems', 'analytics'],
      industries: ['aerospace', 'automotive', 'manufacturing', 'logistics']
    }
  },
  {
    id: 'guadalajara',
    name: {
      es: 'Guadalajara',
      en: 'Guadalajara'
    },
    state: {
      es: 'Jalisco',
      en: 'Jalisco'
    },
    slug: 'guadalajara',
    population: 5268642,
    coordinates: {
      lat: 20.6597,
      lng: -103.3496
    },
    timezone: 'America/Mexico_City',
    economicSectors: ['technology', 'electronics', 'software', 'telecommunications'],
    seo: {
      es: {
        title: 'Desarrollo de Software en Guadalajara | EvoSystems',
        description: 'Desarrollo de software en Guadalajara, Silicon Valley de México. Especialistas en aplicaciones web, móviles y sistemas empresariales en Jalisco.',
        keywords: [
          'desarrollo software Guadalajara',
          'aplicaciones web Guadalajara',
          'desarrollo móvil Guadalajara',
          'ERP Guadalajara',
          'sistemas empresariales Guadalajara',
          'desarrollo web Jalisco',
          'programadores Guadalajara'
        ]
      },
      en: {
        title: 'Software Development in Guadalajara | EvoSystems',
        description: 'Software development in Guadalajara, Silicon Valley of Mexico. Specialists in web applications, mobile apps and enterprise systems in Jalisco.',
        keywords: [
          'software development Guadalajara',
          'web applications Guadalajara',
          'mobile development Guadalajara',
          'ERP Guadalajara',
          'enterprise systems Guadalajara',
          'web development Jalisco',
          'programmers Guadalajara'
        ]
      }
    },
    services: {
      priority: ['web-development', 'mobile-apps', 'analytics', 'integrations'],
      industries: ['technology', 'electronics', 'telecommunications', 'software']
    }
  },
  {
    id: 'monterrey',
    name: {
      es: 'Monterrey',
      en: 'Monterrey'
    },
    state: {
      es: 'Nuevo León',
      en: 'Nuevo Leon'
    },
    slug: 'monterrey',
    population: 5341171,
    coordinates: {
      lat: 25.6866,
      lng: -100.3161
    },
    timezone: 'America/Mexico_City',
    economicSectors: ['manufacturing', 'finance', 'technology', 'steel', 'cement'],
    seo: {
      es: {
        title: 'Desarrollo de Software en Monterrey | EvoSystems',
        description: 'Soluciones de software empresarial en Monterrey, Nuevo León. Desarrollo web, móvil y sistemas ERP para la industria regiomontana.',
        keywords: [
          'desarrollo software Monterrey',
          'aplicaciones web Monterrey',
          'desarrollo móvil Monterrey',
          'ERP Monterrey',
          'sistemas empresariales Monterrey',
          'desarrollo web Nuevo León',
          'programadores Monterrey'
        ]
      },
      en: {
        title: 'Software Development in Monterrey | EvoSystems',
        description: 'Enterprise software solutions in Monterrey, Nuevo Leon. Web development, mobile apps and ERP systems for the regiomontana industry.',
        keywords: [
          'software development Monterrey',
          'web applications Monterrey',
          'mobile development Monterrey',
          'ERP Monterrey',
          'enterprise systems Monterrey',
          'web development Nuevo Leon',
          'programmers Monterrey'
        ]
      }
    },
    services: {
      priority: ['erp-systems', 'web-development', 'integrations', 'analytics'],
      industries: ['manufacturing', 'finance', 'steel', 'cement', 'automotive']
    }
  },
  {
    id: 'edomex',
    name: {
      es: 'Estado de México',
      en: 'State of Mexico'
    },
    state: {
      es: 'Estado de México',
      en: 'State of Mexico'
    },
    slug: 'estado-de-mexico',
    population: 16992418,
    coordinates: {
      lat: 19.3467,
      lng: -99.6336
    },
    timezone: 'America/Mexico_City',
    economicSectors: ['manufacturing', 'automotive', 'commerce', 'services'],
    seo: {
      es: {
        title: 'Desarrollo de Software en Estado de México | EvoSystems',
        description: 'Desarrollo de software en Estado de México. Aplicaciones web, móviles y sistemas empresariales para PYMES en Edomex.',
        keywords: [
          'desarrollo software Estado de México',
          'aplicaciones web Edomex',
          'desarrollo móvil Estado de México',
          'ERP Edomex',
          'sistemas empresariales Estado de México',
          'desarrollo web Edomex',
          'programadores Estado de México'
        ]
      },
      en: {
        title: 'Software Development in State of Mexico | EvoSystems',
        description: 'Software development in State of Mexico. Web applications, mobile apps and enterprise systems for SMEs in Edomex.',
        keywords: [
          'software development State of Mexico',
          'web applications Edomex',
          'mobile development State of Mexico',
          'ERP Edomex',
          'enterprise systems State of Mexico',
          'web development Edomex',
          'programmers State of Mexico'
        ]
      }
    },
    services: {
      priority: ['web-development', 'mobile-apps', 'erp-systems', 'desktop-apps'],
      industries: ['manufacturing', 'automotive', 'commerce', 'services']
    }
  },
  {
    id: 'cancun',
    name: {
      es: 'Cancún',
      en: 'Cancun'
    },
    state: {
      es: 'Quintana Roo',
      en: 'Quintana Roo'
    },
    slug: 'cancun',
    population: 888797,
    coordinates: {
      lat: 21.1619,
      lng: -86.8515
    },
    timezone: 'America/Cancun',
    economicSectors: ['tourism', 'hospitality', 'real-estate', 'services'],
    seo: {
      es: {
        title: 'Desarrollo de Software en Cancún | EvoSystems',
        description: 'Desarrollo de software para la industria turística en Cancún. Aplicaciones web, móviles y sistemas de gestión hotelera en Quintana Roo.',
        keywords: [
          'desarrollo software Cancún',
          'aplicaciones web turismo Cancún',
          'desarrollo móvil Cancún',
          'sistemas hoteleros Cancún',
          'software turístico Quintana Roo',
          'desarrollo web Cancún',
          'programadores Cancún'
        ]
      },
      en: {
        title: 'Software Development in Cancun | EvoSystems',
        description: 'Software development for the tourism industry in Cancun. Web applications, mobile apps and hotel management systems in Quintana Roo.',
        keywords: [
          'software development Cancun',
          'tourism web applications Cancun',
          'mobile development Cancun',
          'hotel systems Cancun',
          'tourism software Quintana Roo',
          'web development Cancun',
          'programmers Cancun'
        ]
      }
    },
    services: {
      priority: ['web-development', 'mobile-apps', 'erp-systems', 'integrations'],
      industries: ['tourism', 'hospitality', 'real-estate', 'restaurants']
    }
  },
  {
    id: 'veracruz',
    name: {
      es: 'Veracruz',
      en: 'Veracruz'
    },
    state: {
      es: 'Veracruz',
      en: 'Veracruz'
    },
    slug: 'veracruz',
    population: 607209,
    coordinates: {
      lat: 19.173,
      lng: -96.1342
    },
    timezone: 'America/Mexico_City',
    economicSectors: ['port', 'logistics', 'petrochemicals', 'commerce'],
    seo: {
      es: {
        title: 'Desarrollo de Software en Veracruz | EvoSystems',
        description: 'Desarrollo de software en el puerto de Veracruz. Sistemas logísticos, aplicaciones web y móviles para empresas del Golfo de México.',
        keywords: [
          'desarrollo software Veracruz',
          'aplicaciones web Veracruz',
          'sistemas logísticos Veracruz',
          'desarrollo móvil Veracruz',
          'software portuario',
          'desarrollo web Veracruz',
          'programadores Veracruz'
        ]
      },
      en: {
        title: 'Software Development in Veracruz | EvoSystems',
        description: 'Software development in the port of Veracruz. Logistics systems, web and mobile applications for companies in the Gulf of Mexico.',
        keywords: [
          'software development Veracruz',
          'web applications Veracruz',
          'logistics systems Veracruz',
          'mobile development Veracruz',
          'port software',
          'web development Veracruz',
          'programmers Veracruz'
        ]
      }
    },
    services: {
      priority: ['integrations', 'web-development', 'erp-systems', 'analytics'],
      industries: ['port', 'logistics', 'petrochemicals', 'commerce']
    }
  }
];

// Utility functions
export const getCityBySlug = (slug: string): CityData | undefined => {
  return mexicanCities.find(city => city.slug === slug);
};

export const getCityById = (id: string): CityData | undefined => {
  return mexicanCities.find(city => city.id === id);
};

export const getMajorCities = (limit?: number): CityData[] => {
  const sortedCities = mexicanCities.sort((a, b) => b.population - a.population);
  return limit ? sortedCities.slice(0, limit) : sortedCities;
};

export const getCitiesByIndustry = (industry: string): CityData[] => {
  return mexicanCities.filter(city => 
    city.services.industries.includes(industry) || 
    city.economicSectors.includes(industry)
  );
};

export const getCitiesForService = (service: string): CityData[] => {
  return mexicanCities.filter(city => city.services.priority.includes(service));
};