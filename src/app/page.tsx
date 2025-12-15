'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Zap, BookOpen, CheckCircle, Pill, FlaskConical, FileCheck, MessageSquare, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/40b225be-a952-458f-b833-2a571cf41294.png" 
                alt="Farmassistant.ai Logo" 
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors">Recursos</a>
              <a href="#modulos" className="text-gray-700 hover:text-blue-600 transition-colors">Módulos</a>
              <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
              <Link href="/vendas" className="text-gray-700 hover:text-blue-600 transition-colors">
                Planos
              </Link>
              <Link href="/login" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:shadow-lg transition-all duration-300">
                Entrar
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <a href="#recursos" className="text-gray-700 hover:text-blue-600 transition-colors">Recursos</a>
                <a href="#modulos" className="text-gray-700 hover:text-blue-600 transition-colors">Módulos</a>
                <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors">Benefícios</a>
                <Link href="/vendas" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Planos
                </Link>
                <Link href="/login" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg text-center">
                  Entrar
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              IA Especializada para Farmacêuticos
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Decisões Farmacêuticas
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                70% Mais Rápidas
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Assistente inteligente para drogarias e farmácias de manipulação. 
              Respostas objetivas baseadas em ANVISA, CFF e Farmacopeia Brasileira.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group">
                Começar Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/vendas" className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 transition-all duration-300">
                Ver Planos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por que Farmassistant.ai?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologia de ponta para otimizar sua rotina farmacêutica
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Regulatório</h3>
              <p className="text-gray-700">
                Todas as respostas baseadas em legislações oficiais: Portaria 344, RDC 67, CFF e Farmacopeia Brasileira.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respostas Instantâneas</h3>
              <p className="text-gray-700">
                Reduza até 70% do tempo de pesquisa. IA treinada para respostas objetivas e precisas.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalização Inteligente</h3>
              <p className="text-gray-700">
                IA se adapta ao seu perfil: drogaria, manipulação, RT, CQ ou balcão. Respostas sob medida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Módulos Section */}
      <section id="modulos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Módulos Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ferramentas específicas para cada necessidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Drogarias */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Pill className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Drogarias</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: FileCheck, title: 'Scanner de Intercambialidade', desc: 'Genéricos e similares bioequivalentes' },
                  { icon: MessageSquare, title: 'OCR de Receitas', desc: 'Transcrição e validação automática' },
                  { icon: Shield, title: 'Guardião de Segurança', desc: 'Alertas de interações medicamentosas' },
                  { icon: FileCheck, title: 'Validador Regulatório', desc: 'SNGPC e Portaria 344' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-600 transition-all">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Manipulação */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Manipulação</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: FlaskConical, title: 'Guardião Técnico', desc: 'Análise de pH, solubilidade e estabilidade' },
                  { icon: FileCheck, title: 'Validação Inteligente (V.I.I.)', desc: 'Conformidade com FB e CA' },
                  { icon: FileCheck, title: 'Gerador de POPs', desc: 'POPs automatizados conforme RDC 67' },
                  { icon: MessageSquare, title: 'Comunicação IA', desc: 'Respostas técnicas e comerciais' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-600 transition-all">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Impacto real na sua rotina profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '70%', label: 'Redução no tempo de decisão' },
              { value: '100%', label: 'Conformidade regulatória' },
              { value: '24/7', label: 'Disponibilidade total' },
              { value: '5 anos', label: 'Auditoria e backup' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              'POPs e CQ 100% automatizados',
              'Diminuição de erros regulatórios',
              'IA adaptativa ao seu perfil',
              'Respostas com base legal',
              'Histórico auditável completo',
              'Atualização contínua de legislações'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pronto para Revolucionar sua Prática Farmacêutica?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se aos farmacêuticos que já economizam horas de trabalho diariamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 group">
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/vendas" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-200 hover:border-blue-600 transition-all duration-300">
              Ver Planos e Preços
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/40b225be-a952-458f-b833-2a571cf41294.png" 
              alt="Farmassistant.ai Logo" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm">
            © 2024 Farmassistant.ai - Assistente Inteligente para Farmacêuticos
          </p>
          <p className="text-xs mt-2">
            Baseado em legislações ANVISA, CFF e Farmacopeia Brasileira
          </p>
        </div>
      </footer>
    </div>
  );
}
