// Constantes do Farmassistant.ai

import { Module } from './types';

export const MODULES_DROGARIA: Module[] = [
  {
    id: 'scanner',
    title: 'Scanner de Intercambialidade',
    description: 'Lista genéricos e similares bioequivalentes automaticamente',
    icon: 'Search',
    category: 'drogaria',
    available: true
  },
  {
    id: 'ocr',
    title: 'OCR de Receitas',
    description: 'Transcreve receitas, valida doses e alerta riscos',
    icon: 'Camera',
    category: 'drogaria',
    available: true
  },
  {
    id: 'guardiao',
    title: 'Guardião de Segurança',
    description: 'Alerta interações e recomenda alternativas seguras',
    icon: 'Shield',
    category: 'drogaria',
    available: true
  },
  {
    id: 'validador',
    title: 'Validador Regulatório',
    description: 'Valida prazos, tipo de receita e exigências legais',
    icon: 'FileCheck',
    category: 'drogaria',
    available: true
  },
  {
    id: 'posologia',
    title: 'Gerador de Posologia WhatsApp',
    description: 'Cria texto amigável para envio ao cliente',
    icon: 'MessageSquare',
    category: 'drogaria',
    available: true
  },
  {
    id: 'triagem',
    title: 'Triagem Inteligente',
    description: 'Sugere MIPs adequados com base em sintomas',
    icon: 'Stethoscope',
    category: 'drogaria',
    available: true
  }
];

export const MODULES_MANIPULACAO: Module[] = [
  {
    id: 'orcamento',
    title: 'Assistente de Orçamento',
    description: 'Lê receitas, converte unidades e precifica automaticamente',
    icon: 'Calculator',
    category: 'manipulacao',
    available: true
  },
  {
    id: 'guardiao-tecnico',
    title: 'Guardião Técnico',
    description: 'Analisa pH, solubilidade e estabilidade dos componentes',
    icon: 'FlaskConical',
    category: 'manipulacao',
    available: true
  },
  {
    id: 'vii',
    title: 'Validação Inteligente de Insumos (V.I.I.)',
    description: 'Compara resultados com FB e CA',
    icon: 'TestTube',
    category: 'manipulacao',
    available: true
  },
  {
    id: 'pops',
    title: 'Gerador de POPs Inteligentes',
    description: 'Cria POPs personalizados conforme RDC 67',
    icon: 'FileText',
    category: 'manipulacao',
    available: true
  },
  {
    id: 'scripts',
    title: 'Gerador de Scripts Comerciais',
    description: 'Scripts para equipe e representantes',
    icon: 'Users',
    category: 'manipulacao',
    available: true
  },
  {
    id: 'comunicacao',
    title: 'Comunicação IA',
    description: 'Respostas técnicas e comerciais empáticas',
    icon: 'Mail',
    category: 'manipulacao',
    available: true
  }
];

export const LEGISLACOES = [
  'Portaria SVS/MS nº 344/1998',
  'SNGPC',
  'SNCR',
  'Portaria MJSP nº 240/2019',
  'RDC 67/2007',
  'RDC 357/2001',
  'RDC 753/2023',
  'RDC 601/2014',
  'Farmacopeia Brasileira'
];
