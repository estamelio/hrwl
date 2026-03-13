import { useState, useRef, useEffect } from "react";
import { X, Send, Search, Lightbulb, PenLine, ArrowUp } from "lucide-react";
import akioIdleVideo from "@/assets/akio-idle.mp4";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const quickResponses: Record<string, string> = {
  "what is a brand film": `A brand film is a cinematic piece that tells your brand's story in a way that resonates emotionally with your audience. Unlike traditional ads that push products, brand films create connections by showcasing values, vision, and the human side of your business.

Think of it as your brand's short film — combining storytelling, stunning visuals, and strategic messaging to leave a lasting impression.`,

  "why is it expensive": `Great question! Brand films require:

• **Creative Direction** — Months of concepting, scripting, and storyboarding
• **Top Talent** — Skilled animators, sound designers, and voice artists
• **Production Time** — Quality animation takes 4-8 weeks minimum
• **Custom Everything** — Original music, sound design, and visual assets

But here's the thing: the ROI speaks for itself. A well-crafted brand film can transform your conversions and build lasting brand equity.`,

  "show me examples": `I'd love to! Check out my case studies:

• **Google Vids** — How one commercial helped drive $312M in additional revenue
• **Coinbase** — A cinematic approach to crypto that doesn't feel like an ad
• **HRWL Identity** — Full brand system with animated assets

Head to the Work section to see the full breakdowns, or just ask me about any specific project!`,

  "what services do you offer": `I specialize in three core areas:

**1. Brand Films & Commercials**
Cinematic pieces that tell your story and drive conversions. From concept to final delivery.

**2. Visual Identity Systems**
Complete brand identities including logos, motion assets, guidelines, and animated elements.

**3. Motion Design**
Explainer videos, UI animations, social content, and product visualizations.

Each project is tailored to your specific goals. Want to discuss your project?`,

  "how much does it cost": `Investment varies based on scope, but here's a general idea:

• **Brand Films**: Starting from $15,000
• **Full Identity Systems**: Starting from $8,000
• **Motion Design Projects**: Starting from $3,000

I offer a **money-back guarantee** — if the work doesn't drive the results we agreed on, you get a full refund.

Want to discuss your specific project? Let's book a call!`,

  "hello": `Hey there! 👋

I'm Akio, Djamel's AI assistant. I'm here to answer any questions about:

• Brand films and what makes them work
• Pricing and process details
• Our case studies and past work
• Anything else you're curious about!

What would you like to know?`,

  "hi": `Hey there! 👋

I'm Akio, Djamel's AI assistant. I'm here to answer any questions about:

• Brand films and what makes them work
• Pricing and process details
• Our case studies and past work
• Anything else you're curious about!

What would you like to know?`,
};

const getAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase().trim();
  
  for (const [key, response] of Object.entries(quickResponses)) {
    if (lowerMessage.includes(key) || key.includes(lowerMessage)) {
      return response;
    }
  }

  if (lowerMessage.includes("brand") && lowerMessage.includes("film")) {
    return quickResponses["what is a brand film"];
  }
  if (lowerMessage.includes("expensive") || lowerMessage.includes("cost") || lowerMessage.includes("price") || lowerMessage.includes("pricing")) {
    return quickResponses["how much does it cost"];
  }
  if (lowerMessage.includes("example") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
    return quickResponses["show me examples"];
  }
  if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("do you do")) {
    return quickResponses["what services do you offer"];
  }
  if (lowerMessage.includes("book") || lowerMessage.includes("call") || lowerMessage.includes("contact") || lowerMessage.includes("hire")) {
    return `Great! To book a discovery call with Djamel, head over to the **Inquiries** page. You can also email directly at djamel@hrwl.studio

Looking forward to hearing about your project!`;
  }

  return `Thanks for your message! I can help you with:

• Understanding brand films and their impact
• Learning about our services and pricing
• Exploring case studies and examples
• Booking a consultation call

Try asking me something specific, or feel free to explore the site!`;
};

const suggestedActions = [
  { icon: Search, label: "Ask a question", color: "text-foreground" },
  { icon: PenLine, label: "Learn about services", color: "text-purple-500" },
  { icon: Lightbulb, label: "See pricing", color: "text-emerald-500" },
];

const AkioAgent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleSend = (message?: string) => {
    const messageToSend = message || inputValue.trim();
    if (!messageToSend) return;

    setMessages(prev => [...prev, { role: "user", content: messageToSend }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(messageToSend);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (label: string) => {
    if (label === "Ask a question") {
      inputRef.current?.focus();
    } else if (label === "Learn about services") {
      handleSend("What services do you offer?");
    } else if (label === "See pricing") {
      handleSend("How much does it cost?");
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[520px] px-4">
      {/* Expanded Chat Panel */}
      {isExpanded && messages.length > 0 && (
        <div className="mb-3 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-border">
                <video
                  src={akioIdleVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium">Akio</span>
            </div>
            <button 
              onClick={() => {
                setIsExpanded(false);
                setMessages([]);
              }}
              className="p-1.5 hover:bg-muted rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Messages */}
          <div className="max-h-[320px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <div 
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ 
                      __html: msg.content
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br/>') 
                    }} 
                  />
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-3 rounded-2xl">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Main Widget - Notion Style */}
      <div 
        className={`bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl transition-all duration-300 ${
          isExpanded && messages.length === 0 ? 'p-5' : ''
        }`}
      >
        {/* Initial expanded state with suggestions */}
        {isExpanded && messages.length === 0 && (
          <div className="mb-4 animate-fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
                <video
                  src={akioIdleVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Hi! How can I help you today?</h3>
            <p className="text-sm text-muted-foreground mb-4">Suggested</p>
            <div className="space-y-2">
              {suggestedActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(action.label)}
                  className="flex items-center gap-3 w-full p-2 -mx-2 rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <action.icon className={`w-4 h-4 ${action.color}`} />
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Bar */}
        <div 
          className={`flex items-center gap-3 ${
            isExpanded && messages.length === 0 ? 'pt-4 border-t border-border' : 'p-3'
          }`}
        >
          {/* Avatar - only show in collapsed state */}
          {!isExpanded && (
            <div 
              className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-border flex-shrink-0 cursor-pointer hover:ring-foreground/30 transition-all"
              onClick={() => setIsExpanded(true)}
            >
              <video
                src={akioIdleVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          {/* Input */}
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsExpanded(true)}
              placeholder="Ask Akio anything..."
              className="w-full bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none py-2"
            />
          </div>

          {/* Send Button */}
          <button
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
              inputValue.trim() 
                ? 'bg-foreground text-background hover:opacity-80' 
                : 'bg-muted text-muted-foreground'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div 
          className="fixed inset-0 -z-10"
          onClick={() => {
            if (messages.length === 0) setIsExpanded(false);
          }}
        />
      )}
    </div>
  );
};

export default AkioAgent;
