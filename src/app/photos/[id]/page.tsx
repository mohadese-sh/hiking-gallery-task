import PhotoDetail from "@/components/PhotoDetail";
import { getPhoto } from "@/libraries/fetchPhotos";
import { IPhoto } from "@/types.ts/IPhoto";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PhotoPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: PhotoPageProps): Promise<Metadata> {
  const { id } = await params;
  const photo: IPhoto = await getPhoto({ id });

  if (!photo) {
    return {
      title: "Photo Not Found",
      description: "The requested photo could not be found.",
    };
  }

  return {
    title: photo.alt_description || "Untitled Photo",
    description: `Photo by ${photo.user.name} from Hiking Gallery. Explore stunning hiking photos.`,
    openGraph: {
      title: photo.alt_description || "Untitled Photo",
      description: `Photo by ${photo.user.name} from Hiking Gallery.`,
      type: "website",
      images: [
        {
          url: photo.urls.regular,
          width: photo.width,
          height: photo.height,
        },
      ],
    },
  };
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;

  const photoDetail: IPhoto = await getPhoto({ id });
  if (!photoDetail) {
    notFound();
  }
  return (
    <div className="flex flex-col items-center justify-center text-center p-1 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <PhotoDetail photoDetail={photoDetail} />
    </div>
  );
}
