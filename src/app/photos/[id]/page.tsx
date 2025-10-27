import PhotoDetail from "@/components/PhotoDetail";
import { photos } from "@/libraries/fetchPhotos";
import { notFound } from "next/navigation";

export type PhotoPageProps = Readonly<{
  params: { id: string };
}>;

export default async function PhotoPage({ params }: PhotoPageProps) {
  const photoDetail = photos?.filter((photo) => photo?.id == params?.id)?.[0];
  if (!photoDetail) {
    notFound();
  }
  return (
    <div className="container">
      <PhotoDetail photoDetail={photoDetail} />
    </div>
  );
}
