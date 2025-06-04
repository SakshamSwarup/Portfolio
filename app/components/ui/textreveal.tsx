'use client'

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion'
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from 'react'

import { cn } from '@/lib/utils'

export interface TextRevealProps extends ComponentPropsWithoutRef<'div'> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null)

  // Get raw scroll progress
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // 🪄 Add spring to slow/smooth the scroll progress
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80, // lower = slower reaction
    damping: 25, // higher = less bounce
  })

  // Ensure children is a string
  if (typeof children !== 'string') {
    throw new Error('TextReveal: children must be a string')
  }

  const words = children.split(' ')

  return (
    <div ref={targetRef} className={cn('relative z-0 h-[180vh]', className)}>
      <div className="sticky top-10 mt-[20rem] flex h-[40%] max-w-4xl items-center bg-transparent px-[1rem] py-[4rem]">
        <span className="flex flex-wrap p-5 text-2xl font-bold text-black/20 md:p-7 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl dark:text-white/20">
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={smoothScroll} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  )
}
