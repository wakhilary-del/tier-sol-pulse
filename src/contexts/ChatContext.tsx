import { createContext, useContext, useState, ReactNode } from 'react';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: Date;
  sessionId: string;
}

export interface ChatSession {
  id: string;
  messages: ChatMessage[];
  lastActivity: Date;
}

interface ChatContextType {
  sessions: ChatSession[];
  addMessage: (sessionId: string, message: Omit<ChatMessage, 'id' | 'timestamp' | 'sessionId'>) => void;
  createSession: () => string;
  getSession: (sessionId: string) => ChatSession | undefined;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [sessions, setSessions] = useState<ChatSession[]>([]);

  const createSession = () => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newSession: ChatSession = {
      id: sessionId,
      messages: [{
        id: '1',
        text: 'Hello! How can we help you today?',
        sender: 'support',
        timestamp: new Date(),
        sessionId,
      }],
      lastActivity: new Date(),
    };
    setSessions(prev => [...prev, newSession]);
    return sessionId;
  };

  const addMessage = (sessionId: string, message: Omit<ChatMessage, 'id' | 'timestamp' | 'sessionId'>) => {
    setSessions(prev => prev.map(session => {
      if (session.id === sessionId) {
        const newMessage: ChatMessage = {
          ...message,
          id: Date.now().toString(),
          timestamp: new Date(),
          sessionId,
        };
        return {
          ...session,
          messages: [...session.messages, newMessage],
          lastActivity: new Date(),
        };
      }
      return session;
    }));
  };

  const getSession = (sessionId: string) => {
    return sessions.find(s => s.id === sessionId);
  };

  return (
    <ChatContext.Provider value={{ sessions, addMessage, createSession, getSession }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return context;
};
