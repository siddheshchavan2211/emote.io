import { Card, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { useState } from "react";

function Emote() {
  const [emoji, setEmoji] = useState("😏");

  return (
    <main className="min-h-screen flex items-center justify-center gap-2 flex-col">
      <Card className="text-9xl p-3">{emoji}</Card>
      <ShowEmotes />
    </main>
  );
}

function ShowEmotes() {
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      <Button variant="flat">😀</Button>
      <Button variant="flat">😊</Button>
      <Button variant="flat">😶</Button>
      <Button variant="flat">😥</Button>
      <Button variant="flat">😮</Button>
    </div>
  );
}

export default Emote;
