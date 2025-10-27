import Modal from '@/components/Modal'
import PhotoDetail from '@/components/PhotoDetail'
import { getPhoto } from '@/libraries/fetchPhotos'
import { IPhoto } from '@/types.ts/IPhoto'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type TPhotoProps = {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({
  params,
}: TPhotoProps): Promise<Metadata> {
  const { id } = await params
  const photo: IPhoto = await getPhoto({ id })

  if (!photo) {
    return {
      title: 'Photo Not Found',
      description: 'The requested photo could not be found.',
    }
  }

  return {
    title: photo.alt_description || 'Untitled Photo',
    description: `Photo by ${photo.user.name} from Hiking Gallery. Explore stunning hiking photos.`,
    openGraph: {
      title: photo.alt_description || 'Untitled Photo',
      description: `Photo by ${photo.user.name} from Hiking Gallery.`,
      type: 'website',
      images: [
        {
          url: photo.urls.regular,
          width: photo.width,
          height: photo.height,
        },
      ],
    },
  }
}

export default async function PhotoModal({ params }: TPhotoProps) {
  const { id } = await params
  const photoDetail: IPhoto = await getPhoto({ id })

  if (!photoDetail) return notFound()

  return (
    <Modal>
      <PhotoDetail photoDetail={photoDetail} />
    </Modal>
  )
}
