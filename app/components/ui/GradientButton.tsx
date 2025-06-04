import React from 'react'

export function GradientButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="text-md pointer-events-auto relative box-border flex cursor-pointer items-center justify-center rounded-[0.75rem] border-[0.6px] px-10 py-5 font-bold text-white not-italic antialiased shadow-[inset_0px_6px_8px_0px_#fafafa40,inset_0px_-6px_8px_0px_#fafafa40] transition-all duration-200 ease-in-out [background:linear-gradient(0deg,#151515,#151515),linear-gradient(180deg,hsla(0,0%,8%,0)_66.3%,hsla(0,0%,100%,.5)),linear-gradient(183.22deg,hsla(0,0%,100%,.5)_2.62%,hsla(0,0%,8%,0)_52.03%)] hover:scale-[1.02] hover:shadow-[0_0_12px_#ffffff30] active:scale-95 active:shadow-inner">
      {children}
    </button>
  )
}
