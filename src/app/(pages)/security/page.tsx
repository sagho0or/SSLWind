'use client'
import React from 'react';
import isMobileView from '@/app/utils/isMobileView';
import { useShowInnerComponent } from '@/app/ShowInnerComponentContext';
import MobileSecurityComponent from '@/app/components/Security/MobileChat';
import WebSecurityComponent from '@/app/components/Security/WebChat';

export default function SecurityPage() {
  const { setShowInnerComponent } = useShowInnerComponent();

  return (
    <>
      {isMobileView ? (
        <MobileSecurityComponent setShowInnerComponent={setShowInnerComponent} />
      ) : (
        <WebSecurityComponent/>
      )}
    </>
  );
}
