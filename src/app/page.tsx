import { TrendingSongs } from "./sections/trending-songs";
import { TopCharts } from "./sections/top-charts";
import { Albums } from "./sections/albums";
import { Playlists } from "./sections/playlist";
export const dynamic="force-static"
export default async function Home() {
  return (
    <>
      <TrendingSongs />
      <TopCharts />
      <Albums />
      <Playlists/>
      </>    
  );
}
