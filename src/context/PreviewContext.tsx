"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface PreviewContextType {
  currentProject: number | null;
  setCurrentProject: Dispatch<SetStateAction<number | null>>;
}

const PreviewContext = createContext<PreviewContextType | undefined>(undefined);

export const usePreview = (): PreviewContextType => {
  const context = useContext(PreviewContext);
  if (!context) {
    throw new Error("usePreview must be used within a MenuProvider");
  }
  return context;
};

interface PreviewProviderProps {
  children: ReactNode;
}

export const PreviewProvider: React.FC<PreviewProviderProps> = ({ children }) => {
  const [currentProject, setCurrentProject] = useState<number | null>(null);

  return (
    <PreviewContext.Provider value={{ currentProject, setCurrentProject }}>
      {children}
    </PreviewContext.Provider>
  );
};
