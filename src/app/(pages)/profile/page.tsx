'use client'
import React from 'react';
import isMobileView from '@/app/utils/isMobileView';
import MobileProfileComponent from '@/app/components/Profile/MobileProfile';
import WebProfileComponent from '@/app/components/Profile/WebProfile';
import { useShowInnerComponent } from '@/app/ShowInnerComponentContext';

export default function Profile(){
  const { setShowInnerComponent } = useShowInnerComponent();
  return(
    <>
      {
        isMobileView ?
          <>
            <MobileProfileComponent  setShowInnerComponent={setShowInnerComponent}/>
          </>
          :
          <WebProfileComponent />

      }
    </>
  )
}
