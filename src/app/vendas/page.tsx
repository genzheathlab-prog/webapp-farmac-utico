'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock,
  FileCheck,
  Brain,
  ArrowRight,
  Star,
  Quote,
  Menu,
  X
} from 'lucide-react';

export default function VendasPage() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: 'IA Especializada',
      description: 'Treinada com legislações ANVISA, CFF e Farmacopeia Brasileira'
    },
    {
      icon: Zap,
      title: 'Respostas Instantâneas',
      description: 'Reduza 70% do tempo em decisões técnicas e regulatórias'
    },
    {
      icon: Shield,
      title: '100% Conforme',
      description: 'Todas as respostas embasadas em legislação vigente'
    },
    {
      icon: FileCheck,
      title: 'Automação Completa',
      description: 'POPs, validações e relatórios gerados automaticamente'
    },
    {
      icon: Clock,
      title: 'Disponível 24/7',
      description: 'Assistente sempre pronto para ajudar sua equipe'
    },
    {
      icon: TrendingUp,
      title: 'Aumento de Produtividade',
      description: 'Mais tempo para atendimento, menos tempo em burocracia'
    }
  ];

  const plans = [
    {
      name: 'Essencial',
      price: 'R$ 197',
      period: '/mês',
      description: 'Ideal para drogarias',
      features: [
        'Chat IA ilimitado',
        'Módulos Drogaria completos',
        'Scanner de Intercambialidade',
        'OCR de Receitas',
        'Validador Regulatório',
        'Suporte por e-mail'
      ],
      highlighted: false
    },
    {
      name: 'Profissional',
      price: 'R$ 397',
      period: '/mês',
      description: 'Para farmácias de manipulação',
      features: [
        'Tudo do Essencial',
        'Módulos Manipulação completos',
        'V.I.I. - Validação de Insumos',
        'Gerador de POPs Inteligentes',
        'Guardião Técnico',
        'Suporte prioritário',
        'Treinamento da equipe'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Para redes e grupos',
      features: [
        'Tudo do Profissional',
        'Múltiplas unidades',
        'API personalizada',
        'Integração com sistemas',
        'Relatórios customizados',
        'Gerente de conta dedicado',
        'SLA garantido'
      ],
      highlighted: false
    }
  ];

  const testimonials = [
    {
      name: 'Dra. Ana Paula Silva',
      role: 'Responsável Técnica - Drogaria Saúde Total',
      content: 'O Farmassistant.ai revolucionou nossa rotina. Antes gastávamos horas validando receitas e consultando legislação. Agora é instantâneo!',
      rating: 5
    },
    {
      name: 'Dr. Carlos Mendes',
      role: 'Proprietário - Farmácia Manipula Mais',
      content: 'A validação automática de CAs economiza tempo precioso da equipe de CQ. O ROI foi alcançado em menos de 2 meses.',
      rating: 5
    },
    {
      name: 'Dra. Juliana Costa',
      role: 'Farmacêutica - Rede FarmaBem',
      content: 'Ferramenta indispensável! A geração automática de POPs conforme RDC 67 facilitou muito nosso processo de certificação.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/40b225be-a952-458f-b833-2a571cf41294.png" 
                alt="Farmassistant.ai" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Recursos
              </a>
              <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Planos
              </a>
              <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Depoimentos
              </a>
              <button
                onClick={() => router.push('/login')}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                Entrar
              </button>
              <button
                onClick={() => router.push('/login')}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Começar Grátis
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <a href="#recursos" className="block py-2 text-gray-700 hover:text-blue-600">
                Recursos
              </a>
              <a href="#planos" className="block py-2 text-gray-700 hover:text-blue-600">
                Planos
              </a>
              <a href="#depoimentos" className="block py-2 text-gray-700 hover:text-blue-600">
                Depoimentos
              </a>
              <button
                onClick={() => router.push('/login')}
                className="w-full py-2 text-left text-gray-700 hover:text-blue-600"
              >
                Entrar
              </button>
              <button
                onClick={() => router.push('/login')}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold"
              >
                Começar Grátis
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              IA Especializada para Farmacêuticos
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Decisões Farmacêuticas
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {' '}Mais Rápidas e Seguras
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Assistente de IA treinado com legislações ANVISA, CFF e Farmacopeia Brasileira. 
              Reduza 70% do tempo em decisões técnicas e regulatórias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/login')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-blue-600 transition-all"
              >
                Ver Recursos
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>7 dias grátis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ferramentas poderosas para drogarias e farmácias de manipulação
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Planos para cada necessidade
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha o plano ideal para sua farmácia ou drogaria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-600 to-green-600 text-white shadow-2xl scale-105'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4">
                    Mais Popular
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                
                <p className={`mb-6 ${
                  plan.highlighted ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-4xl font-bold ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? 'text-white/80' : 'text-gray-600'}>
                    {plan.period}
                  </span>
                </div>

                <button
                  onClick={() => router.push('/login')}
                  className={`w-full py-3 rounded-xl font-semibold transition-all mb-6 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:shadow-lg'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg'
                  }`}
                >
                  Começar Agora
                </button>

                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-white' : 'text-green-600'
                      }`} />
                      <span className={plan.highlighted ? 'text-white/90' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Farmacêuticos confiam no Farmassistant.ai
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja o que nossos usuários têm a dizer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border-2 border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                
                <p className="text-gray-700 mb-6">
                  {testimonial.content}
                </p>

                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para revolucionar sua farmácia?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Comece gratuitamente hoje e veja a diferença em 7 dias
          </p>
          <button
            onClick={() => router.push('/login')}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            Começar Gratuitamente
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/40b225be-a952-458f-b833-2a571cf41294.png" 
                alt="Farmassistant.ai" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                IA especializada para farmacêuticos
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
                <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 Farmassistant.ai. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
