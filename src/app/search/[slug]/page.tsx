import { Albums } from "./sections/albums";
import { Artist } from "./sections/artists";
import { Playlists } from "./sections/playlist";
import { Songs } from "./sections/songs";
import { TopQuery } from "./sections/top-results";

export default async function searchResults({
  params,
}: {
  params: { slug: string };
}) {
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
