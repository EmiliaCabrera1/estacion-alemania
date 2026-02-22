"use client";

import { useEffect, useRef } from "react";
import { useScrollSpy } from "@/app/context/ScrollSpyContext";

export default function ScrollableMenuContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setActiveCategory } = useScrollSpy();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
      const sections = container.querySelectorAll<HTMLElement>("section[id]");
      if (sections.length === 0) return;

      const containerRect = container.getBoundingClientRect();
      const triggerOffset = containerRect.top + 80;

      let activeId = (sections[0] as HTMLElement)?.id ?? "";
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= triggerOffset) activeId = section.id;
        else break;
      }

      if (activeId) setActiveCategory(activeId);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => container.removeEventListener("scroll", onScroll);
  }, [setActiveCategory]);

  return (
    <div
      ref={scrollRef}
      data-menu-scroll
      className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden w-full"
    >
      {children}
    </div>
  );
}
