'use client';
import Icons from "../../../../../public/Icons";
import React, { useEffect, useRef, useState } from "react";
import IButton from "@/app/components/Common/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatResponse } from "@/store/chat/new/slice";
import ReactMarkdown from "react-markdown";

export default function MobileChatComponent({ setShowInnerComponent }:
    { setShowInnerComponent: (a: boolean) => void }) {
    const [userInput, setUserInput] = useState<string>("");
    const [messages, setMessages] = useState<{ role: string, content: string }[]>([]);
    const dispatch = useDispatch();
    const chatState = useSelector((state: any) => state.chat);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatState.isDone && chatState.response) {
            setMessages((prevMessages) => [...prevMessages, { role: "bot", content: chatState.response.data }]);
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
        <>
            <div className={"fixed pt-3 pb-3 w-full bg-white"}>
                <h3 className={"font-semibold text-xl text-center"}>Chat</h3>

                <div onClick={() => {console.log('Clicked, setShowInnerComponent:', setShowInnerComponent);setShowInnerComponent(false)}}
                    className={'absolute top-4 left-2 cursor-pointer'}>
                    <Icons name={'right-arrow-key'} />
                </div>
            </div>
            <div className={"pt-8 h-full flex flex-1 flex-col"}>
                <div className="flex flex-col flex-1 ">
                    <div className="flex-grow p-4 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`my-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
                                {message.role === "user" ? (
                                    <span className="inline-block p-2 rounded bg-blue-500 text-white">
                                        {message.content}
                                    </span>
                                ) : (
                                    <div className="inline-block p-2 rounded bg-gray-300">
                                        <ReactMarkdown>{message.content}</ReactMarkdown>
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
            </div>
        </>
    )
}
