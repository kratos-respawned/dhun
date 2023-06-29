import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function Search() {
    return(<>
    <h1 className="font-cal text-6xl">COMING SOON</h1>
    <Link href="/" className={buttonVariants({variant:"outline"})} >Home</Link>
    </>)
}