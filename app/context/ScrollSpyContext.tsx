"use client";

import React, { createContext, useContext, useState } from "react";

type ScrollSpyContextType = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const ScrollSpyContext = createContext<ScrollSpyContextType | null>(null);

export function ScrollSpyProvider({ children }: { children: React.ReactNode }) {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <ScrollSpyContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </ScrollSpyContext.Provider>
  );
}

export function useScrollSpy() {
  const ctx = useContext(ScrollSpyContext);
  if (!ctx) throw new Error("useScrollSpy must be used within ScrollSpyProvider");
  return ctx;
}
