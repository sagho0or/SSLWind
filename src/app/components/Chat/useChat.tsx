import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatResponse } from "@/store/chat/new/slice";
import { fetchChatHistory } from "@/store/chat/history/slice";
import { ChatResponseInterface } from "@/store/chat/new/chat.interface";

export const useChat = (initialChatId: string | null) => {
    const [userInput, setUserInput] = useState<string>("");
    const [messages, setMessages] = useState<{ sender: string, content: string, isSafe?: boolean }[]>([]);
    const dispatch = useDispatch();
    const chatState = useSelector((state: any) => state.chat);
    const chathistoryState = useSelector((state: any) => state.chathistory);
    const [chatId, setChatId] = useState<string | null>(initialChatId);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isHistoryLoaded, setIsHistoryLoaded] = useState<boolean>(false);
    const isHistoryMode = !!chatId;

    useEffect(() => {
        if (isHistoryMode && chatId && !isHistoryLoaded) {
            // Fetch chat history if chatId is provided
            dispatch(fetchChatHistory({ chatId }));
            setIsHistoryLoaded(true);
        }
    }, [isHistoryMode, chatId, isHistoryLoaded, dispatch]);

    useEffect(() => {
        if (chatState.isDone && chatState.response) {
            if (!isHistoryMode && chatState.response.chatId) {
                setMessages((prevMessages) => [...prevMessages, { sender: "bot", content: chatState.response.response.content, isSafe: chatState.response.response.isSafe }]);
                if (chatState.response.chatId) {
                    setChatId(chatState.response.chatId);
                    setIsHistoryLoaded(true);
                    window.history.pushState({}, '', `/chat/history/${chatState.response.chatId}`);
                }
            }else{
                setMessages((prevMessages) => [...prevMessages, { sender: "bot", content: chatState.response.response.content, isSafe: chatState.response.response.isSafe }]);
            }
        }
    }, [chatState.isDone, chatState.response, isHistoryMode]);

    useEffect(() => {
        if (chathistoryState.isDone && chathistoryState.response) {
            if (isHistoryMode) {
                setMessages(chathistoryState.response.list);
            }
        }
    }, [chathistoryState.isDone, chathistoryState.response, isHistoryMode]);

    const handleSendMessage = () => {
        if (userInput.trim()) {
            setMessages((prevMessages) => [...prevMessages, { sender: "user", content: userInput }]);
            if (isHistoryMode) {
                dispatch(fetchChatResponse({ userInput, chatId }));
            } else {
                dispatch(fetchChatResponse({ userInput }));
            }
            setUserInput("");
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return { userInput, setUserInput, messages, handleSendMessage, messagesEndRef };
};
