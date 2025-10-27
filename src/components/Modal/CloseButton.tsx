"use client";
import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();

  return (
    <span
      onClick={() => router.back()}
      className="text-gray-500 hover:text-gray-800 cursor-pointer"
    >
      Close
    </span>
  );
}
