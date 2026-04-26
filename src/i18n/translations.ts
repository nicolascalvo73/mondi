export type Language = 'es' | 'en' | 'pt'

export const translations = {
  es: {
    nav: {
      servicios: 'Servicios',
      proceso: 'Proceso',
      plataformas: 'Plataformas',
      precios: 'Precios',
      sobreMi: 'Sobre mí',
      blog: 'Blog',
      hablemos: 'Hablemos',
      cerrarMenu: 'cerrar menú',
      abrirMenu: 'abrir menú de navegación',
    },
    hero: {
      chip: 'Estudio de diseño web · Córdoba, Argentina',
      title: 'Tu negocio, con la cara que',
      titleHighlight: 'merece',
      description:
        'Diseño y desarrollo web directo, sin vueltas. Landing pages, webs institucionales, tiendas online y mantenimiento. Todo con comunicación clara y entregas en tiempo.',
      ctaPrimary: 'Quiero mi web',
      ctaSecondary: 'Ver plataformas',
      directorCreativo: 'Director Creativo',
      quote: '"Miau miau, aprobado."',
    },
    servicios: {
      title: 'Servicios que',
      titleHighlight: 'funcionan',
      subtitle:
        'Desde una landing que convierte hasta una tienda enterprise. Todo diseñado para que tu negocio crezca.',
      landing: {
        title: 'Landing page + Web institucional',
        description:
          'Sitios diseñados para convertir visitantes en clientes. Optimizados para SEO, mobile y velocidad de carga.',
        chips: ['Next.js', 'React', 'Responsive', 'SEO'],
      },
      mantenimiento: {
        title: 'Mantenimiento',
        description:
          'Planes mensuales para que tu web esté siempre actualizada, segura y funcionando.',
        cta: 'Ver Planes',
      },
      tiendas: {
        title: 'Tiendas online',
        description: 'Configuración completa en las mejores plataformas de e-commerce.',
        platforms: ['Tienda Nube', 'Empretienda', 'WooCommerce', 'Shopify'],
      },
      vtex: {
        title: 'VTEX Enterprise',
        description:
          'Desarrollo y mantenimiento de tiendas enterprise en VTEX. Integraciones, customizaciones y soporte técnico especializado.',
        badge: 'Enterprise',
      },
      custom: {
        title: 'Software a medida de toda complejidad',
        description:
          'Desarrollo de sistemas de gestión personalizados para empresas, hospitales, instituciones educativas y organizaciones de cualquier sector. Desde ERPs hasta plataformas especializadas, construimos soluciones que se adaptan exactamente a tus procesos y necesidades.',
        badge: 'A medida',
        chips: ['Sistemas de gestión', 'ERPs', 'Hospitales', 'Educación', 'Integraciones', 'APIs', 'Cloud'],
      },
    },
    proceso: {
      title: 'Un proceso',
      titleHighlight: 'simple',
      subtitle: 'Sin complicaciones ni pasos innecesarios. Así trabajamos de principio a fin.',
      steps: [
        {
          numero: '01',
          titulo: 'Me contás tu negocio',
          descripcion:
            'Charlamos sobre qué necesitás, qué te gusta, y qué querés lograr con tu web. Sin formularios eternos.',
        },
        {
          numero: '02',
          titulo: 'Diseñamos juntos',
          descripcion:
            'Te muestro propuestas, ajustamos lo que haga falta. Vos decidís cómo queda tu proyecto.',
        },
        {
          numero: '03',
          titulo: 'Te entrego todo listo',
          descripcion:
            'Web funcionando, dominio configurado, hosting activo. Todo probado y listo para usar.',
        },
        {
          numero: '04',
          titulo: 'Te acompaño después',
          descripcion:
            'Si necesitás cambios, actualizaciones o tenés dudas, estoy disponible. Sin letra chica.',
        },
      ],
    },
    plataformas: {
      title: 'Plataformas con las que',
      titleHighlight: 'trabajo',
      subtitle: 'Elegimos la mejor tecnología para tu proyecto. Sin atarte a una sola opción.',
      tiendasTitle: 'Tiendas online',
      websTitle: 'Webs & dominios',
      idealPara: 'Ideal para:',
      cta: 'Hablemos de tu proyecto',
      noEncontras: '¿No encontrás la plataforma que necesitás?',
    },
    precios: {
      title: 'Precios',
      titleHighlight: 'transparentes',
      subtitle: 'Sin sorpresas ni costos ocultos. Sabés exactamente qué estás pagando.',
      desde: 'desde',
      elegido: 'El más elegido',
      addonTitle: 'Add-on: Mantenimiento mensual',
      mantenimientoBasico: 'Mantenimiento básico',
      mantenimientoPremium: 'Mantenimiento premium',
      vtexNote:
        'Proyectos VTEX Enterprise: presupuesto personalizado según alcance y complejidad.',
      cotizacion: 'Cotización dólar blue',
      metodoPago: 'Método de pago: transferencia, Mercado Pago, PayPal, crypto.',
      planes: [
        {
          nombre: 'Landing Page',
          descripcion: 'Ideal para lanzar un producto o servicio',
          caracteristicas: [
            'Diseño responsive',
            'Formulario de contacto',
            'SEO básico',
            'Hosting incluido 1 año',
            'Dominio .com.ar incluido',
          ],
        },
        {
          nombre: 'Web a medida',
          descripcion: 'Para empresas que necesitan presencia profesional',
          caracteristicas: [
            'Hasta 5 secciones',
            'Diseño personalizado',
            'SEO optimizado',
            'Blog integrado',
            'Hosting incluido 1 año',
            'Dominio .com.ar incluido',
            'Capacitación de uso',
          ],
        },
        {
          nombre: 'Tienda Online',
          descripcion: 'Configuración completa de tu e-commerce',
          caracteristicas: [
            'Setup en plataforma elegida',
            'Diseño de tema',
            'Carga de productos (hasta 50)',
            'Medios de pago',
            'Capacitación completa',
          ],
        },
      ],
      mantenimiento: [
        ['Actualizaciones de seguridad', 'Backup semanal', 'Soporte por email'],
        [
          'Todo lo del plan básico',
          'Cambios de contenido ilimitados',
          'Soporte prioritario',
          'Reportes mensuales',
        ],
      ],
    },
    testimonios: {
      title: 'Lo que dicen',
      titleHighlight: 'mis clientes',
      subtitle: 'Proyectos reales, clientes reales, resultados reales.',
    },
    sobreMi: {
      title: 'Un desarrollador y un',
      titleHighlight: 'equipo completo',
      p1: 'Soy desarrollador frontend con años de experiencia en agencias y proyectos enterprise. En 2023 decidí hacer algo más cercano: trabajar directo con negocios que necesitan una web sin la estructura (y los precios) de una agencia.',
      p2: 'Acá no hay "equipo de ventas" ni "gerente de cuenta". Me escribís, charlamos, diseñamos juntos y te entrego tu proyecto. Simple.',
      p3: 'Trabajamos en red con múltiples profesionales especializados en cada area para que tu proyecto sea completo y tenga todo lo que requiera.',
      p4: 'Ah, y Mondiola (mi gato) supervisa cada proyecto. Es exigente, pero justo.',
      valores: ['Entrega en tiempo', 'Comunicación directa', 'Sin letra chica', 'Hecho en Córdoba'],
    },
    contacto: {
      title: '¿',
      titleHighlight: 'Arrancamos',
      titleEnd: '?',
      subtitle: 'Contame qué necesitás y te respondo en menos de 24 horas. Sin compromiso.',
      nombre: 'Tu nombre',
      whatsapp: 'Tu WhatsApp',
      whatsappPlaceholder: 'Ej: +54 9 351 123 4567',
      negocio: 'Tu negocio (opcional)',
      servicio: '¿Qué servicio te interesa?',
      mensaje: 'Contame sobre tu proyecto',
      enviando: 'Enviando...',
      enviar: 'Enviar mensaje',
      success: '¡Mensaje enviado! Te respondo en menos de 24 horas.',
      error: 'Hubo un error. Probá escribirme directo a',
      servicios: [
        'Landing Page',
        'Web Institucional',
        'Tienda Online',
        'Mantenimiento',
        'VTEX Enterprise',
        'Otro',
      ],
      quote: '"Cada proyecto es una oportunidad para hacer algo que funcione de verdad."',
    },
    footer: {
      description:
        'Estudio de diseño y desarrollo web. Comunicación directa, sin estructuras de agencia.',
      navegacion: 'Navegación',
      derechos: 'Todos los derechos reservados.',
      hechoCon: 'Creado con 🤍 y maullidos 🐱 desde Córdoba, Argentina 🇦🇷',
    },
    whatsapp: 'Escribinos por WhatsApp',
    blog: {
      title: 'Blog',
      subtitle: 'Artículos sobre diseño, desarrollo y tecnología',
      errorTitle: 'Error loading posts',
      errorSubtitle: 'Unable to load blog posts. Please try again later.',
      noPosts: 'No posts yet. Check back soon!',
    },
  },
  en: {
    nav: {
      servicios: 'Services',
      proceso: 'Process',
      plataformas: 'Platforms',
      precios: 'Pricing',
      sobreMi: 'About me',
      blog: 'Blog',
      hablemos: "Let's talk",
      cerrarMenu: 'close menu',
      abrirMenu: 'open navigation menu',
    },
    hero: {
      chip: 'Web design studio · Córdoba, Argentina',
      title: 'Your business, with the face it',
      titleHighlight: 'deserves',
      description:
        'Straightforward web design and development. Landing pages, corporate websites, online stores and maintenance. All with clear communication and on-time delivery.',
      ctaPrimary: 'I want my website',
      ctaSecondary: 'See platforms',
      directorCreativo: 'Creative Director',
      quote: '"Meow meow, approved."',
    },
    servicios: {
      title: 'Services that',
      titleHighlight: 'work',
      subtitle:
        'From a converting landing page to an enterprise store. Everything designed to help your business grow.',
      landing: {
        title: 'Landing page + Corporate website',
        description:
          'Sites designed to turn visitors into customers. Optimized for SEO, mobile and loading speed.',
        chips: ['Next.js', 'React', 'Responsive', 'SEO'],
      },
      mantenimiento: {
        title: 'Maintenance',
        description:
          'Monthly plans to keep your website always updated, secure and running.',
        cta: 'See Plans',
      },
      tiendas: {
        title: 'Online stores',
        description: 'Complete setup on the best e-commerce platforms.',
        platforms: ['Tienda Nube', 'Empretienda', 'WooCommerce', 'Shopify'],
      },
      vtex: {
        title: 'VTEX Enterprise',
        description:
          'Development and maintenance of VTEX enterprise stores. Integrations, customizations and specialized technical support.',
        badge: 'Enterprise',
      },
      custom: {
        title: 'Custom software of any complexity',
        description:
          'Development of customized management systems for companies, hospitals, educational institutions and organizations in any sector. From ERPs to specialized platforms, we build solutions that adapt exactly to your processes and needs.',
        badge: 'Custom',
        chips: ['Management systems', 'ERPs', 'Hospitals', 'Education', 'Integrations', 'APIs', 'Cloud'],
      },
    },
    proceso: {
      title: 'A',
      titleHighlight: 'simple',
      titleEnd: 'process',
      subtitle: 'No complications or unnecessary steps. This is how we work from start to finish.',
      steps: [
        {
          numero: '01',
          titulo: 'Tell me about your business',
          descripcion:
            "We chat about what you need, what you like, and what you want to achieve with your website. No endless forms.",
        },
        {
          numero: '02',
          titulo: 'We design together',
          descripcion:
            'I show you proposals, we adjust whatever is needed. You decide how your project turns out.',
        },
        {
          numero: '03',
          titulo: 'I deliver everything ready',
          descripcion:
            'Working website, configured domain, active hosting. Everything tested and ready to use.',
        },
        {
          numero: '04',
          titulo: 'I support you afterwards',
          descripcion:
            'If you need changes, updates or have questions, I am available. No fine print.',
        },
      ],
    },
    plataformas: {
      title: 'Platforms I',
      titleHighlight: 'work with',
      subtitle: 'We choose the best technology for your project. Without tying you to a single option.',
      tiendasTitle: 'Online stores',
      websTitle: 'Websites & domains',
      idealPara: 'Ideal for:',
      cta: "Let's talk about your project",
      noEncontras: "Can't find the platform you need?",
    },
    precios: {
      title: 'Transparent',
      titleHighlight: 'pricing',
      subtitle: 'No surprises or hidden costs. You know exactly what you are paying for.',
      desde: 'from',
      elegido: 'Most chosen',
      addonTitle: 'Add-on: Monthly maintenance',
      mantenimientoBasico: 'Basic maintenance',
      mantenimientoPremium: 'Premium maintenance',
      vtexNote: 'VTEX Enterprise projects: custom quote depending on scope and complexity.',
      cotizacion: 'Blue dollar exchange rate',
      metodoPago: 'Payment methods: wire transfer, Mercado Pago, PayPal, crypto.',
      planes: [
        {
          nombre: 'Landing Page',
          descripcion: 'Ideal to launch a product or service',
          caracteristicas: [
            'Responsive design',
            'Contact form',
            'Basic SEO',
            'Hosting included 1 year',
            'Domain .com.ar included',
          ],
        },
        {
          nombre: 'Full website',
          descripcion: 'For companies that need a professional presence',
          caracteristicas: [
            'Up to 5 sections',
            'Custom design',
            'Optimized SEO',
            'Integrated blog',
            'Hosting included 1 year',
            'Domain .com.ar included',
            'Usage training',
          ],
        },
        {
          nombre: 'Online Store',
          descripcion: 'Complete setup of your e-commerce',
          caracteristicas: [
            'Setup on chosen platform',
            'Theme design',
            'Product upload (up to 50)',
            'Payment methods',
            'Complete training',
          ],
        },
      ],
      mantenimiento: [
        ['Security updates', 'Weekly backup', 'Email support'],
        [
          'Everything in the basic plan',
          'Unlimited content changes',
          'Priority support',
          'Monthly reports',
        ],
      ],
    },
    testimonios: {
      title: 'What my',
      titleHighlight: 'clients say',
      subtitle: 'Real projects, real clients, real results.',
    },
    sobreMi: {
      title: 'A developer and a',
      titleHighlight: 'full team',
      p1: 'I am a frontend developer with years of experience in agencies and enterprise projects. In 2023 I decided to do something closer: work directly with businesses that need a website without the structure (and prices) of an agency.',
      p2: 'Here there is no "sales team" or "account manager". You write to me, we chat, we design together and I deliver your project. Simple.',
      p3: 'We work in a network with multiple professionals specialized in each area so that your project is complete and has everything it requires.',
      p4: 'Oh, and Mondiola (my cat) supervises every project. He is demanding, but fair.',
      valores: ['On-time delivery', 'Direct communication', 'No fine print', 'Made in Córdoba'],
    },
    contacto: {
      title: '',
      titleHighlight: "Let's start",
      titleEnd: '?',
      subtitle: 'Tell me what you need and I will reply in less than 24 hours. No commitment.',
      nombre: 'Your name',
      whatsapp: 'Your WhatsApp',
      whatsappPlaceholder: 'Ex: +54 9 351 123 4567',
      negocio: 'Your business (optional)',
      servicio: 'Which service interests you?',
      mensaje: 'Tell me about your project',
      enviando: 'Sending...',
      enviar: 'Send message',
      success: 'Message sent! I will reply in less than 24 hours.',
      error: 'There was an error. Try writing directly to',
      servicios: [
        'Landing Page',
        'Corporate Website',
        'Online Store',
        'Maintenance',
        'VTEX Enterprise',
        'Other',
      ],
      quote: '"Every project is an opportunity to do something that really works."',
    },
    footer: {
      description:
        'Web design and development studio. Direct communication, no agency structures.',
      navegacion: 'Navigation',
      derechos: 'All rights reserved.',
      hechoCon: 'Made with 🤍 and meows 🐱 from Córdoba, Argentina 🇦🇷',
    },
    whatsapp: 'Contact us on WhatsApp',
    blog: {
      title: 'Blog',
      subtitle: 'Articles about design, development and technology',
      errorTitle: 'Error loading posts',
      errorSubtitle: 'Unable to load blog posts. Please try again later.',
      noPosts: 'No posts yet. Check back soon!',
    },
  },
  pt: {
    nav: {
      servicios: 'Serviços',
      proceso: 'Processo',
      plataformas: 'Plataformas',
      precios: 'Preços',
      sobreMi: 'Sobre mim',
      blog: 'Blog',
      hablemos: 'Vamos conversar',
      cerrarMenu: 'fechar menu',
      abrirMenu: 'abrir menu de navegação',
    },
    hero: {
      chip: 'Estúdio de design web · Córdoba, Argentina',
      title: 'Seu negócio, com a cara que',
      titleHighlight: 'merece',
      description:
        'Design e desenvolvimento web direto, sem rodeios. Landing pages, sites institucionais, lojas online e manutenção. Tudo com comunicação clara e entregas no prazo.',
      ctaPrimary: 'Quero meu site',
      ctaSecondary: 'Ver plataformas',
      directorCreativo: 'Diretor Criativo',
      quote: '"Miau miau, aprovado."',
    },
    servicios: {
      title: 'Serviços que',
      titleHighlight: 'funcionam',
      subtitle:
        'Desde uma landing page que converte até uma loja enterprise. Tudo projetado para seu negócio crescer.',
      landing: {
        title: 'Landing page + Site institucional',
        description:
          'Sites projetados para converter visitantes em clientes. Otimizados para SEO, mobile e velocidade de carregamento.',
        chips: ['Next.js', 'React', 'Responsive', 'SEO'],
      },
      mantenimiento: {
        title: 'Manutenção',
        description:
          'Planos mensais para que seu site esteja sempre atualizado, seguro e funcionando.',
        cta: 'Ver Planos',
      },
      tiendas: {
        title: 'Lojas online',
        description: 'Configuração completa nas melhores plataformas de e-commerce.',
        platforms: ['Tienda Nube', 'Empretienda', 'WooCommerce', 'Shopify'],
      },
      vtex: {
        title: 'VTEX Enterprise',
        description:
          'Desenvolvimento e manutenção de lojas enterprise em VTEX. Integrações, customizações e suporte técnico especializado.',
        badge: 'Enterprise',
      },
      custom: {
        title: 'Software sob medida de toda complexidade',
        description:
          'Desenvolvimento de sistemas de gestão personalizados para empresas, hospitais, instituições educacionais e organizações de qualquer setor. Desde ERPs até plataformas especializadas, construímos soluções que se adaptam exatamente aos seus processos e necessidades.',
        badge: 'Sob medida',
        chips: ['Sistemas de gestão', 'ERPs', 'Hospitais', 'Educação', 'Integrações', 'APIs', 'Cloud'],
      },
    },
    proceso: {
      title: 'Um processo',
      titleHighlight: 'simples',
      subtitle: 'Sem complicações nem passos desnecessários. Assim trabalhamos do início ao fim.',
      steps: [
        {
          numero: '01',
          titulo: 'Me conta seu negócio',
          descripcion:
            'Conversamos sobre o que você precisa, o que gosta e o que quer alcançar com seu site. Sem formulários eternos.',
        },
        {
          numero: '02',
          titulo: 'Projetamos juntos',
          descripcion:
            'Te mostro propostas, ajustamos o que for necessário. Você decide como fica seu projeto.',
        },
        {
          numero: '03',
          titulo: 'Entrego tudo pronto',
          descripcion:
            'Site funcionando, domínio configurado, hospedagem ativa. Tudo testado e pronto para usar.',
        },
        {
          numero: '04',
          titulo: 'Te acompanho depois',
          descripcion:
            'Se precisar de mudanças, atualizações ou tiver dúvidas, estou disponível. Sem letras miúdas.',
        },
      ],
    },
    plataformas: {
      title: 'Plataformas com as quais',
      titleHighlight: 'trabalho',
      subtitle: 'Escolhemos a melhor tecnologia para seu projeto. Sem te prender a uma única opção.',
      tiendasTitle: 'Lojas online',
      websTitle: 'Sites & domínios',
      idealPara: 'Ideal para:',
      cta: 'Vamos conversar sobre seu projeto',
      noEncontras: 'Não encontrou a plataforma que precisa?',
    },
    precios: {
      title: 'Preços',
      titleHighlight: 'transparentes',
      subtitle: 'Sem surpresas nem custos ocultos. Você sabe exatamente o que está pagando.',
      desde: 'a partir de',
      elegido: 'O mais escolhido',
      addonTitle: 'Add-on: Manutenção mensal',
      mantenimientoBasico: 'Manutenção básica',
      mantenimientoPremium: 'Manutenção premium',
      vtexNote: 'Projetos VTEX Enterprise: orçamento personalizado conforme alcance e complexidade.',
      cotizacion: 'Cotação dólar blue',
      metodoPago: 'Forma de pagamento: transferência, Mercado Pago, PayPal, crypto.',
      planes: [
        {
          nombre: 'Landing Page',
          descripcion: 'Ideal para lançar um produto ou serviço',
          caracteristicas: [
            'Design responsivo',
            'Formulário de contato',
            'SEO básico',
            'Hospedagem inclusa 1 ano',
            'Domínio .com.ar incluso',
          ],
        },
        {
          nombre: 'Site completo',
          descripcion: 'Para empresas que precisam de presença profissional',
          caracteristicas: [
            'Até 5 seções',
            'Design personalizado',
            'SEO otimizado',
            'Blog integrado',
            'Hospedagem inclusa 1 ano',
            'Domínio .com.ar incluso',
            'Treinamento de uso',
          ],
        },
        {
          nombre: 'Loja Online',
          descripcion: 'Configuração completa do seu e-commerce',
          caracteristicas: [
            'Setup na plataforma escolhida',
            'Design do tema',
            'Carga de produtos (até 50)',
            'Meios de pagamento',
            'Treinamento completo',
          ],
        },
      ],
      mantenimiento: [
        ['Atualizações de segurança', 'Backup semanal', 'Suporte por email'],
        [
          'Tudo do plano básico',
          'Mudanças de conteúdo ilimitadas',
          'Suporte prioritário',
          'Relatórios mensais',
        ],
      ],
    },
    testimonios: {
      title: 'O que dizem',
      titleHighlight: 'meus clientes',
      subtitle: 'Projetos reais, clientes reais, resultados reais.',
    },
    sobreMi: {
      title: 'Um desenvolvedor e um',
      titleHighlight: 'equipe completa',
      p1: 'Sou desenvolvedor frontend com anos de experiência em agências e projetos enterprise. Em 2023 decidi fazer algo mais próximo: trabalhar direto com negócios que precisam de um site sem a estrutura (e os preços) de uma agência.',
      p2: 'Aqui não tem "equipe de vendas" nem "gerente de contas". Você me escreve, conversamos, projetamos juntos e entrego seu projeto. Simples.',
      p3: 'Trabalhamos em rede com múltiplos profissionais especializados em cada área para que seu projeto seja completo e tenha tudo o que precisa.',
      p4: 'Ah, e Mondiola (meu gato) supervisiona cada projeto. É exigente, mas justo.',
      valores: ['Entrega no prazo', 'Comunicação direta', 'Sem letras miúdas', 'Feito em Córdoba'],
    },
    contacto: {
      title: 'Vamos',
      titleHighlight: 'começar',
      titleEnd: '?',
      subtitle: 'Me conta o que você precisa e te respondo em menos de 24 horas. Sem compromisso.',
      nombre: 'Seu nome',
      whatsapp: 'Seu WhatsApp',
      whatsappPlaceholder: 'Ex: +54 9 351 123 4567',
      negocio: 'Seu negócio (opcional)',
      servicio: 'Qual serviço te interessa?',
      mensaje: 'Me conta sobre seu projeto',
      enviando: 'Enviando...',
      enviar: 'Enviar mensagem',
      success: 'Mensagem enviada! Te respondo em menos de 24 horas.',
      error: 'Houve um erro. Tente me escrever direto em',
      servicios: [
        'Landing Page',
        'Site Institucional',
        'Loja Online',
        'Manutenção',
        'VTEX Enterprise',
        'Outro',
      ],
      quote: '"Cada projeto é uma oportunidade para fazer algo que realmente funcione."',
    },
    footer: {
      description:
        'Estúdio de design e desenvolvimento web. Comunicação direta, sem estruturas de agência.',
      navegacion: 'Navegação',
      derechos: 'Todos os direitos reservados.',
      hechoCon: 'Feito com 🤍 e miados 🐱 de Córdoba, Argentina 🇦🇷',
    },
    whatsapp: 'Fale conosco pelo WhatsApp',
    blog: {
      title: 'Blog',
      subtitle: 'Artigos sobre design, desenvolvimento e tecnologia',
      errorTitle: 'Erro ao carregar posts',
      errorSubtitle: 'Não foi possível carregar os posts. Tente novamente mais tarde.',
      noPosts: 'Ainda não há posts. Volte em breve!',
    },
  },
} as const

export type Translations = typeof translations.es
