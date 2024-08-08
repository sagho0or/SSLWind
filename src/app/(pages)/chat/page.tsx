'use client'
import React from 'react';
import isMobileView from '@/app/utils/isMobileView';
import MobileChatComponent from '@/app/components/Chat/MobileChat';
import WebChatComponent from '@/app/components/Chat/WebChat';


export default function Chat(){
  return(
    <>
      {
        isMobileView ?
          <>
            <MobileChatComponent />
          </>
          :
          <WebChatComponent />

      }
    </>
  )
}