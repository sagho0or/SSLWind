'use client'
import React from 'react';
import isMobileView from '@/app/utils/isMobileView';
import BottomMenu from '@/app/components/Header/mobileMenu';
import MobileProfileComponent from '@/app/components/Profile/MobileProfile';
import WebProfileComponent from '@/app/components/Profile/WebProfile';

export default function Profile(){
  return(
    <>
      {
        isMobileView ?
          <>
            <MobileProfileComponent />
            <BottomMenu />
          </>
          :
          <WebProfileComponent />

      }
    </>
  )
}