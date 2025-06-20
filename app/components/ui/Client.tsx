'use client'
import React from 'react'
import { client } from '@/app/data/client'

function Client() {
  return (
    <div className="flex flex-col items-center justify-center text-7xl">
      {client.map(({ id, name, img, testimonial }) => (
        <div
          key={id}
          className="flex flex-row items-center justify-center overflow-hidden border border-black p-4"
        >
          <div className="flex h-full w-full flex-col items-center px-2 py-2">
            <div className="h-96 w-3xl bg-slate-500">
              <h1>{name}</h1>
              {img && <img src={img} alt={name} />}
              <p>{testimonial}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Client
