import { VelocityScroll } from './VelocityScroll'

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative m-10 flex w-full flex-col items-center justify-center overflow-hidden p-2 lg:mt-24 lg:mb-10">
      <VelocityScroll numRows={1}>Feel Free to Reach Out</VelocityScroll>
      <VelocityScroll defaultVelocity={5} numRows={1}>
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          I am always open to new opportunities
        </span>
      </VelocityScroll>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
