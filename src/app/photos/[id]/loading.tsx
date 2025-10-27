import React from 'react'

export default function loading() {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-90 flex items-center justify-center z-50">
      <span className="text-white text-xl font-semibold animate-pulse">
        Loading...
      </span>
    </div>
  )
}
