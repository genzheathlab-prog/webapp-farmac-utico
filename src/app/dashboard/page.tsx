'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  MessageSquare, 
  Search, 
  Camera, 
  Shield, 
  FileCheck, 
  Stethoscope,
  Calculator,
  FlaskConical,
  TestTube,
  FileText,
  Users,
  Mail,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Pill
} from 'lucide-react';
import ChatInterface from '@/components/custom/chat-interface';
import VIIModule from './components/VIIModule';
import { MODULES_DROGARIA, MODULES_MANIPULACAO } from '@/lib/constants';
import { User } from '@/lib/types';

const iconMap: Record<string, any> = {
  Search, Camera, Shield, FileCheck, MessageSquare, Stethoscope,
  Calculator, FlaskConical, TestTube, FileText, Users, Mail
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeView, setActiveView] = useState<'chat' | 'modules' | 'vii'>('chat');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(userData);
    if (!parsedUser.quizCompleted) {
      router.push('/quiz');
      return;
    }

    setUser(parsedUser);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  const handleModuleClick = (moduleId: string) => {
    if (moduleId === 'vii') {
      setActiveView('vii');
      setSidebarOpen(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const showDrogaria = user.quizAnswers?.profile === 'drogaria' || user.quizAnswers?.profile === 'ambos';
  const showManipulacao = user.quizAnswers?.profile === 'manipulacao' || user.quizAnswers?.profile === 'ambos';

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`fixed top-0 w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} z-40`}>
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="flex items-center gap-2">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/40b225be-a952-458f-b833-2a571cf41294.png" 
                alt="Farmassistant.ai Logo" 
                className="h-10 w-auto"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {darkMode ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            
            <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} relative`}>
              <Bell className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
              <Settings className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>

            <button
              onClick={handleLogout}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <LogOut className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        } border-r transition-transform duration-300 z-30 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 overflow-y-auto`}
      >
        <div className="p-4">
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-50 to-green-50'} mb-6`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user.name}</div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {user.quizAnswers?.role === 'rt' && 'Responsável Técnico'}
                  {user.quizAnswers?.role === 'cq' && 'Controle de Qualidade'}
                  {user.quizAnswers?.role === 'balcao' && 'Atendimento'}
                  {user.quizAnswers?.role === 'proprietario' && 'Proprietário'}
                </div>
              </div>
            </div>
            {user.cff && (
              <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                CFF: {user.cff}
              </div>
            )}
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveView('chat')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeView === 'chat'
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">Chat Central</span>
            </button>

            <button
              onClick={() => setActiveView('modules')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeView === 'modules'
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                  : darkMode
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Pill className="w-5 h-5" />
              <span className="font-medium">Módulos</span>
            </button>

            {showManipulacao && (
              <>
                <div className={`px-4 py-2 text-xs font-semibold ${darkMode ? 'text-gray-500' : 'text-gray-500'} uppercase tracking-wider mt-4`}>
                  Controle de Qualidade
                </div>
                <button
                  onClick={() => setActiveView('vii')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeView === 'vii'
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                      : darkMode
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <TestTube className="w-5 h-5" />
                  <span className="font-medium">V.I.I. - Validação</span>
                </button>
              </>
            )}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        {activeView === 'chat' && (
          <div className={`h-[calc(100vh-4rem)] ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <ChatInterface
              userProfile={user.quizAnswers?.profile}
              responseStyle={user.quizAnswers?.responseStyle}
              legalCitations={user.quizAnswers?.legalCitations}
            />
          </div>
        )}

        {activeView === 'vii' && (
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                    <TestTube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      V.I.I. - Validação Inteligente de Insumos
                    </h1>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Análise automática de Certificados de Análise com IA
                    </p>
                  </div>
                </div>
              </div>

              <VIIModule darkMode={darkMode} />
            </div>
          </div>
        )}

        {activeView === 'modules' && (
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
                Seus Módulos
              </h1>

              {showDrogaria && (
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                      <Pill className="w-6 h-6 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Drogaria
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {MODULES_DROGARIA.map((module) => {
                      const Icon = iconMap[module.icon];
                      return (
                        <button
                          key={module.id}
                          onClick={() => handleModuleClick(module.id)}
                          className={`p-6 rounded-xl border-2 transition-all text-left ${
                            darkMode
                              ? 'bg-gray-800 border-gray-700 hover:border-blue-600'
                              : 'bg-white border-gray-200 hover:border-blue-600 hover:shadow-lg'
                          }`}
                        >
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {module.title}
                          </h3>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {module.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {showManipulacao && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                      <FlaskConical className="w-6 h-6 text-white" />
                    </div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Manipulação
                    </h2>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {MODULES_MANIPULACAO.map((module) => {
                      const Icon = iconMap[module.icon];
                      return (
                        <button
                          key={module.id}
                          onClick={() => handleModuleClick(module.id)}
                          className={`p-6 rounded-xl border-2 transition-all text-left ${
                            darkMode
                              ? 'bg-gray-800 border-gray-700 hover:border-green-600'
                              : 'bg-white border-gray-200 hover:border-green-600 hover:shadow-lg'
                          }`}
                        >
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                            <Icon className="w-6 h-6 text-green-600" />
                          </div>
                          <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {module.title}
                          </h3>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {module.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
