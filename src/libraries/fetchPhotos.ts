import { IPhoto } from "@/types.ts/IPhoto";

const BASE_URL = "https://api.unsplash.com";

async function fetchFromUnsplash<T>(
  endpoint: string,
  options: RequestInit = {}
) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Unsplash API error: ${res.status} ${res.statusText}`);
  }

  const data: T = await res.json();
  return data;
}

export async function fetchPhotos({
  query,
  perPage = 12,
}: {
  query: string;
  perPage: number;
}) {
  return fetchFromUnsplash<{ results: IPhoto[] }>(
    `/search/photos?query=${query}&per_page=${perPage}`,
    {
      next: { revalidate: 0 },
    }
  ).then((data) => data.results);
}

export async function fetchPhotoDetail({ id }: { id: string }) {
  return fetchFromUnsplash<IPhoto>(`/photos/${id}`);
}

export const photos: IPhoto[] = [
  {
    id: "1223",
    alt_description: "lskjelksej",
    width: 0,
    height: 0,
    urls: {
      small: "/1.png",
      full: "/1.png",
      regular: "/1.png",
      thumb: "/1.png",
    },
    user: {
      name: "hasan",
      portfolio_url: "@gmail",
    },
  },
];
