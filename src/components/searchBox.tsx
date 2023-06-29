"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export function SearchBox({ className }: { className?: string }) {
    const router=useRouter();
    const searchRef=useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search?q="+searchRef.current?.value);
  };
  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center justify-center gap-x-3"
      >
        <Input ref={searchRef}  type="text" className="max-w-sm" placeholder="Search" />
        <Button type="submit">Search</Button>
      </form>
    </div>
  );
}
