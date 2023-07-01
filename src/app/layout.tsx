import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { SearchBox } from "@/components/searchBox";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Player } from "@/components/Player";
import { PlayerWrapper } from "@/components/player-wrapper";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "  bg-background  font-sans antialiased min-height-screen  ",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="  md:grid grid-cols-7 lg:grid-cols-11 overflow-hidden min-height-screen max-height-screen ">
            <Sidebar />
            <main className=" col-span-5 lg:col-span-9 max-height-screen overflow-y-scroll px-4  pb-[100px]  ">
              <Header />
              <SearchBox className="sm:hidden flex-1 w-full mt-4 " />
              {children}
            </main>
          </div>
          <PlayerWrapper/>
          <TailwindIndicator/>
        </ThemeProvider>
      </body>
    </html>
  );
}
