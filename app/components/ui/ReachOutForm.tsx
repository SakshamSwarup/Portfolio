'use client'

import { useState } from 'react'
import { Label } from './label'
import { Input } from './input'
import { ToastContainer, toast } from 'react-toastify'
import { Instagram, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

function ReachOutForm() {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      })

      const result = await response.json()

      if (result.success) {
        toast.success('Message sent successfully')
        setformdata({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      toast.error('Something went wrong, try again')
      console.log(error)
    }
  }

  return (
    <div id="contact" className="flex w-full flex-col lg:flex-row">
      <ToastContainer />
      {/* LEFT SECTION - Lets Connect */}
      <div className="justify-cente flex flex-1 items-center text-white">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold lg:ml-32 lg:text-5xl">
            Let&apos;s Connect
          </h2>
          <div className="mt-5 mb-4 flex items-center gap-2.5 text-3xl font-bold lg:ml-32 lg:text-5xl">
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
        </div>
      </div>

      {/* RIGHT SECTION - Form */}
      <div className="justify-cente flex flex-1 items-center">
        <div className="w-full max-w-md">
          <div className="mb-2 text-2xl font-bold">Reach me Out</div>
          <p className="mb-6 text-sm text-zinc-400">
            I would love to hear from you
          </p>
          <form onSubmit={handlesubmit} className="space-y-4">
            <div>
              <Label htmlFor="firstname">Name</Label>
              <Input
                name="name"
                id="firstname"
                value={formdata.name}
                onChange={handlechange}
                placeholder="Tyler"
                type="text"
                required
              />
            </div>
            <div>
              <Label htmlFor="Email">Email</Label>
              <Input
                name="email"
                id="Email"
                value={formdata.email}
                onChange={handlechange}
                placeholder="tylerdurden@xyz.com"
                type="email"
                required
              />
            </div>
            <div>
              <Label htmlFor="Email">Phone</Label>
              <Input
                name="phone"
                id="Phone"
                value={formdata.phone}
                onChange={handlechange}
                placeholder="tylerdurden@xyz.com"
                type="number"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Input
                name="message"
                id="Message"
                value={formdata.message}
                onChange={handlechange}
                placeholder="Your message here"
                type="textarea"
                className="textarea text-md h-20"
                required
              />
            </div>

            <button
              type="submit"
              className="text-md w-full rounded-[0.5rem] bg-gradient-to-r from-cyan-500 to-blue-500 p-2 font-bold text-white uppercase hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReachOutForm
