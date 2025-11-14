import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChat } from '@/contexts/ChatContext';
import { Button } from '@/components/ui/button';
import { LogOut, Send, MessageCircle } from 'lucide-react';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const { sessions, addMessage } = useChat();
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (isAuthenticated !== 'true') {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    navigate('/admin');
  };

  const handleSendReply = () => {
    if (!selectedSessionId || !replyText.trim()) return;

    addMessage(selectedSessionId, {
      text: replyText,
      sender: 'support',
    });
    setReplyText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  const selectedSession = sessions.find(s => s.id === selectedSessionId);
  const sortedSessions = [...sessions].sort((a, b) => 
    b.lastActivity.getTime() - a.lastActivity.getTime()
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass-card border-b border-border/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Support Dashboard</h1>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>
          <Button onClick={handleLogout} variant="ghost" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sessions List */}
        <div className="w-80 border-r border-border/50 overflow-y-auto bg-card/50">
          <div className="p-4 border-b border-border/50">
            <h2 className="text-sm font-semibold text-foreground">
              Active Chats ({sessions.length})
            </h2>
          </div>
          <div className="divide-y divide-border/30">
            {sortedSessions.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-sm text-muted-foreground">No active chats</p>
              </div>
            ) : (
              sortedSessions.map((session) => {
                const lastMessage = session.messages[session.messages.length - 1];
                const userMessages = session.messages.filter(m => m.sender === 'user');
                const lastUserMessage = userMessages[userMessages.length - 1];

                return (
                  <button
                    key={session.id}
                    onClick={() => setSelectedSessionId(session.id)}
                    className={`w-full p-4 text-left hover:bg-muted/30 transition-colors ${
                      selectedSessionId === session.id ? 'bg-muted/50 border-l-2 border-primary' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-medium text-foreground truncate">
                        Session {session.id.split('_')[1]}
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                        {session.lastActivity.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">
                      {lastUserMessage ? lastUserMessage.text : 'No messages yet'}
                    </p>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Conversation View */}
        <div className="flex-1 flex flex-col">
          {selectedSession ? (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {selectedSession.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-muted/30 text-foreground border border-border/30'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Input */}
              <div className="p-4 border-t border-border/50">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your reply..."
                    className="flex-1 px-4 py-3 rounded-lg bg-muted/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <Button
                    onClick={handleSendReply}
                    size="icon"
                    className="w-12 h-12 rounded-lg"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Select a chat to view conversation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
