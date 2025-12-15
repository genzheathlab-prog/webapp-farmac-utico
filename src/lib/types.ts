// Tipos do sistema Farmassistant.ai

export type UserProfile = 'drogaria' | 'manipulacao' | 'ambos';
export type UserRole = 'rt' | 'cq' | 'balcao' | 'proprietario';
export type ResponseStyle = 'curta' | 'detalhada';

export interface QuizAnswers {
  profile: UserProfile;
  role: UserRole;
  responseStyle: ResponseStyle;
  legalCitations: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  cff?: string;
  quizCompleted: boolean;
  quizAnswers?: QuizAnswers;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  legislation?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'drogaria' | 'manipulacao';
  available: boolean;
}
