"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function Home() {
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

