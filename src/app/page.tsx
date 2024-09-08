'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const response = await fetch("/api/auth/checkLogin");
        const data = await response.json();

        if (data.isLogin) {
          setIsLoggedIn(true);
          router.push("/chat");
        } else {
          setIsLoggedIn(false);
          router.push("/login");
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
        router.push("/login");
      }
    }

    checkLoginStatus();
  }, []);

  return <>{isLoggedIn === null ? <p>Checking login status...</p> : null}</>;
}
