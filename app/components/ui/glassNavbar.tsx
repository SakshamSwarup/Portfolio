import Link from 'next/link'
import React from 'react'

type Navtypes = {
  id: number
  name: string
  url: string
  className: string
}

const Navbardata: Navtypes[] = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    className: '',
  },
  {
    id: 2,
    name: 'About',
    url: '#about',
    className: '',
  },
  {
    id: 3,
    name: 'Projects',
    url: '#projects',
    className: '',
  },
  {
    id: 4,
    name: 'Contact',
    url: '#contact',
    className: '',
  },
  {
    id: 5,
    name: 'Resume',
    url: '/resume',
    className:
      ' rounded-[0.5rem] bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-0.5 text-white',
  },
]
function GlassNavbar() {
  return (
    <nav className="flex h-16 w-auto items-center justify-evenly backdrop-blur-3xl">
      <div className="border-white-300 flex space-x-4 rounded-[0.75rem] border-2 bg-zinc-800/60 p-5 px-8 font-semibold">
        {Navbardata.map(({ id, name, url, className }) => (
          <div key={id}>
            <Link href={url}>
              <p className={name === 'Resume' && className}>{name}</p>
            </Link>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default GlassNavbar
