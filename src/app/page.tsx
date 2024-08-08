"use client";
import SafeLLM from '@/app/components/SafeLLM';
import { useRouter } from "next/navigation";
import { useCookies } from 'react-cookie';

export default async function Home() {
  const [cookie] = useCookies();
  const isLogin = !!cookie['auth-token'];
    const router = useRouter();
    

    return <>
    {
      isLogin ?
        router.push('/chat')
    :
        router.push('/login')
    
    }
    </>;
}

