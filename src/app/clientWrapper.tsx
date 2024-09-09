'use client'
import React, { useEffect, useState } from "react";
import isMobileView from "@/app/utils/isMobileView";
import Header from "@/app/components/Header/webHeader";
import { usePathname } from "next/navigation";
import { useShowInnerComponent } from "./ShowInnerComponentContext";
import Menu from "./components/SafeLLM/Menu";

const pages = {
  '/dashboard': 'Dashboard',
  '/profile': 'Profile',
  '/chat': 'Chat',
  '/settings': 'Settings',
  '/management': 'Management',
  '/alerts': 'Alerts',
};

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [load, setLoad] = useState<boolean>(false);
  const currentPath = usePathname();
  const pageTitle = pages[currentPath as keyof typeof pages] || 'SSLM Application';
  const { showInnerComponent, setShowInnerComponent } = useShowInnerComponent();

  useEffect(() => {
    setLoad(true);
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <>
      {load && (
        <>
          {isMobileView ? (
            <div className="min-h-screen flex flex-col">
              {!showInnerComponent ? (
                <Menu currentPath={currentPath} setShowInnerComponent={setShowInnerComponent} />
              ) : (
                children
              )}
            </div>
          ) : (
            <>
              <Header />
              <div className="pt-20 h-screen">
                {children}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
