import Image from "next/image";
import { TPhotoDetailProps } from "./types";

const PhotoDetail = ({ photoDetail }: TPhotoDetailProps) => {
  return (
    <div className="h-[50vh] w-full">
      <Image
        src={photoDetail.urls.regular}
        alt={photoDetail.alt_description || ""}
        className="rounded-md object-contain w-full h-full"
        width={400}
        height={300}
        priority
      />
      <h2 className="text-lg mt-3 font-semibold">
        {photoDetail.alt_description || "Untitled"}
      </h2>
      <p className="text-sm text-gray-600 mt-1">By {photoDetail.user.name}</p>
    </div>
  );
};

export default PhotoDetail;
