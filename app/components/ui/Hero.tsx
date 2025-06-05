'use client'

import { cn } from '@/lib/utils'
import { SpotlightNew } from './spotlight-new'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { GradientButton } from './GradientButton'
import { ContainerTextFlip } from './container-text-flip'

export default function Hero() {
  return (
    <>
      <div className="pt-36 pb-20">
        <div>
          <div className="relative flex h-[42rem] w-full items-center justify-center dark:bg-black">
            <SpotlightNew />

            <div
              className={cn(
                'absolute inset-0',
                '[background-size:75px_75px] opacity-80',
                '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_2px)]',
                'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
              )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <div className="relative -top-20 z-10 flex flex-col items-center justify-center text-center">
              {/* <TagDemo /> */}
              <ContainerTextFlip />
              <h2 className="text-5xl font-bold tracking-widest text-black sm:text-6xl dark:text-white">
                Hello, I am Saksham Swarup
              </h2>
              <p className="mt-4 max-w-2xl justify-center text-lg tracking-tighter text-gray-700 dark:text-gray-300">
                A passionate software developer with a love for creating
                innovative solutions and a keen interest in web development.
              </p>
              <div className="mt-5 flex gap-2.5">
                <Link href="https://www.linkedin.com/in/sakshamswarup/">
                  <Linkedin className="transition delay-80 duration-80 ease-in-out hover:scale-150" />
                </Link>
                <Link href="https://github.com/sakshamswarup">
                  <Github className="transition delay-80 duration-80 ease-in-out hover:scale-150" />
                </Link>
                <Link href="https://www.instagram.com/sakshamswarup/">
                  <Instagram className="transition delay-80 duration-80 ease-in-out hover:scale-150" />
                </Link>
              </div>
              <div className="mt-5 flex items-center justify-center space-x-4">
                <GradientButton>Let&apos;s Connect</GradientButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
