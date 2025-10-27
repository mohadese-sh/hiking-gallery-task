"use client";

import { useRouter } from "next/navigation";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h2 className="text-2xl font-semibold text-red-600 mb-4">
        Oops! Something went wrong 😢
      </h2>
      <p className="text-gray-600 mb-6">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          Go home
        </button>
      </div>
    </div>
  );
}
