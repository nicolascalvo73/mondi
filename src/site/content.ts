export type Lang = 'es' | 'en'

export interface Content {
  meta: { title: string; description: string; ogLocale: string }
  skip: string
  nav: { services: string; cases: string; process: string; contact: string; talk: string }
  ui: { theme: string; language: string; backTop: string; menu: string; close: string }
  hero: { tag: string; year: string; lead: string; big: string; text: string; ctaCases: string; ctaTalk: string }
  about: { tag: string; strong: string; soft: string; stack: string[] }
  services: {
    title: [string, string]
    tag: string
    items: { title: string; text: string }[]
  }
  cases: {
    title: [string, string]
    tag: string
    open: string
    items: { slug: string; name: string; meta: string; alt: string }[]
  }
  process: {
    title: [string, string]
    tag: string
    steps: { title: string; text: string }[]
  }
  contact: {
    tag: string
    title: [string, string, string]
    text: string
    form: {
      name: string
      namePh: string
      email: string
      emailPh: string
      type: string
      types: string[]
      message: string
      messagePh: string
      send: string
      sending: string
      ok: string
      error: string
    }
  }
  footer: { brand: string; rights: string; cases: string; services: string; labs: string; blog: string }
}

export const content: Record<Lang, Content> = {
  es: {
    meta: {
      title: 'Mondi Studio — Diseño y software para marcas que escalan',
      description:
        'Estudio de diseño y desarrollo de software: estrategia y marca, producto y web, ingeniería, datos, marketing y pauta. Un equipo multidisciplinario con base en Córdoba, Argentina.',
      ogLocale: 'es_AR',
    },
    skip: 'Ir al contenido principal',
    nav: { services: 'Servicios', cases: 'Casos', process: 'Proceso', contact: 'Contacto', talk: 'Hablemos' },
    ui: {
      theme: 'Cambiar tema claro u oscuro',
      language: 'Idioma',
      backTop: 'Volver arriba',
      menu: 'Abrir menú',
      close: 'Cerrar menú',
    },
    hero: {
      tag: '[ESTUDIO MULTIDISCIPLINARIO]',
      year: '[2026]',
      lead: 'Diseño y software para marcas que',
      big: 'escalan.',
      text: 'Diseñamos y construimos producto digital para marcas que quieren crecer. Un equipo de desarrolladores, analistas, científicos de datos y especialistas en marketing y pauta paga.',
      ctaCases: 'Ver casos',
      ctaTalk: 'Hablemos',
    },
    about: {
      tag: '[QUIÉNES SOMOS]',
      strong:
        'Somos un equipo de desarrolladores, analistas, científicos de datos y especialistas en marketing.',
      soft: 'Diseñamos, construimos y hacemos crecer producto digital de punta a punta.',
      stack: ['React', 'TypeScript', 'Next.js', 'Three.js', 'Sanity', 'Analítica', 'Medios pagos'],
    },
    services: {
      title: ['Qué', 'hacemos'],
      tag: '[SERVICIOS] [04]',
      items: [
        {
          title: 'Estrategia y marca',
          text: 'Posicionamiento, identidad y narrativa para que la marca se entienda y se recuerde.',
        },
        {
          title: 'Diseño de producto y web',
          text: 'Interfaces, sitios y experiencias 3D e interactivas pensadas para convertir.',
        },
        {
          title: 'Desarrollo de software',
          text: 'Aplicaciones web y plataformas escalables, de la arquitectura a producción.',
        },
        {
          title: 'Datos, marketing y pauta',
          text: 'Analítica, experimentación y medios pagos para medir qué funciona y crecer.',
        },
      ],
    },
    cases: {
      title: ['Trabajo', 'seleccionado'],
      tag: '[CASOS] [04]',
      open: 'Ver',
      items: [
        { slug: 'wanaku', name: 'Wanaku Moto', meta: 'Web · E-commerce · 2026', alt: 'Portada del caso Wanaku Moto' },
        { slug: 'dillom', name: 'rip.dillom', meta: 'Web 3D · Mobile first · 2026', alt: 'Portada del caso rip.dillom' },
        {
          slug: 'retiro-yoga-swami',
          name: 'Retiro de yoga',
          meta: 'Web · Reservas · Pagos · 2026',
          alt: 'Portada del caso Retiro de yoga',
        },
        {
          slug: 'pritiado',
          name: 'Pritiado Patrimonio',
          meta: 'Web 3D · Narrativa cultural · 2026',
          alt: 'Portada del caso Pritiado Patrimonio',
        },
      ],
    },
    process: {
      title: ['Cómo', 'trabajamos'],
      tag: '[PROCESO] [04]',
      steps: [
        { title: 'Descubrir', text: 'Entendemos el negocio, los usuarios y los datos.' },
        { title: 'Definir', text: 'Acordamos alcance, métricas y arquitectura.' },
        { title: 'Construir', text: 'Diseñamos y desarrollamos en ciclos cortos y visibles.' },
        { title: 'Crecer', text: 'Medimos, optimizamos y escalamos con datos.' },
      ],
    },
    contact: {
      tag: '[CONTACTO]',
      title: ['Contanos', 'tu', 'proyecto.'],
      text: 'Respondemos en menos de 48 horas hábiles.',
      form: {
        name: 'Nombre',
        namePh: 'Tu nombre',
        email: 'Email',
        emailPh: 'nombre@empresa.com',
        type: 'Tipo de proyecto',
        types: ['Estrategia y marca', 'Diseño de producto y web', 'Desarrollo de software', 'Datos, marketing y pauta', 'Otro'],
        message: 'Mensaje',
        messagePh: 'Contanos qué querés lograr',
        send: 'Enviar mensaje →',
        sending: 'Enviando…',
        ok: '¡Gracias! Recibimos tu mensaje y te respondemos en menos de 48 horas hábiles.',
        error: 'No pudimos enviar el mensaje. Probá de nuevo en unos minutos o escribinos a hola@mondistudio.com.ar.',
      },
    },
    footer: {
      brand: 'Mondi Studio',
      rights: '© 2026 Mondi Studio · Hecho en Argentina',
      cases: 'Casos',
      services: 'Servicios',
      labs: 'Mondilabs',
      blog: 'Blog',
    },
  },
  en: {
    meta: {
      title: 'Mondi Studio — Design and software for brands that scale',
      description:
        'Design and software studio: strategy and brand, product and web, engineering, data, marketing and paid media. A multidisciplinary team based in Córdoba, Argentina.',
      ogLocale: 'en_US',
    },
    skip: 'Skip to main content',
    nav: { services: 'Services', cases: 'Work', process: 'Process', contact: 'Contact', talk: "Let's talk" },
    ui: {
      theme: 'Switch between light and dark theme',
      language: 'Language',
      backTop: 'Back to top',
      menu: 'Open menu',
      close: 'Close menu',
    },
    hero: {
      tag: '[MULTIDISCIPLINARY STUDIO]',
      year: '[2026]',
      lead: 'Design and software for brands that',
      big: 'scale.',
      text: 'We design and build digital product for brands that want to grow. A team of developers, analysts, data scientists and marketing and paid-media specialists.',
      ctaCases: 'See work',
      ctaTalk: "Let's talk",
    },
    about: {
      tag: '[WHO WE ARE]',
      strong: 'We are a team of developers, analysts, data scientists and marketing specialists.',
      soft: 'We design, build and grow digital product from end to end.',
      stack: ['React', 'TypeScript', 'Next.js', 'Three.js', 'Sanity', 'Analytics', 'Paid media'],
    },
    services: {
      title: ['What', 'we do'],
      tag: '[SERVICES] [04]',
      items: [
        {
          title: 'Strategy and brand',
          text: 'Positioning, identity and narrative so the brand is understood and remembered.',
        },
        {
          title: 'Product and web design',
          text: 'Interfaces, sites and 3D, interactive experiences designed to convert.',
        },
        {
          title: 'Software development',
          text: 'Web applications and scalable platforms, from architecture to production.',
        },
        {
          title: 'Data, marketing and paid media',
          text: 'Analytics, experimentation and paid media to measure what works and grow.',
        },
      ],
    },
    cases: {
      title: ['Selected', 'work'],
      tag: '[WORK] [04]',
      open: 'View',
      items: [
        { slug: 'wanaku', name: 'Wanaku Moto', meta: 'Web · E-commerce · 2026', alt: 'Wanaku Moto case cover' },
        { slug: 'dillom', name: 'rip.dillom', meta: '3D web · Mobile first · 2026', alt: 'rip.dillom case cover' },
        {
          slug: 'retiro-yoga-swami',
          name: 'Yoga retreat',
          meta: 'Web · Bookings · Payments · 2026',
          alt: 'Yoga retreat case cover',
        },
        {
          slug: 'pritiado',
          name: 'Pritiado Patrimonio',
          meta: '3D web · Cultural storytelling · 2026',
          alt: 'Pritiado Patrimonio case cover',
        },
      ],
    },
    process: {
      title: ['How we', 'work'],
      tag: '[PROCESS] [04]',
      steps: [
        { title: 'Discover', text: 'We learn the business, the users and the data.' },
        { title: 'Define', text: 'We agree on scope, metrics and architecture.' },
        { title: 'Build', text: 'We design and develop in short, visible cycles.' },
        { title: 'Grow', text: 'We measure, optimize and scale with data.' },
      ],
    },
    contact: {
      tag: '[CONTACT]',
      title: ['Tell us', 'about your', 'project.'],
      text: 'We reply within 48 business hours.',
      form: {
        name: 'Name',
        namePh: 'Your name',
        email: 'Email',
        emailPh: 'name@company.com',
        type: 'Project type',
        types: ['Strategy and brand', 'Product and web design', 'Software development', 'Data, marketing and paid media', 'Other'],
        message: 'Message',
        messagePh: 'Tell us what you want to achieve',
        send: 'Send message →',
        sending: 'Sending…',
        ok: 'Thank you! We got your message and will reply within 48 business hours.',
        error: 'We could not send your message. Please try again in a few minutes or write to hola@mondistudio.com.ar.',
      },
    },
    footer: {
      brand: 'Mondi Studio',
      rights: '© 2026 Mondi Studio · Made in Argentina',
      cases: 'Work',
      services: 'Services',
      labs: 'Mondilabs',
      blog: 'Blog',
    },
  },
}
