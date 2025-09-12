import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Bot } from "lucide-react";

function AITherapist() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMsg = { role: "user", content: message };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/therapist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      const aiMsg = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Sorry, I couldn’t connect right now. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-indigo-400 via-blue-300 to-pink-400">
      {/* Header */}
      <header className="p-4 bg-indigo-600 text-white text-lg font-semibold shadow-md">
        Mind Engine – AI Therapist
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start space-x-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "assistant" && (
              <div className="bg-indigo-500 text-white p-3 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
            )}
            <div
              className={`px-4 py-2 rounded-2xl shadow-md max-w-sm ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
            {msg.role === "user" && (
              <div className="bg-pink-500 text-white p-2 rounded-full">
                <User className="w-5 h-5" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-0 bg-white/70 backdrop-blur-md flex items-center space-x-3 shadow-lg">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
          className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-gray-50 shadow-sm transition-all duration-200 focus:scale-[1.01]"
        />
        <motion.button
          onClick={sendMessage}
          disabled={loading}
          animate={loading ? { rotate: 360 } : { rotate: 0 }}
          transition={loading ? { repeat: Infinity, duration: 1, ease: "linear" } : {}}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-3 rounded-full shadow-md transition"
        >
          <Send className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}

export default AITherapist;
