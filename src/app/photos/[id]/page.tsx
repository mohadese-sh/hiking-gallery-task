import PhotoDetail from "@/components/PhotoDetail";
import { getPhoto } from "@/libraries/fetchPhotos";
import { IPhoto } from "@/types.ts/IPhoto";
import { notFound } from "next/navigation";

export type PhotoPageProps = Readonly<{
  params: { id: string };
}>;

export default async function PhotoPage({ params }: PhotoPageProps) {
  const photoDetail: IPhoto = await getPhoto({ id: params.id });
  if (!photoDetail) {
    notFound();
  }
  return (
    <div className="flex flex-col items-center justify-center text-center p-1">
      <PhotoDetail photoDetail={photoDetail} />
    </div>
  );
}
