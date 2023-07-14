import Link from "next/link";
import { search } from "./fetcher";
import { Albums } from "./sections/albums";
import { Artist } from "./sections/artists";
import { Playlists } from "./sections/playlist";
import { Songs } from "./sections/songs";
import { TopQuery } from "./sections/top-results";
import { buttonVariants } from "@/components/ui/button";

export default async function searchResults({
  params,
}: {
  params: { slug: string };
}) {
  const data = await search(params.slug);
  if (
    data?.data.albums.results.length === 0 &&
    data?.data.artists.results.length === 0 &&
    data?.data.playlists.results.length === 0 &&
    data?.data.songs.results.length === 0 &&
    data?.data.topQuery.results.length === 0
  )
    return (
      <section className="h-full flex flex-col items-center justify-center gap-4">
        <h1 className="font-cal text-6xl text-center">No Results Found</h1>
        <Link href="/" className={buttonVariants({ className: "w-fit " })}>
          Go Back
        </Link>
      </section>
    );
  return (
    <>
      <TopQuery query={params.slug} />
      <Songs query={params.slug} />
      <Artist query={params.slug} />
      <Albums query={params.slug} />
      <Playlists query={params.slug} />
    </>
  );
}
