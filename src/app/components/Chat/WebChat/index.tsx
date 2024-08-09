import React, { useEffect, useState, useRef } from "react";
import Sidebar from "@/app/components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatResponse } from "@/store/chat/new/slice";
import { ChatResponseInterface } from "@/store/chat/new/chat.interface";
import ReactMarkdown from "react-markdown";

export default function WebChatComponent() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
    const [userInput, setUserInput] = useState<string>("");
    const [messages, setMessages] = useState<{ role: string, content: string, isSafe?: boolean }[]>([]);
    const dispatch = useDispatch();
    const chatState = useSelector((state: any) => state.chat);
    const messagesEndRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (chatState.isDone && chatState.response) {
            setMessages((prevMessages) => [...prevMessages, { role: "bot", content: chatState.response.data, isSafe: chatState.response.isSafe }]);
        }
    }, [chatState.isDone, chatState.response]);

    const handleSendMessage = () => {
        if (userInput.trim()) {
            setMessages((prevMessages) => [...prevMessages, { role: "user", content: userInput }]);
            dispatch(fetchChatResponse({ userInput }));
            setUserInput("");
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
            <div className="flex flex-col w-full">
                <div className="flex-grow p-4 overflow-y-auto">
                    {messages.map((message, index) => (
                        <div key={index} className={`my-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
                            {message.role === "user" ? (
                                <span className="inline-block p-2 rounded bg-blue-500 text-white">
                                    {message.content}
                                </span>
                            ) : (
                                message.isSafe ?
                                    <div className="inline-block p-2 rounded bg-gray-300">
                                        <ReactMarkdown>{message.content}</ReactMarkdown>
                                    </div>
                                    :
                                    <div className="inline-block p-2 rounded bg-red-300">
                                        <p>
                                            !! The system has detected an unsafe response and therefore cannot be shown. A manager has been alerted. You can continue to engage with the agent, try re-phrasing your query.
                                        </p>
                                    </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t border-gray-300">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={handleSendMessage}
                        className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </Sidebar>
    );
}
