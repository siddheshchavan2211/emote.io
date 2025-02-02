
"use client";

import { HeroUIProvider } from "@heroui/react";
import Emote from "@/components/Emote";
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-7xl">
      <HeroUIProvider>
      <Emote />
      </HeroUIProvider>
    </div>
  );
}
