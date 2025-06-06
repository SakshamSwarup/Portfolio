'use client'

import React, { useState, useEffect, useId } from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export interface ContainerTextFlipProps {
  words?: string[]
  interval?: number
  className?: string
  textClassName?: string
  animationDuration?: number
}

export function ContainerTextFlip({
  words = [
    '🚀 FullStack Developer',
    '🤖 AI Enthusiast',
    '👨‍💻 Front-End Expert',
    '⚙️ Back-End Expert ',
    '🥷 Warrior',
    '🗺️ Explorer',
  ],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId()
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [width, setWidth] = useState(100)
  const textRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  // Update width for the current word
  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30
      setWidth(textWidth)
    }
  }

  // Mark as mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update width whenever the word changes
  useEffect(() => {
    if (mounted) {
      updateWidthForWord()
    }
  }, [currentWordIndex, mounted])

  // Cycle through words at the given interval
  useEffect(() => {
    if (!mounted) return
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [interval, words.length, mounted])

  if (!mounted) return null

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        'relative inline-block rounded-[0.5rem] pt-2 pb-3 text-center text-sm font-bold text-black md:text-2xl dark:text-white',
        '[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]',
        'shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]',
        'dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]',
        'dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]',
        className,
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: 'easeInOut',
        }}
        className={cn('inline-block', textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
