'use client'
import React, { createContext, useContext, useState } from "react";

const ShowInnerComponentContext = createContext<any>(null);

export const ShowInnerComponentProvider = ({ children }: { children: React.ReactNode }) => {
  const [showInnerComponent, setShowInnerComponent] = useState<boolean>(true);

  return (
    <ShowInnerComponentContext.Provider value={{ showInnerComponent, setShowInnerComponent }}>
      {children}
    </ShowInnerComponentContext.Provider>
  );
};

// Custom Hook to use the context
export const useShowInnerComponent = () => {
  return useContext(ShowInnerComponentContext);
};
