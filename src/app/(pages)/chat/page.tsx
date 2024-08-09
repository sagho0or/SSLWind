'use client'
import React from 'react';
import isMobileView from '@/app/utils/isMobileView';
import MobileChatComponent from '@/app/components/Chat/MobileChat';
import WebChatComponent from '@/app/components/Chat/WebChat';
import { useShowInnerComponent } from '@/app/ShowInnerComponentContext';

export default function Chat() {
  const { setShowInnerComponent } = useShowInnerComponent();

  return (
    <>
      {isMobileView ? (
        <MobileChatComponent setShowInnerComponent={setShowInnerComponent} />
      ) : (
        <WebChatComponent />
      )}
    </>
  );
}
