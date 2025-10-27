import { IPhoto } from '@/types.ts/IPhoto'

const BASE_URL = 'https://api.unsplash.com'

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
  })

  if (!res.ok) {
    throw new Error(
      `Unsplash listing API error: ${res.status} ${res.statusText}`
    )
  }

  const data: T = await res.json()
  return data
}

export async function getPhotos({
  query,
  perPage = 12,
}: {
  query: string
  perPage: number
}) {
  return fetchFromUnsplash<{ results: IPhoto[] }>(
    `/search/photos?query=${query}&per_page=${perPage}`,
    {
      next: { revalidate: 0 },
    }
  ).then((data) => data.results)
}

export async function getPhoto({ id }: { id: string }) {
  return fetchFromUnsplash<IPhoto>(`/photos/${id}`)
    .then((response) => response)
    .catch((error) => {
      throw new Error(
        `Unsplash listing API error: ${error.status} ${error.statusText}`
      )
    })
}
