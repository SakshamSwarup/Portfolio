'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { BorderBeam } from './borderbeam'
const EMAIL = 'sakshamswarup2430@gmail.com' // Replace with your email

export function EmailCopyButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative inline-flex flex-col items-center">
      <div className="relative inline-flex flex-col items-center">
        {copied && (
          <img
            src="./confetti.gif"
            alt="confetti"
            width={100}
            height={100}
            style={{ position: 'absolute', top: -15, right: 50 }}
          />
        )}
        <button
          onClick={handleCopy}
          className="relative z-10 rounded-2xl border-2 bg-zinc-900/45 px-6 py-3 text-white shadow-md transition-all ease-in-out active:scale-95"
        >
          {copied ? (
            <span className="flex items-center gap-2">
              <Check size={18} />
              Email Copied!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Copy size={18} /> Copy Email
            </span>
          )}
          <BorderBeam
            duration={4}
            size={60}
            className="from-transparent via-purple-500 to-transparent"
          />
          <BorderBeam
            duration={4}
            size={60}
            reverse
            className="from-transparent via-pink-500 to-transparent"
          />
        </button>
      </div>
    </div>
  )
}
