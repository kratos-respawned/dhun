import { TrendingSongs } from "./sections/trending-songs";
import { TopCharts } from "./sections/top-charts";
import { Albums } from "./sections/albums";
import { Playlists } from "./sections/playlist";

import { Header } from "@/components/header";
export const dynamic="force-static"
export default async function Home() {
  return (
    
    <main className="container col-span-5 lg:col-span-9 max-h-screen overflow-y-scroll px-4 lg:px-0 lg:pl-5   ">
      <Header/>
      
      <TrendingSongs />
      <TopCharts />
      <Albums />
      <Playlists/>
    </main>
    
  );
}
