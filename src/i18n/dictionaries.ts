import type { BusinessLineSlug } from './paths';
import type { Locale } from './config';

export interface UseCase {
  title: string;
  body: string;
}

export interface BusinessLineContent {
  slug: BusinessLineSlug;
  name: string;
  /** One-line focus for cards and nav context */
  focus: string;
  /** Short examples shown on home cards (1–2) */
  cardExamples: string[];
  /** Page SEO */
  metaTitle: string;
  metaDescription: string;
  /** Hero title + lead (2–3 sentences: what it solves and for whom) */
  heroTitle: string;
  lead: string;
  useCasesHeading: string;
  useCases: UseCase[];
  ctaLabel: string;
  /** Accent token key used for visual differentiation */
  accent: 'cyan' | 'teal' | 'mint' | 'navy' | 'ink';
}

export interface Dictionary {
  meta: {
    siteName: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    about: string;
    contact: string;
    openMenu: string;
    closeMenu: string;
    lines: string;
    language: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    brand: string;
    tagline: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    linesHeading: string;
    linesLead: string;
    lineCta: string;
    closingHeading: string;
    closingLead: string;
    closingCta: string;
  };
  about: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    intro: string;
    labsHeading: string;
    labsBody: string;
    linesHeading: string;
    linesLead: string;
    ctaHeading: string;
    ctaLead: string;
    ctaLabel: string;
  };
  contact: {
    metaTitle: string;
    metaDescription: string;
    heading: string;
    lead: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      line: string;
      linePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      required: string;
      invalidEmail: string;
    };
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    rights: string;
    emailPlaceholder: string;
  };
  businessLines: BusinessLineContent[];
}

const businessLinesEs: BusinessLineContent[] = [
  {
    slug: 'synapse',
    name: 'Synapse',
    focus: 'Integración de sistemas existentes, dentro o fuera de la empresa.',
    cardExamples: [
      'Conectar APIs externas a tus procesos',
      'Eliminar sincronizaciones manuales entre sistemas internos',
    ],
    metaTitle: 'Synapse — Integración de sistemas | Appico',
    metaDescription:
      'Synapse conecta sistemas existentes entre sí: APIs externas, interconexión interna y exposición de datos a proveedores o clientes.',
    heroTitle: 'Sistemas que hablan entre sí',
    lead:
      'Synapse resuelve la integración entre software que ya tenés en marcha. Para equipos que necesitan datos fluyendo entre sistemas internos, proveedores o clientes — sin depender de procesos manuales ni de rehacer todo desde cero.',
    useCasesHeading: 'Casos típicos',
    useCases: [
      {
        title: 'Integración con APIs externas',
        body:
          'Conectamos tu stack a APIs de terceros para obtener los datos que otros procesos necesitan, con contratos claros y flujos confiables.',
      },
      {
        title: 'Interconexión de sistemas internos',
        body:
          'Unimos sistemas que hoy se sincronizan a mano: menos trabajo repetitivo, menos errores y una única fuente de verdad operativa.',
      },
      {
        title: 'Exposición de datos hacia afuera',
        body:
          'Abrimos visibilidad controlada a proveedores o clientes que hoy no ven lo que necesitan, sin exponer más de lo debido.',
      },
    ],
    ctaLabel: 'Hablemos de Synapse',
    accent: 'cyan',
  },
  {
    slug: 'mind',
    name: 'Mind',
    focus: 'IA aplicada al análisis de datos y a nuevos servicios.',
    cardExamples: [
      'Detectar patrones no evidentes en tus datos',
      'Automatizar atención y decisiones complejas',
    ],
    metaTitle: 'Mind — IA aplicada | Appico',
    metaDescription:
      'Mind aplica IA al análisis de datos y a nuevos servicios: patrones ocultos, bots de atención y automatización de decisiones complejas.',
    heroTitle: 'Inteligencia aplicada a lo que ya medís',
    lead:
      'Mind usa técnicas de IA para analizar datos e implementar servicios nuevos. Pensado para organizaciones que tienen información — o quieren automatizar atención y decisiones — y necesitan resultados accionables, no demos genéricos.',
    useCasesHeading: 'Casos típicos',
    useCases: [
      {
        title: 'Patrones no evidentes en los datos',
        body:
          'Analizamos conjuntos de datos para encontrar patrones que no se ven a simple vista y convertirlos en señales útiles para el negocio.',
      },
      {
        title: 'Bots de atención al cliente',
        body:
          'Implementamos bots que automatizan la atención al cliente en los canales que ya usás, con alcance y tono definidos con tu equipo.',
      },
      {
        title: 'Automatización de decisiones complejas',
        body:
          'Diseñamos automatizaciones donde la decisión no es una regla simple: combina datos, criterios de negocio y validaciones.',
      },
    ],
    ctaLabel: 'Hablemos de Mind',
    accent: 'teal',
  },
  {
    slug: 'sense',
    name: 'Sense',
    focus: 'Domótica e integración con procesos físicos y líneas de producción.',
    cardExamples: [
      'Paletización de múltiples líneas',
      'Decisiones en tiempo real desde sensores',
    ],
    metaTitle: 'Sense — Domótica y producción | Appico',
    metaDescription:
      'Sense integra software con el mundo físico: paletización, lectura de sensores en tiempo real y automatización de procesos productivos.',
    heroTitle: 'Software que escucha el mundo físico',
    lead:
      'Sense conecta domótica y sistemas de software con procesos físicos y líneas de producción. Para plantas y operaciones donde el dato nace en un sensor o en una línea — y tiene que disparar una acción a tiempo.',
    useCasesHeading: 'Casos típicos',
    useCases: [
      {
        title: 'Paletización de múltiples líneas',
        body:
          'Coordinamos la paletización cuando varias líneas de producción convergen, para que el flujo físico y el sistema digital estén alineados.',
      },
      {
        title: 'Decisiones en tiempo real desde sensores',
        body:
          'Leemos sensores y tomamos decisiones operativas en el momento, sin esperar un batch ni una planilla de fin de turno.',
      },
      {
        title: 'Automatización de procesos productivos',
        body:
          'Automatizamos tramos del proceso productivo donde hoy hay intervención manual repetitiva o frágil.',
      },
    ],
    ctaLabel: 'Hablemos de Sense',
    accent: 'mint',
  },
  {
    slug: 'flow',
    name: 'Flow',
    focus: 'Flujos de trabajo estratégicos y reducción de fricciones.',
    cardExamples: [
      'Reducir errores humanos en flujos críticos',
      'Métricas y flujos óptimos para negocios nuevos',
    ],
    metaTitle: 'Flow — Flujos de trabajo | Appico',
    metaDescription:
      'Flow analiza y mejora flujos de trabajo: menos errores humanos, métricas claras y definición de flujos óptimos para negocios nuevos.',
    heroTitle: 'Flujos con menos fricción',
    lead:
      'Flow analiza flujos de trabajo estratégicos y reduce fricciones — humanas y automatizadas. Para equipos que necesitan operar con menos errores, ver qué está pasando y diseñar el flujo correcto desde el día uno.',
    useCasesHeading: 'Casos típicos',
    useCases: [
      {
        title: 'Optimizar flujos para reducir errores humanos',
        body:
          'Revisamos flujos donde el error humano es caro o frecuente, y rediseñamos pasos, controles y automatizaciones puntuales.',
      },
      {
        title: 'Métricas para mejorar flujos existentes',
        body:
          'Obtenemos y visualizamos métricas que muestran dónde se atasca o se degrada un flujo que ya está en producción.',
      },
      {
        title: 'Flujos óptimos para negocios nuevos',
        body:
          'Definimos el flujo de trabajo óptimo cuando el negocio recién arranca, antes de consolidar hábitos difíciles de deshacer.',
      },
    ],
    ctaLabel: 'Hablemos de Flow',
    accent: 'navy',
  },
  {
    slug: 'chain',
    name: 'Chain',
    focus: 'Blockchain aplicado a negocios específicos.',
    cardExamples: [
      'Tokenización de activos',
      'Datos críticos inmutables y confianza multi-actor',
    ],
    metaTitle: 'Chain — Blockchain aplicado | Appico',
    metaDescription:
      'Chain aplica blockchain a casos de negocio concretos: tokenización, almacenamiento inmutable y confianza entre múltiples actores.',
    heroTitle: 'Confianza verificable entre actores',
    lead:
      'Chain usa tecnologías blockchain cuando el negocio lo necesita de verdad: activos tokenizados, registros que no se pueden alterar a gusto, o varios actores que tienen que confiar en la misma verdad. No es blockchain por moda — es blockchain con un caso.',
    useCasesHeading: 'Casos típicos',
    useCases: [
      {
        title: 'Tokenización de activos',
        body:
          'Modelamos y implementamos la tokenización de activos cuando aporta liquidez, trazabilidad o nuevas formas de participación.',
      },
      {
        title: 'Almacenamiento inmutable de datos críticos',
        body:
          'Guardamos datos críticos de forma inmutable cuando la integridad del registro es parte del producto o del cumplimiento.',
      },
      {
        title: 'Confianza entre múltiples actores',
        body:
          'Diseñamos esquemas donde varios actores comparten un registro confiable sin depender de un único intermediario opaco.',
      },
    ],
    ctaLabel: 'Hablemos de Chain',
    accent: 'ink',
  },
];

const businessLinesEn: BusinessLineContent[] = [
  {
    slug: 'synapse',
    name: 'Synapse',
    focus: 'Integration of existing systems, inside or outside the company.',
    cardExamples: [
      'Connect external APIs to your processes',
      'Replace manual sync between internal systems',
    ],
    metaTitle: 'Synapse — Systems integration | Appico',
    metaDescription:
      'Synapse connects existing systems: external APIs, internal interconnection, and controlled data exposure to suppliers or customers.',
    heroTitle: 'Systems that talk to each other',
    lead:
      'Synapse integrates software you already run. Built for teams that need data flowing between internal systems, suppliers, or customers — without manual sync or rebuilding everything from scratch.',
    useCasesHeading: 'Typical use cases',
    useCases: [
      {
        title: 'Integration with external APIs',
        body:
          'We connect your stack to third-party APIs so other processes get the data they need, with clear contracts and reliable flows.',
      },
      {
        title: 'Interconnecting internal systems',
        body:
          'We link systems that today sync by hand: less repetitive work, fewer errors, and one operational source of truth.',
      },
      {
        title: 'Exposing data outward',
        body:
          'We open controlled visibility to suppliers or customers who currently lack it — without exposing more than they should see.',
      },
    ],
    ctaLabel: 'Talk about Synapse',
    accent: 'cyan',
  },
  {
    slug: 'mind',
    name: 'Mind',
    focus: 'AI applied to data analysis and new services.',
    cardExamples: [
      'Surface non-obvious patterns in your data',
      'Automate support and complex decisions',
    ],
    metaTitle: 'Mind — Applied AI | Appico',
    metaDescription:
      'Mind applies AI to data analysis and new services: hidden patterns, customer-support bots, and automation of complex decisions.',
    heroTitle: 'Intelligence applied to what you already measure',
    lead:
      'Mind uses AI techniques to analyze data and ship new services. For organizations that have information — or want to automate support and decisions — and need actionable outcomes, not generic demos.',
    useCasesHeading: 'Typical use cases',
    useCases: [
      {
        title: 'Non-obvious patterns in data',
        body:
          'We analyze datasets to find patterns that are not obvious at a glance and turn them into useful business signals.',
      },
      {
        title: 'Customer-support bots',
        body:
          'We implement bots that automate customer support on the channels you already use, with scope and tone defined with your team.',
      },
      {
        title: 'Automating complex decisions',
        body:
          'We design automation where the decision is not a simple rule: it combines data, business criteria, and validations.',
      },
    ],
    ctaLabel: 'Talk about Mind',
    accent: 'teal',
  },
  {
    slug: 'sense',
    name: 'Sense',
    focus: 'Home automation and integration with physical processes and production lines.',
    cardExamples: [
      'Palletizing across multiple lines',
      'Real-time decisions from sensor readings',
    ],
    metaTitle: 'Sense — Physical & production | Appico',
    metaDescription:
      'Sense bridges software and the physical world: palletizing, real-time sensor-driven decisions, and production-process automation.',
    heroTitle: 'Software that listens to the physical world',
    lead:
      'Sense connects home automation and software systems to physical processes and production lines. For plants and operations where data starts at a sensor or a line — and must trigger action on time.',
    useCasesHeading: 'Typical use cases',
    useCases: [
      {
        title: 'Palletizing across multiple production lines',
        body:
          'We coordinate palletizing when several production lines converge, so the physical flow and the digital system stay aligned.',
      },
      {
        title: 'Real-time decisions from sensors',
        body:
          'We read sensors and make operational decisions in the moment — without waiting for a batch job or an end-of-shift spreadsheet.',
      },
      {
        title: 'Automating production processes',
        body:
          'We automate stretches of the production process where work is still repetitive or fragile manual intervention.',
      },
    ],
    ctaLabel: 'Talk about Sense',
    accent: 'mint',
  },
  {
    slug: 'flow',
    name: 'Flow',
    focus: 'Strategic workflow analysis and friction reduction.',
    cardExamples: [
      'Reduce human error in critical flows',
      'Metrics and optimal flows for new businesses',
    ],
    metaTitle: 'Flow — Workflows | Appico',
    metaDescription:
      'Flow analyzes and improves workflows: fewer human errors, clear metrics, and optimal flow design for new businesses.',
    heroTitle: 'Workflows with less friction',
    lead:
      'Flow analyzes strategic workflows and reduces friction — human and automated. For teams that need fewer errors, visibility into what is happening, and the right flow from day one.',
    useCasesHeading: 'Typical use cases',
    useCases: [
      {
        title: 'Optimize flows to reduce human error',
        body:
          'We review flows where human error is costly or frequent, and redesign steps, controls, and targeted automation.',
      },
      {
        title: 'Metrics to improve existing flows',
        body:
          'We gather and visualize metrics that show where an in-production flow stalls or degrades.',
      },
      {
        title: 'Optimal flows for new businesses',
        body:
          'We define the optimal workflow when a business is just starting — before hard-to-undo habits set in.',
      },
    ],
    ctaLabel: 'Talk about Flow',
    accent: 'navy',
  },
  {
    slug: 'chain',
    name: 'Chain',
    focus: 'Blockchain applied to specific business cases.',
    cardExamples: [
      'Asset tokenization',
      'Immutable critical data and multi-party trust',
    ],
    metaTitle: 'Chain — Applied blockchain | Appico',
    metaDescription:
      'Chain applies blockchain to concrete business needs: tokenization, immutable storage, and trust among multiple parties.',
    heroTitle: 'Verifiable trust among parties',
    lead:
      'Chain uses blockchain when the business truly needs it: tokenized assets, records that cannot be quietly altered, or multiple parties that must share the same truth. Not blockchain for fashion — blockchain with a case.',
    useCasesHeading: 'Typical use cases',
    useCases: [
      {
        title: 'Asset tokenization',
        body:
          'We model and implement asset tokenization when it adds liquidity, traceability, or new forms of participation.',
      },
      {
        title: 'Immutable storage of critical data',
        body:
          'We store critical data immutably when record integrity is part of the product or of compliance.',
      },
      {
        title: 'Trust among multiple parties',
        body:
          'We design setups where several parties share a trustworthy record without relying on a single opaque intermediary.',
      },
    ],
    ctaLabel: 'Talk about Chain',
    accent: 'ink',
  },
];

const es: Dictionary = {
  meta: {
    siteName: 'Appico',
    defaultDescription:
      'Appico es Evolving Labs: software a medida en integración, IA, procesos físicos, flujos de trabajo y blockchain.',
  },
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    lines: 'Líneas de negocio',
    language: 'Idioma',
  },
  home: {
    metaTitle: 'Appico — Evolving Labs',
    metaDescription:
      'Consultora de software a medida. Cinco líneas: Synapse, Mind, Sense, Flow y Chain. Evolving Labs.',
    brand: 'Appico',
    tagline: 'Evolving Labs',
    lead:
      'Laboratorio de software a medida. Evolucionamos soluciones para distintos tipos de negocio — no fabricamos proyectos genéricos.',
    ctaPrimary: 'Contactanos',
    ctaSecondary: 'Ver líneas',
    linesHeading: 'Cinco líneas, un laboratorio',
    linesLead:
      'Cada línea tiene su foco. Todas comparten la misma forma de trabajar: entender el problema y construir lo que hace falta.',
    lineCta: 'Ver más',
    closingHeading: 'Contanos qué necesitás conectar, medir o automatizar',
    closingLead:
      'Si ya tenés un sistema, una planta, un flujo o un caso con varios actores, podemos hablar de cómo atacarlo.',
    closingCta: 'Ir a contacto',
  },
  about: {
    metaTitle: 'Nosotros | Appico',
    metaDescription:
      'Qué es Appico, qué significa Evolving Labs y cómo se relacionan Synapse, Mind, Sense, Flow y Chain.',
    heading: 'Un laboratorio que evoluciona soluciones',
    intro:
      'Appico es una consultora de desarrollo de software a medida. Trabajamos con empresas que necesitan sistemas hechos a su medida — no un producto de estantería disfrazado de proyecto.',
    labsHeading: 'Evolving Labs',
    labsBody:
      '“Evolving Labs” es la forma en que nos vemos: un laboratorio que itera, conecta disciplinas y adapta la solución al problema real. No somos una fábrica de entregables genéricos; cada encargo entra, se analiza y evoluciona con el negocio.',
    linesHeading: 'Cinco líneas, la misma compañía',
    linesLead:
      'Synapse, Mind, Sense, Flow y Chain no son etapas de un proceso ni marcas aparte. Son áreas paralelas del mismo laboratorio: integración, IA, mundo físico, flujos y blockchain. Un cliente puede necesitar una sola — o varias que se refuerzan entre sí.',
    ctaHeading: '¿Empezamos por una línea?',
    ctaLead: 'Contanos el contexto. Te orientamos a la línea que mejor encaja.',
    ctaLabel: 'Contactanos',
  },
  contact: {
    metaTitle: 'Contacto | Appico',
    metaDescription: 'Escribinos para hablar de Synapse, Mind, Sense, Flow o Chain.',
    heading: 'Contacto',
    lead:
      'Contanos el contexto y la línea que te interesa (si ya la sabés). Respondemos a consultas sobre software a medida.',
    form: {
      name: 'Nombre',
      email: 'Email',
      company: 'Empresa',
      message: 'Mensaje',
      line: 'Línea de interés',
      linePlaceholder: 'Opcional',
      submit: 'Enviar',
      sending: 'Enviando…',
      success: 'Mensaje enviado. Te respondemos a la brevedad.',
      error: 'No pudimos enviar el mensaje. Probá de nuevo o escribinos por email.',
      required: 'Este campo es obligatorio.',
      invalidEmail: 'Ingresá un email válido.',
    },
  },
  footer: {
    tagline: 'Evolving Labs — software a medida',
    navigation: 'Navegación',
    contact: 'Contacto',
    rights: 'Todos los derechos reservados.',
    emailPlaceholder: 'marcosnc@gmail.com',
  },
  businessLines: businessLinesEs,
};

const en: Dictionary = {
  meta: {
    siteName: 'Appico',
    defaultDescription:
      'Appico is Evolving Labs: custom software across integration, AI, physical processes, workflows, and blockchain.',
  },
  nav: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    lines: 'Business lines',
    language: 'Language',
  },
  home: {
    metaTitle: 'Appico — Evolving Labs',
    metaDescription:
      'Custom software consultancy. Five lines: Synapse, Mind, Sense, Flow, and Chain. Evolving Labs.',
    brand: 'Appico',
    tagline: 'Evolving Labs',
    lead:
      'A custom-software lab. We evolve solutions for different kinds of business — we do not mass-produce generic projects.',
    ctaPrimary: 'Contact us',
    ctaSecondary: 'See lines',
    linesHeading: 'Five lines, one lab',
    linesLead:
      'Each line has its focus. All share the same way of working: understand the problem, then build what is needed.',
    lineCta: 'Learn more',
    closingHeading: 'Tell us what you need to connect, measure, or automate',
    closingLead:
      'If you already have a system, a plant, a workflow, or a multi-party case, we can talk about how to approach it.',
    closingCta: 'Go to contact',
  },
  about: {
    metaTitle: 'About | Appico',
    metaDescription:
      'What Appico is, what Evolving Labs means, and how Synapse, Mind, Sense, Flow, and Chain fit together.',
    heading: 'A lab that evolves solutions',
    intro:
      'Appico is a custom software development consultancy. We work with companies that need systems built for their context — not shelf products dressed up as projects.',
    labsHeading: 'Evolving Labs',
    labsBody:
      '“Evolving Labs” is how we see ourselves: a lab that iterates, connects disciplines, and adapts the solution to the real problem. We are not a factory of generic deliverables; every engagement is analyzed and evolves with the business.',
    linesHeading: 'Five lines, one company',
    linesLead:
      'Synapse, Mind, Sense, Flow, and Chain are not stages in a sequence or separate brands. They are parallel areas of the same lab: integration, AI, the physical world, workflows, and blockchain. A client may need one — or several that reinforce each other.',
    ctaHeading: 'Start with one line?',
    ctaLead: 'Tell us the context. We will point you to the line that fits best.',
    ctaLabel: 'Contact us',
  },
  contact: {
    metaTitle: 'Contact | Appico',
    metaDescription: 'Write to us about Synapse, Mind, Sense, Flow, or Chain.',
    heading: 'Contact',
    lead:
      'Share the context and the line you care about (if you already know it). We reply to inquiries about custom software.',
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      message: 'Message',
      line: 'Line of interest',
      linePlaceholder: 'Optional',
      submit: 'Send',
      sending: 'Sending…',
      success: 'Message sent. We will get back to you shortly.',
      error: 'We could not send the message. Try again or email us.',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email.',
    },
  },
  footer: {
    tagline: 'Evolving Labs — custom software',
    navigation: 'Navigation',
    contact: 'Contact',
    rights: 'All rights reserved.',
    emailPlaceholder: 'marcosnc@gmail.com',
  },
  businessLines: businessLinesEn,
};

export const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getBusinessLine(
  locale: Locale,
  slug: BusinessLineSlug,
): BusinessLineContent {
  const line = getDictionary(locale).businessLines.find((item) => item.slug === slug);
  if (!line) {
    throw new Error(`Unknown business line: ${slug}`);
  }
  return line;
}
