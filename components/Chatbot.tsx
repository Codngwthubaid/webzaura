"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BotMessageSquare } from 'lucide-react';
import { Bot } from 'lucide-react';

const Chatbot = () => {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div>
            {/* Chatbot Toggle Button */}
            <div className="fixed bottom-24 right-5 flex flex-col gap-3">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-[#e9590c] hover:bg-black text-white px-4 py-4 rounded-full shadow-lg transition"
                >
                    {isOpen ? <Bot /> : <BotMessageSquare />}
                </button>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50"
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="relative left-[135px] sm:left-[540px] bg-white text-black px-5 py-3 rounded-md"
                    >
                        ✖
                    </button>
                    <div
                        className={`relative shadow-lg rounded-lg p-2 transition ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
                            }`}
                        style={{
                            width: "90vw",
                            height: "90vh",
                            borderRadius: "10px",
                        }}
                    >
                        <iframe
                            src="https://www.chatbase.co/chatbot-iframe/CcCDmOeKurTq63Rs3ndAp"
                            className="w-full h-full"
                            frameBorder="0"
                            style={{
                                borderRadius: "10px",
                                filter: theme === "dark" ? "invert(1)" : "none",
                            }}
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
