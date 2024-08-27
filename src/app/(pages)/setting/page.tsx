'use client'
import React, { useEffect } from 'react';
import isMobileView from '@/app/utils/isMobileView';
import BottomMenu from '@/app/components/Header/mobileMenu';
import MobileSettingComponent from '@/app/components/Setting/MobileSetting';
import WebSettingComponent from '@/app/components/Setting/WebSetting';
import { useShowInnerComponent } from '@/app/ShowInnerComponentContext';


export default function Setting(){
  const { setShowInnerComponent } = useShowInnerComponent();
    
  return(
    <>
      {
        isMobileView ?
          <>
            <MobileSettingComponent setShowInnerComponent={setShowInnerComponent}/>
            <BottomMenu />
          </>
          :
          <WebSettingComponent />

      }
    </>
  )
}