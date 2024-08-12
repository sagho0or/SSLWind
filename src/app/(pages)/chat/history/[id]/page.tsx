'use client'
import React, { useEffect } from 'react';
import isMobileView from '@/app/utils/isMobileView';
import MobileChatComponent from '@/app/components/Chat/MobileChat';
import WebChatComponent from '@/app/components/Chat/WebChat';
import { useShowInnerComponent } from '@/app/ShowInnerComponentContext';

import { useParams } from "next/navigation";

export default function ChatHistory() {
  const { setShowInnerComponent } = useShowInnerComponent();
  const params = useParams();
  const id = params.id;


  return (
    <>
      {isMobileView ? (
        <MobileChatComponent  initialChatId={id as string} setShowInnerComponent={setShowInnerComponent} />
      ) : (
        <WebChatComponent initialChatId={id as string} />
      )}
    </>
  );
}
