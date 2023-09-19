import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Divide } from "lucide-react";

export default function Home() {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      <Button size="default">Click me</Button>
    </div>
  );
}
