import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { SearchBox } from "@/components/searchBox";
import { Provider } from "@/components/providers/theme";
import { MainLayout } from "@/components/providers/layout";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata:Metadata = {
  title: "Dhun",
  description: "A younicorn project built with NextJS ",
  manifest: "/manifest.json",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
  },
  authors:[
    {
      name:"Gaurav",
      url:"https://github.com/kratos-respawned"
    }
  ]
  
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
        <Provider>
          <div className="  md:grid grid-cols-7 lg:grid-cols-11 overflow-hidden min-height-screen max-height-screen ">
            <Sidebar />
            <MainLayout>
              <div className=" z-50 pb-5 bg-background sm:bg-transparent standalone:fixed top-0 left-0 right-0 px-5  sm:static ">
                <Header />
                <SearchBox className="sm:hidden flex-1 w-full mt-4 " />
              </div>
              <div className="grow standalone:mt-28 sm:mt-0 ">{children}</div>
            </MainLayout>
          </div>
        </Provider>
      </body>
    </html>
  );
}

// import { Inter as FontSans } from "next/font/google";
// import localFont from "next/font/local";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import type { Metadata } from "next";
// import { Sidebar } from "@/components/sidebar";
// import { Header } from "@/components/header";
// import { SearchBox } from "@/components/searchBox";
// import { Provider } from "@/components/providers/theme";
// import { MainLayout } from "@/components/providers/layout";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// // Font files can be colocated inside of `pages`
// const fontHeading = localFont({
//   src: "../../assets/fonts/CalSans-SemiBold.woff2",
//   variable: "--font-heading",
// });

// export const metadata:Metadata = {
//   title: "Dhun",
//   description: "A younicorn project built with NextJS ",
//   manifest: "/manifest.json",
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     userScalable: false,
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={cn(
//           "  bg-background  font-sans antialiased min-height-screen  ",
//           fontSans.variable,
//           fontHeading.variable
//         )}
//       >
//         <Provider>
//           <div className="  md:grid grid-cols-7 lg:grid-cols-11 overflow-hidden min-height-screen max-height-screen ">
//             <Sidebar />
//             <MainLayout>
//               <div>
//                 <Header />
//                 <SearchBox className="sm:hidden flex-1 w-full mt-4 " />
//               </div>
//               <div className="grow ">{children}</div>
//             </MainLayout>
//           </div>
//         </Provider>
//       </body>
//     </html>
//   );
// }
