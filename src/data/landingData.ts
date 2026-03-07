export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  whatsappText: string;
  services: string[];
};

export type MarketingInfoItem = {
  id: string;
  title: string;
  description: string;
};

import serviceBranding from '../assets/images/web2026/servicio-branding.png';
import servicePublicidad from '../assets/images/web2026/servicio-publicidad.png';
import serviceMarketing from '../assets/images/web2026/servicio-marketing.png';

export const servicesData: ServiceItem[] = [
  {
    id: 'branding',
    title: 'Branding',
    description:
      'Trabajamos por el posicionamiento, presencia y valor de una marca.',
    image: serviceBranding,
    ctaLabel: 'Cotizar marca',
    whatsappText: 'Hola, quiero cotizar branding para mi marca.',
    services: [
      'Naming',
      'Manual de marca',
      'Identidad visual',
      'Diseño de piezas corporativas',
      'Packaging',
    ],
  },
  {
    id: 'publicidad',
    title: 'Publicidad',
    description:
      'Llevamos tus ideas a formatos atractivos para medios físicos y digitales.',
    image: servicePublicidad,
    ctaLabel: 'Cotizar publicidad',
    whatsappText: 'Hola, quiero cotizar publicidad para mi negocio.',
    services: [
      'Campañas publicitarias',
      'Diseño de anuncios',
      'Producción gráfica',
      'Material POP',
      'Pauta digital',
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description:
      'Atendemos el crecimiento de tu marca con estrategia orientada a resultados.',
    image: serviceMarketing,
    ctaLabel: 'Cotizar marketing',
    whatsappText: 'Hola, quiero cotizar marketing para mi negocio.',
    services: [
      'Plan de marketing',
      'Social media',
      'Email marketing',
      'Automatización',
      'Analítica y reportes',
    ],
  },
];

export const marketingInfoData: MarketingInfoItem[] = [
  {
    id: 'entrenamiento',
    title: 'Entrenamiento y capacitación',
    description:
      'Capacitamos equipos internos en procesos de marketing, ventas y comunicación digital para mejorar resultados.',
  },
  {
    id: 'marketing-digital',
    title: 'Marketing digital',
    description:
      'Diseñamos estrategias digitales orientadas a adquisición de clientes, conversión y fidelización.',
  },
  {
    id: 'departamento-marketing',
    title: 'Departamento de marketing',
    description:
      'Implementamos un departamento externo de marketing para tu empresa con acompañamiento constante.',
  },
];
