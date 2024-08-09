'use client'
import React, { useEffect } from 'react';
import isMobileView from '@/app/utils/isMobileView';
import BottomMenu from '@/app/components/Header/mobileMenu';
import MobileSettingComponent from '@/app/components/Setting/MobileSetting';
import WebSettingComponent from '@/app/components/Setting/WebSetting';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { UserRole } from '@/store/userProfile/interface';


export default function Setting(){
    const router = useRouter();
    const userProfile = useSelector((state: RootState) => state.userProfile.data);

    useEffect(() => {
      const userRole = userProfile.role;

      if (![UserRole.Management, UserRole.Admin, UserRole.Developer].includes(userRole)) {
          router.push('/chat');
      }
  }, [router]);

    if (!userProfile || !['management', 'admin', 'developer'].includes(userProfile.role)) {
        return null; 
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