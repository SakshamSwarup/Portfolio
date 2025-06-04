import React from 'react'
import { projects } from '@/app/data/projectdata'
import { PinContainer } from './3d-pin'
import Image from 'next/image'

function RecentProject() {
  return (
    <div className="flex max-h-full max-w-full flex-col items-center">
      <h1 className="text-3xl font-bold md:text-5xl lg:text-5xl">
        A small section of {''}
      </h1>
      <span className="text-2xl font-bold text-gray-400 lg:text-5xl">
        my Projects
      </span>
      <div className="flex flex-wrap items-center justify-center gap-16 p-4">
        {projects.map(({ id, title, description, img, IconList, link }) => (
          <div
            key={id}
            className="flex h-[25rem] w-[80vw] items-center justify-center sm:w-96 lg:min-h-[32.5rem]"
          >
            <PinContainer title={title} href={link}>
              <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2">
                <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-slate-100">
                  {title}
                </h3>
                <div className="!m-0 !p-0 text-base font-normal">
                  {img && (
                    <Image src={img} alt={title} width={500} height={500} />
                  )}
                </div>
                <span className="!m-0 !p-0 text-sm">{description}</span>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProject
