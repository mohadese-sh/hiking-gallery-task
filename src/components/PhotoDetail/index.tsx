import Image from "next/image";
import { TPhotoDetailProps } from "./types";

const PhotoDetail = ({ photoDetail }: TPhotoDetailProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center space-y-4">
      <h2 className="text-lg font-semibold text-blue-950 dark:text-gray-50">
        {photoDetail.description || "hiking image"}
      </h2>
      <p className="text-sm text-blue-950 dark:text-gray-50">
        By {photoDetail.user.name}
      </p>
      <Image
        src={photoDetail.urls.full}
        alt={photoDetail.alt_description || ""}
        className="rounded-2xl object-contain shadow-md h-fit w-fit"
        width={400}
        height={300}
        priority
        style={{ objectFit: "contain" }}
        placeholder="blur"
        blurDataURL={photoDetail.urls.thumb}
      />
    </div>
  );
};

export default PhotoDetail;
