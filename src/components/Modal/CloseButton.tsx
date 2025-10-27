'use client'
import { useRouter } from 'next/navigation'

export default function CloseButton() {
  const router = useRouter()

  return (
    <span
      onClick={() => router.back()}
      className="text-gray-900 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer"
    >
      Close
    </span>
  )
}
