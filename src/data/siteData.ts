export type Service = {
  title: string;
  description: string;
};

export type Project = {
  name: string;
  category: string;
  description: string;
  location: string;
  image: string;
  darkImage?: string;
  featured?: boolean;
};

export type Principle = {
  label: string;
  text: string;
};

export type MethodStep = {
  number: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href?: string;
};

export const studio = {
  name: "CYA Arquitectos",
  mark: "C+YA",
  heroLine: "Arquitectura que construye vision",
  heroDescription:
    "Diseñamos espacios interiores y exteriores, desarrollamos proyectos arquitectónicos y acompañamos cada etapa con criterio técnico, visión estética, coordinación BIM y precisión constructiva.",
  essence:
    "Nuestros diseños buscan lo esencial: belleza depurada, confort atemporal y conexión real con quien habita el espacio.",
  about:
    "En CYA Arquitectos desarrollamos propuestas arquitectónicas con una mirada integral, combinando diseño, documentación técnica, visualización, gestión y acompañamiento de obra. El portfolio presenta experiencia en proyectos de inversión pública y privada, diseño arquitectónico, gestión y coordinación BIM.",
  profile:
    "César Calderón Guevara es arquitecto peruano desde 2022 y especialista BIM, graduado de la Universidad de Piura.",
};

export const services: Service[] = [
  {
    title: "Diseño de espacios interiores y exteriores",
    description:
      "Planos personalizados que integran funcionalidad, estética contemporánea, iluminación natural y materiales sostenibles.",
  },
  {
    title: "Expedientes técnicos municipales",
    description:
      "Documentación técnica preparada para ordenar el desarrollo del proyecto y facilitar trámites y revisiones municipales.",
  },
  {
    title: "Remodelaciones",
    description:
      "Renovaciones completas de hogares, apartamentos y oficinas con enfoque en eficiencia energética, accesibilidad y diseño de alto impacto.",
  },
  {
    title: "Implementación y supervisión",
    description:
      "Ejecución integral desde concepto hasta entrega, coordinando obra, proveedores y control de costos y plazos.",
  },
  {
    title: "Asesoría residencial y comercial",
    description:
      "Consultorías especializadas para adaptaciones funcionales que cumplen normativas locales y superan expectativas del cliente.",
  },
  {
    title: "Coordinación BIM",
    description:
      "Metodología BIM para planificación optimizada, coordinación colaborativa, reducción de errores y ahorro en tiempos y costos.",
  },
];

export const projects: Project[] = [
  {
    name: "Complejo Arena Azul",
    category: "Multifamiliar",
    description:
      "Propuesta para 200 departamentos con lenguaje contemporáneo, patios interiores y relación directa con el paisaje costero.",
    location: "Los Cabos de San Lucas, Baja California Sur, México",
    image: "/projects/arena-azul-exterior.webp",
    darkImage: "/projects/night/arena-azul-exterior.webp",
    featured: true,
  },
  {
    name: "Arena Azul Interiores",
    category: "Interiorismo",
    description:
      "Desarrollo interior del complejo con ambientes luminosos, materiales cálidos y una experiencia residencial serena.",
    location: "Los Cabos de San Lucas, Baja California Sur, México",
    image: "/projects/arena-azul-interiores.webp",
    darkImage: "/projects/night/arena-azul-interiores.webp",
  },
  {
    name: "Biblioteca de la Academia Diplomática",
    category: "Concurso CAP",
    description:
      "Proyecto académico y público para una biblioteca con enfoque institucional, lectura urbana y espacialidad controlada.",
    location: "Distrito de Jesús María, Lima, Perú",
    image: "/projects/biblioteca-academia-diplomatica.webp",
    darkImage: "/projects/night/biblioteca-academia-diplomatica.webp",
  },
  {
    name: "La Paz, Casa Pedregal",
    category: "Vivienda",
    description:
      "Casa integrada al terreno, con lectura topográfica, privacidad y apertura hacia el paisaje de Baja California Sur.",
    location: "Pedregal de La Paz, Baja California Sur, México",
    image: "/projects/casa-pedregal.webp",
    darkImage: "/projects/night/casa-pedregal.webp",
  },
  {
    name: "Casa de los Viejitos Work",
    category: "Vivienda",
    description:
      "Vivienda de carácter cálido en Mérida, con patios, luz natural y una escala doméstica cuidadosamente proporcionada.",
    location: "Mérida, Yucatán, México",
    image: "/projects/casa-viejitos.webp",
    darkImage: "/projects/night/casa-viejitos.webp",
  },
  {
    name: "Casa Coloma",
    category: "Residencial",
    description:
      "Intervención residencial enfocada en funcionalidad, atmósfera interior y continuidad entre uso cotidiano y detalle material.",
    location: "Distrito de Santiago de Surco, Lima, Perú",
    image: "/projects/casa-coloma.webp",
  },
  {
    name: "Live Space",
    category: "Diseño e implementación",
    description:
      "Mini-departamento resuelto con criterio de eficiencia espacial, mobiliario integrado y una paleta contemporánea.",
    location: "Miraflores, Lima, Perú",
    image: "/projects/live-space.webp",
    darkImage: "/projects/night/live-space.webp",
  },
  {
    name: "Supervisión de obra",
    category: "Acompañamiento técnico",
    description:
      "Control y seguimiento de obra para mantener coherencia entre diseño, ejecución, proveedores, costos y plazos.",
    location: "Santiago de Surco, Lima, Perú",
    image: "/projects/supervision-obra.webp",
    darkImage: "/projects/night/supervision-obra.webp",
  },
];

export const marqueeItems = [
  { label: "Arquitectura", icon: "Building2", gradient: "linear-gradient(135deg, #0a1b33, #334155)" },
  { label: "Diseño Interior", icon: "Armchair", gradient: "linear-gradient(135deg, #c9a46a, #8a6b34)" },
  { label: "BIM", icon: "Boxes", gradient: "linear-gradient(135deg, #0f766e, #0a1b33)" },
  { label: "Modelado 3D", icon: "Cuboid", gradient: "linear-gradient(135deg, #475569, #111827)" },
  { label: "Expedientes", icon: "FileText", gradient: "linear-gradient(135deg, #7c2d12, #c9a46a)" },
  { label: "Visualización", icon: "Eye", gradient: "linear-gradient(135deg, #1f2937, #0f766e)" },
  { label: "Construcción", icon: "HardHat", gradient: "linear-gradient(135deg, #92400e, #0a152d)" },
  { label: "Consultoría", icon: "MessagesSquare", gradient: "linear-gradient(135deg, #0a152d, #155e75)" },
] as const;

export const principles: Principle[] = [
  {
    label: "Diseño funcional",
    text: "Decisiones espaciales claras, orientadas a la forma de habitar y trabajar cada ambiente.",
  },
  {
    label: "Precisión técnica",
    text: "Documentación, coordinación y control para que el proyecto avance con orden y trazabilidad.",
  },
  {
    label: "Visión constructiva",
    text: "Acompañamiento de obra, proveedores y costos para conectar diseño con ejecución real.",
  },
];

export const methodology: MethodStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Levantamos necesidades, restricciones, normativa, objetivos de inversión y oportunidades del lugar.",
  },
  {
    number: "02",
    title: "Concepto",
    description:
      "Definimos la idea espacial, criterios de uso, atmósfera material y estrategia arquitectónica.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description:
      "Convertimos el concepto en plantas, volumetría, interiores, criterios técnicos y coordinación BIM.",
  },
  {
    number: "04",
    title: "Documentación",
    description:
      "Preparamos planos, expedientes y paquetes técnicos para revisión, gestión y construcción.",
  },
  {
    number: "05",
    title: "Visualización",
    description:
      "Producimos imágenes, modelos y recursos de comunicación para evaluar y presentar el proyecto.",
  },
  {
    number: "06",
    title: "Acompañamiento",
    description:
      "Supervisamos decisiones de obra, proveedores, costos y plazos para sostener la intención del diseño.",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Teléfono",
    value: "+51 953 674 347",
    href: "tel:+51953674347",
  },
  {
    label: "Email",
    value: "cesguevara99@gmail.com",
    href: "mailto:cesguevara99@gmail.com",
  },
  {
    label: "Ubicación",
    value: "Miraflores, Lima, Perú",
  },
];
