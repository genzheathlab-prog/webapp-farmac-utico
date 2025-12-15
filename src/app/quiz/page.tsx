'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pill, ArrowRight, CheckCircle } from 'lucide-react';
import { QuizAnswers, UserProfile, UserRole, ResponseStyle } from '@/lib/types';

export default function QuizPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});

  const handleComplete = () => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    user.quizCompleted = true;
    user.quizAnswers = answers;
    localStorage.setItem('user', JSON.stringify(user));
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
            <Pill className="w-7 h-7 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Farmassistant.ai
          </span>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Personalização</span>
            <span className="text-sm font-medium text-gray-600">{step}/4</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-green-600 transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Onde você atua?</h2>
              <p className="text-gray-600 mb-6">Isso nos ajuda a personalizar os módulos para você</p>
              
              <div className="space-y-3">
                {[
                  { value: 'drogaria', label: 'Drogaria', desc: 'Atendimento ao balcão, dispensação e SNGPC' },
                  { value: 'manipulacao', label: 'Manipulação', desc: 'Formulações, CQ e POPs' },
                  { value: 'ambos', label: 'Ambos', desc: 'Atuo em drogaria e manipulação' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setAnswers({ ...answers, profile: option.value as UserProfile });
                      setStep(2);
                    }}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Qual sua função principal?</h2>
              <p className="text-gray-600 mb-6">Vamos ajustar o tom e conteúdo das respostas</p>
              
              <div className="space-y-3">
                {[
                  { value: 'rt', label: 'Responsável Técnico (RT)', desc: 'Gestão técnica e regulatória' },
                  { value: 'cq', label: 'Controle de Qualidade (CQ)', desc: 'Análises e validações' },
                  { value: 'balcao', label: 'Atendimento ao Balcão', desc: 'Dispensação e orientação' },
                  { value: 'proprietario', label: 'Proprietário', desc: 'Gestão geral da farmácia' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setAnswers({ ...answers, role: option.value as UserRole });
                      setStep(3);
                    }}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Estilo de resposta preferido?</h2>
              <p className="text-gray-600 mb-6">Como você prefere receber as informações?</p>
              
              <div className="space-y-3">
                {[
                  { value: 'curta', label: 'Respostas Curtas', desc: 'Objetivas e diretas ao ponto' },
                  { value: 'detalhada', label: 'Respostas Detalhadas', desc: 'Explicações completas e contextualizadas' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setAnswers({ ...answers, responseStyle: option.value as ResponseStyle });
                      setStep(4);
                    }}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Citações legais nas respostas?</h2>
              <p className="text-gray-600 mb-6">Deseja que a IA sempre cite a legislação aplicável?</p>
              
              <div className="space-y-3">
                {[
                  { value: true, label: 'Sim, sempre citar', desc: 'Inclui referências legais (Portaria 344, RDC, etc.)' },
                  { value: false, label: 'Não, apenas quando relevante', desc: 'Citações apenas em casos específicos' }
                ].map((option) => (
                  <button
                    key={option.value.toString()}
                    onClick={() => {
                      setAnswers({ ...answers, legalCitations: option.value });
                      handleComplete();
                    }}
                    className="w-full p-4 text-left border-2 border-gray-200 rounded-xl hover:border-green-600 hover:bg-green-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 mb-1">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="mt-6 text-gray-600 hover:text-gray-900 transition-colors mx-auto block"
          >
            ← Voltar
          </button>
        )}
      </div>
    </div>
  );
}
