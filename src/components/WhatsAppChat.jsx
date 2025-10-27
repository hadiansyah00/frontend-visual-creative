import React, { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { FaWhatsapp } from "react-icons/fa";
import { contact, whatsappChat } from "@/mock/data"; // ✅ Import langsung

export const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setMessage("");
    setIsOpen(false);
  };

  const sendDefaultMessage = () => {
    const encodedMessage = encodeURIComponent(whatsappChat.defaultMessage);
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* === Chat Box Popup === */}
      {isOpen && (
        <div className="fixed z-50 duration-300 bottom-24 right-6 animate-in slide-in-from-bottom-4 fade-in-0">
          <Card className="overflow-hidden border-0 shadow-2xl w-80 md:w-96 rounded-xl">
            <CardHeader className="bg-[#25D366] text-white flex items-center justify-between">
              <CardTitle className="text-sm font-medium">
                {whatsappChat.chatTitle}
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="w-6 h-6 p-0 text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>

            <CardContent className="p-4 bg-white">
              <Textarea
                placeholder={whatsappChat.placeholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-20 border-gray-200 resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />

              <div className="flex gap-2 mt-3">
                <Button
                  onClick={sendMessage}
                  className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white font-medium transition-all duration-200 hover:scale-105"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {whatsappChat.sendButton}
                </Button>
              </div>

              <div className="pt-3 mt-3 border-t">
                <Button
                  onClick={sendDefaultMessage}
                  variant="outline"
                  className="w-full text-sm text-gray-700 transition-all border-gray-200 hover:bg-gray-50 hover:text-gray-900"
                >
                  💬 Konsultasi Gratis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* === Floating WhatsApp Button === */}
      <div className="fixed z-50 bottom-6 right-6">
        <Button
          onClick={toggleChat}
          className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <FaWhatsapp className="w-16 h-16 text-white" />{" "}
          {/* ✅ Bigger WhatsApp icon */}
        </Button>
      </div>
    </>
  );
};

export default WhatsAppChat;
