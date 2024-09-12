import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatResponse } from "@/store/chat/new/slice";
import { fetchChatHistory, resetChatState } from "@/store/chat/history/slice";
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
    const [page, setPage] = useState(0);
    const [goEndFlag, setgoEndFlag] = useState(true);
    const [firstView, setFirstView] = useState(true);
    const [chatNew, setChatNew] = useState(false);


    const chatBoxRef = useRef<HTMLDivElement>(null);
    const previousScrollHeightRef = useRef<number | null>(null);

    useEffect(() => {
        if (!chatNew) {
            dispatch(resetChatState());
            setIsHistoryLoaded(false);
            setPage(0);
            setMessages([]);
            setChatNew(false);
        }
        if (chatId == '') {
            setMessages([]);
            setIsHistoryLoaded(false);
            setPage(0);
            setChatNew(false);
        }
    }, [chatId]);


    useEffect(() => {
        if (isHistoryMode && chatId && !isHistoryLoaded) {
            // Fetch chat history if chatId is provided
            dispatch(fetchChatHistory({ chatId, page: 0 }));
            setIsHistoryLoaded(true);
        }
    }, [isHistoryMode, chatId, isHistoryLoaded]);

    const handleScroll = () => {
        const chatBoxPosition = chatBoxRef.current?.getBoundingClientRect();
        if (chatBoxPosition && chatBoxPosition?.top >= -100
            && chatBoxPosition?.top <= window.innerHeight
            && chathistoryState.hasMore
            && !chathistoryState.isLoading) {

            dispatch(fetchChatHistory({ chatId: chatId || '', page: page }));
            setgoEndFlag(false);
        }
    };

    useEffect(() => {
        if (chathistoryState.hasMore && !firstView) {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [chathistoryState.hasMore, firstView, page, chathistoryState.isLoading]);


    useEffect(() => {
        if (chathistoryState.isLoading && chatBoxRef.current) {
            previousScrollHeightRef.current = chatBoxRef.current.scrollHeight;
        }
    }, [chathistoryState.isLoading]);

    useEffect(() => {

        if (chathistoryState.isDone && chathistoryState.response) {
            if (chathistoryState.response?.id == chatId) {
                if (isHistoryMode) {
                    setMessages((prevMessages) => [
                        ...chathistoryState.response.list,
                        ...prevMessages,
                    ]);

                    if (chatBoxRef.current && previousScrollHeightRef.current) {
                        window.scrollTo({ top: previousScrollHeightRef.current })
                    }


                }
                const newPage = page + 1;
                setPage(newPage);

            }
        }

    }, [chathistoryState.isDone, chathistoryState.response, isHistoryMode]);

    useEffect(() => {

        if (chatState.isDone && chatState.response) {
            if (chatState.response.chatId == chatId || chatNew) {
                if (!isHistoryMode && chatState.response.chatId ) {

                    setChatId(chatState.response.chatId);
                    setIsHistoryLoaded(true);
                    setgoEndFlag(true);
                    window.history.pushState({}, '', `/chat/history/${chatState.response.chatId}`);

                } else {
                    setMessages((prevMessages) => [...prevMessages, { sender: "bot", content: chatState.response.response.content, isSafe: chatState.response.response.isSafe }]);
                    setgoEndFlag(true);
                }
            }

        }
    }, [chatState.isDone, chatState.response, isHistoryMode]);

    const handleSendMessage = () => {
        if (userInput.trim()) {
            setMessages((prevMessages) => [...prevMessages, { sender: "user", content: userInput }]);
            if (isHistoryMode) {
                dispatch(fetchChatResponse({ userInput, chatId }))

                setgoEndFlag(true);
            } else {

                setChatNew(true);
                dispatch(fetchChatResponse({ userInput }));
                setgoEndFlag(true);
            }
            setUserInput("");
        }
    };

    const goEnd = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        if (goEndFlag && messages.length > 0) {
            goEnd();
            setTimeout(() => {
                setFirstView(false);
            }, 500)
        }
    }, [messages]);

    return { userInput, setUserInput, messages, handleSendMessage, messagesEndRef, chatBoxRef };
};
