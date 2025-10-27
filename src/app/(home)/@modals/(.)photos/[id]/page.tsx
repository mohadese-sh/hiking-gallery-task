import Modal from "@/components/Modal";
import PhotoDetail from "@/components/PhotoDetail";
import { photos } from "@/libraries/fetchPhotos";
import { IPhoto } from "@/types.ts/IPhoto";
import { notFound } from "next/navigation";

type TPhotoProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: TPhotoProps) {
  // const photo: IPhoto = await fetchPhotoDetail({ id: params.id });

  const photo: IPhoto = photos?.filter((photo) => photo?.id == params?.id)?.[0];

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

export default async function PhotoModal({ params }: TPhotoProps) {
  //   const photoDetail: IPhoto = await getPhoto({ id: params.id });
  const photoDetail: IPhoto = photos?.filter(
    (photo) => photo?.id == params?.id
  )?.[0];

  if (!photoDetail) return notFound();

  return (
    <Modal>
      <PhotoDetail photoDetail={photoDetail} />
    </Modal>
  );
}
