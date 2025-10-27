import { fetchPhotos, photos } from "@/libraries/fetchPhotos";
import { IPhoto } from "@/types.ts/IPhoto";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Hiking Photos Gallery - Explore Nature's Beauty",
  description:
    "Discover a curated collection of breathtaking hiking photos, from mountains and forests to lakes and trails. Dive into the world of outdoor adventures.",
  openGraph: {
    title: "Hiking Photos Gallery",
    description:
      "Explore our curated collection of stunning hiking photos. Perfect for nature lovers and outdoor enthusiasts looking for inspiration.",
    type: "website",
  },
};
export default async function PhotosPage() {
  // const photos = await fetchPhotos({ query: "hiking", perPage: 12 });

  return (
    <main className="p-1 columns-2 md:columns-3 gap-0">
      {photos.map((photo: IPhoto) => (
        <Link
          key={photo.id}
          href={`/photos/${photo.id}`}
          scroll={false}
          className="m-1 break-inside-avoid rounded-lg block overflow-hidden"
        >
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description || "Hiking"}
            className="w-full object-cover rounded-lg"
            width={400}
            height={300}
            placeholder="blur"
            blurDataURL={photo.urls.thumb}
          />
        </Link>
      ))}
    </main>
  );
}
