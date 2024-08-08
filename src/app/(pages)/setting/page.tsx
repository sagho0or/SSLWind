'use client'
import React, { useEffect } from 'react';
import isMobileView from '@/app/utils/isMobileView';
import BottomMenu from '@/app/components/Header/mobileMenu';
import MobileSettingComponent from '@/app/components/Setting/MobileSetting';
import WebSettingComponent from '@/app/components/Setting/WebSetting';
import { User, UserRole } from '@/app/components/Login/user.class';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';


export default function Setting(){
    const user = User.getInstance();
    const router = useRouter();
    

    useEffect(() => {
      const userRole = user.role;

      if (![UserRole.Management, UserRole.Admin, UserRole.Developer].includes(userRole)) {
          router.push('/chat');
      }
  }, [router]);

    if (!user || !['management', 'admin', 'developer'].includes(user.role)) {
        return null; // Optionally, display a loading spinner or message
    }
  return(
    <>
      {
        isMobileView ?
          <>
            <MobileSettingComponent />
            <BottomMenu />
          </>
          :
          <WebSettingComponent />

      }
    </>
  )
}