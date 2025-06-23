'use client'
import React from 'react'
import { projects } from '@/app/data/projectdata'
import { PinContainer } from './3d-pin'

function RecentProject() {
  return (
    <div className="flex max-h-full max-w-full flex-col items-center">
      <h1 className="text-3xl font-bold md:text-5xl lg:text-5xl">
        A small section of {''}
      </h1>
      <span className="text-2xl font-bold text-gray-400 lg:text-5xl">
        my Projects
      </span>
      <div className="flex flex-wrap items-center justify-center gap-16">
        {projects.map(({ id, title, description, img, link }) => (
          <div
            key={id}
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
          >
            <PinContainer title={title} href={link}>
              <div className="flex h-[20rem] w-[20rem] flex-col py-2.5 text-center text-balance sm:basis-1/2">
                <h3 className="max-w-xs">
                  <span className="bg-gradient-to-r from-emerald-500 to-lime-600 bg-clip-text text-center text-2xl font-bold tracking-wide text-transparent sm:max-w-md md:text-lg lg:max-w-lg lg:text-2xl">
                    {title}
                  </span>
                </h3>
                <div className="flex justify-center py-4 text-base font-normal">
                  {img && (
                    <img src={img} alt={title} width={200} height={200} />
                  )}
                </div>
                <span className="text-sm">{description}</span>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProject
