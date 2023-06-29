"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function SearchBox({ className }: { className?: string }) {
    const router=useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-center gap-x-3"
      >
        <Input type="text" className="max-w-sm" placeholder="Search" />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}
