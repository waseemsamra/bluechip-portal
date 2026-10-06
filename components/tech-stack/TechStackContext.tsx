"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export interface TechStackContextValue {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  activeFilter: string;
  setActiveFilter: Dispatch<SetStateAction<string>>;
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

const TechStackContext = createContext<TechStackContextValue | undefined>(
  undefined,
);

export function TechStackProvider({ children }: { children: ReactNode }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSection, setActiveSection] = useState("languages");

  return (
    <TechStackContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        activeFilter,
        setActiveFilter,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </TechStackContext.Provider>
  );
}

export function useTechStack() {
  const ctx = useContext(TechStackContext);
  if (!ctx) {
    throw new Error(
      "useTechStack must be used within a TechStackProvider",
    );
  }
  return ctx;
}
