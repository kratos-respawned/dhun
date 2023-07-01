import { Suspense } from "react"
import { AlbumFallback } from "./fallback"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <Suspense fallback={<AlbumFallback/>}>
        {children}
        </Suspense>
  }