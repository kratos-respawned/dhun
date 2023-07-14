import { AlbumPageCard } from "@/components/album-page-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { music } from "@/lib/music";
import { AlbumData } from "@/typings/albumdata";
import { Playlist } from "@/typings/playlist";
import Image from "next/image";
import { Balancer } from "react-wrap-balancer";
import { AlbumPlayBtn } from "./album-play-btn";
import { ArtistDetails } from "@/typings/artist-details";
import { ArtistSongs, ArtistSongsRoot } from "@/typings/artist-songs";
import { ArtistPlaylist } from "@/typings/artist-playlist";
import axios from "axios";

const getArtistData = async (slug: string) => {
  const id = slug.split("/")[0];
  try {
    // FIXME: replace this any with unknown type
    // TODO: add playlists
    const data = await axios.all([
      music(`artists?id=${id}`),
      // music(`artists?id=${id}/albums`),
      music(`artists/${id}/songs?page=1`),
      music(`artists/${id}/songs?page=2`),
      music(`artists/${id}/songs?page=3`),
    ]);

    data[1].data.data.results = data[1].data.data.results.concat(
      data[2].data.data.results
    );
    data[1].data.data.results = data[1].data.data.results.concat(
      data[3].data.data.results
    );
    return {
      artistDetail: data[0].data.data,
      // artistPlaylist: data[1].data.data,
      artistSongs: data[1].data.data,
    };
  } catch (e) {
    return null;
  }
};
export default async function Page({ params }: { params: { slug: string } }) {
  let album: {
    artistDetail: ArtistDetails;
    // artistPlaylist: ArtistPlaylist;
    artistSongs: ArtistSongs;
  } | null;
  try {
    album = await getArtistData(params.slug);
  } catch (error) {
    console.log(error);
    return <h2>Error</h2>;
  }
  if (album === null) return <h2>{JSON.stringify(album)}</h2>;

  const imageURL =
    album?.artistDetail.image[2]?.link ||
    album?.artistDetail.image[1]?.link ||
    album?.artistDetail.image[0]?.link ||
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
                alt={album.artistDetail.name}
                className=" object-cover object-center  transition-transform hover:scale-105  "
              />
            </AspectRatio>
          </div>
          <h1 className="font-cal text-2xl  mt-4 ">
            <Balancer>
              {album.artistDetail.name.split("(")[0].replace("&#039;", "'")}
            </Balancer>
          </h1>
          <div className="flex justify-between gap-x-2 items-center">
            <div>
              <p className="line-clamp-1 text-white">
                {album.artistDetail.isVerified
                  ? "Verified Account"
                  : "Non-Verified Account"}
              </p>

              <p>{album.artistSongs.results.length} Songs </p>
            </div>
            <AlbumPlayBtn album={album.artistSongs.results} />
          </div>
        </div>
      </section>
      <section>
        {album.artistSongs.results?.length > 0 && (
          <>
            <h2 className="font-cal text-2xl  my-4 ">
              <Balancer>Popular Songs</Balancer>
            </h2>

            <div className="flex flex-col gap-3 sm:gap-5 ">
              {album.artistSongs.results?.map((song) => (
                <AlbumPageCard
                  key={song.id + song.name}
                  duration={song.duration}
                  id={song.id}
                  image={song.image}
                  name={song.name}
                  primaryArtists={song.primaryArtists}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </section>
  );
}
