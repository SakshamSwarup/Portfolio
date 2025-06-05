'use client'
import { items } from '@/app/data/myskill'
import { DraggableCardBody, DraggableCardContainer } from './draggable-card'

export function DraggableSkill() {
  return (
    <>
      <div className="h-xl flex w-full justify-center">
        <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-bold whitespace-pre-wrap text-transparent uppercase lg:text-9xl dark:from-white dark:to-slate-900/10">
          My{' '}
          <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-bold whitespace-pre-wrap text-transparent uppercase lg:text-9xl dark:from-white dark:to-slate-900/10">
            Skills
          </span>
        </span>
      </div>
      <div className="h-xl flex w-3xl justify-center">
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
          <p className="top-1/2 max-w-sm -translate-y-20 text-center font-sans text-4xl font-bold text-neutral-300 lg:w-full lg:text-7xl">
            Currently Learning{' '}
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {' '}
              AI
            </span>{' '}
            &{' '}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {' '}
              ML
            </span>
          </p>
          {items.map(({ id, image, title, className }) => (
            <DraggableCardBody key={id} className={className}>
              <img
                src={image}
                alt={title}
                className="pointer-events-none relative z-10 h-50 w-80 object-cover"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                {title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </>
  )
}
