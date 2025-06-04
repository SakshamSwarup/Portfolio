import React from 'react'

function TagDemo() {
  return (
    <div className="inline-block rounded-full bg-gradient-to-r from-orange-300 via-red-500 to-yellow-500 px-0.25 py-0.25 shadow-lg">
      <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-2 py-1">
        <div className="flex items-center gap-2 rounded-full bg-zinc-900">
          {/* Icon */}
          <span className="text-sm">🚀 </span>

          {/* Text */}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-sm font-bold text-transparent uppercase">
            Full Stack & Ai Developer
          </span>
        </div>
      </div>
    </div>
  )
}

export default TagDemo
