"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();
    
    useEffect(() => {
      const checkLogin = async () => {
        const token = localStorage.getItem('isLogin');
        if (token) {
          router.push('/chat');
        } else {
          router.push('/login');
        }
      };
      checkLogin();
    }, []);
  
    return null;
}

