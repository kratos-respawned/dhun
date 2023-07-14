import { AlbumPageCard } from "@/components/album-page-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { music } from "@/lib/music";
import { AlbumData } from "@/typings/albumdata";
import { Playlist } from "@/typings/playlist";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import { AlbumPlayBtn } from "./album-play-btn";

const getAlbumData = async (slug: string) => {
  const type = slug.split("-")[1];
  const id = slug.split("-")[0];
  if (type == "album") {
    const { data } = await music(`albums?id=${id}`);
    return data as AlbumData;
  } else 
  if (type == "artist") {
    const { data } = await music(`artists?id=${id}`);
    return data as AlbumData;
  } else 
  {
    const { data } = await music(`playlists?id=${id}`);
    return data as Playlist;
  }
};
export default async function Page({ params }: { params: { slug: string } }) {
  let album: AlbumData | Playlist;
  try {
    album = await getAlbumData(params.slug);
  } catch (error) {
    console.log(error);
    return <h2>Error</h2>;
  }
  if (album.data.songs.length === 0) return <h2>Invalid URL</h2>;
  const imageURL =
    album.data?.image[2]?.link ||
    album?.data?.image[1]?.link ||
    album?.data?.image[0]?.link ||
    "/playlist-placeholder.webp";
  return (
    <section className="px-4  pt-4 space-y-12 mt-6 lg:space-y-0 lg:grid grid-cols-2 gap-x-4 ">
      <section className="mx-auto lg:mx-0 max-w-md ">
        <div className="lg:sticky top-5">
          <div className="w-full overflow-hidden  rounded-lg">
            <AspectRatio ratio={1 / 1} className="bg-muted">
              <Image
                src={imageURL}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={album.data.name}
                className=" object-cover object-center  transition-transform hover:scale-105  "
              />
            </AspectRatio>
          </div>
          <h1 className="font-cal text-2xl  mt-4 ">
            <Balancer>{album.data.name.split("(")[0].replace("&#039;","'")}</Balancer>
          </h1>
          <div className="flex justify-between gap-x-2 items-center">
            <div>
              {/* @ts-ignore */}
              {album?.data?.primaryArtists ? (
                <p className="line-clamp-1">
                  by {(album as AlbumData).data.primaryArtists}
                </p>
              ) : (
                <p className="line-clamp-1">
                  by {(album as Playlist).data.username}
                </p>
              )}

              <p>
                {album.data.songCount}{" "}
                {album.data.songCount == "1" ? "Song" : "Songs"}
              </p>
            </div>
            <AlbumPlayBtn album={album.data.songs} />
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-cal text-2xl  my-4 ">
          <Balancer>All Songs</Balancer>
        </h2>
        <div className="flex flex-col gap-3 sm:gap-5 ">
          {album.data.songs.map((song) => (
            <AlbumPageCard key={song.id + song.name} {...song} />
          ))}
        </div>
      </section>
    </section>
  );
}
