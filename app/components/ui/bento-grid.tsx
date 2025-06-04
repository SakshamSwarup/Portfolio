import { cn } from '@/lib/utils'
import Image from 'next/image'
import { GlobeDemo } from './globemotion'
import { BackgroundGradientAnimation } from './background-gradient-animation'
import { Button } from './moving-border'
import { EmailCopyButton } from './Emailbtn'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 lg:grid-cols-4',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  titleClassName,
  imageClassName,
  descriptionClassName,
  image,
  id,
}: {
  className?: string
  title?: string
  description?: string
  id?: number
  key?: number
  descriptionClassName?: string
  titleClassName?: string
  imageClassName?: string
  spareImage?: string
  image?: string
}) => (
  <div
    className={cn(
      'group/bento sm:min-h-[20rem w-fill relative row-span-1 flex h-full min-h-[20rem] cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-md transition-all duration-200 hover:shadow-lg sm:min-h-[18rem] dark:border-neutral-800 dark:bg-neutral-900',
      className,
    )}
  >
    {image && (
      <div className={cn('', imageClassName)}>
        <Image src={image} alt={title} fill={true} className={imageClassName} />
      </div>
    )}

    {id === 4 && (
      <div className="flex h-full w-full flex-col items-start justify-between">
        <div className="relative w-full">
          <Image
            src={image ?? '/b5.svg'}
            alt="Bento Grid Image"
            className="object-cover"
            fill
          />
        </div>
      </div>
    )}

    {id === 5 && (
      <div className="flex h-full w-full items-center">
        <div>
          <Image
            src={image ?? '/b4.svg'}
            alt="Bento Grid Image"
            className={imageClassName}
            fill={true}
            sizes="100%"
          />
        </div>
      </div>
    )}

    <div className="relative z-10 flex h-full w-full flex-col justify-end transition duration-200 group-hover/bento:translate-x-2">
      <div>
        {id === 2 && <GlobeDemo />}

        {id === 3 && (
          <>
            <div className="flex max-h-[15rem] flex-col items-end gap-2 opacity-50">
              <div className="flex gap-4">
                {/* First Column */}
                <div className="flex flex-col gap-2">
                  {['ReactJS', 'Next.js', 'TypeScript', 'GraphQL', 'GCP'].map(
                    (item) => (
                      <span
                        key={item}
                        className="shadow-[inset_0px_6px_8px_0px_#fafafa40,inset_0px_-6px_8px_0px_#fafafa40][background:linear-gradient(0deg,#151515,#151515),linear-gradient(180deg,hsla(0,0%,8%,0)_66.3%,hsla(0,0%,100%,.5)),linear-gradient(183.22deg,hsla(0,0%,100%,.5)_2.62%,hsla(0,0%,8%,0)_52.03%)] antialiasedtext-md pointer-events-auto relative mb-1.5 box-border flex h-20 w-40 cursor-pointer items-center justify-center rounded-2xl border-[0.6px] px-10 py-5 font-bold text-white not-italic antialiased shadow-[inset_0px_6px_8px_0px_#fafafa40,inset_0px_-6px_8px_0px_#fafafa40] transition-all duration-200 ease-in-out [background:linear-gradient(0deg,#151515,#151515),linear-gradient(180deg,hsla(0,0%,8%,0)_66.3%,hsla(0,0%,100%,.5)),linear-gradient(183.22deg,hsla(0,0%,100%,.5)_2.62%,hsla(0,0%,8%,0)_52.03%)] hover:scale-[1.02] hover:shadow-[0_0_12px_#ffffff30] active:scale-95 active:shadow-inner"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>

                {/* Second Column */}
                <div className="flex flex-col gap-2">
                  {[
                    'MongoDB',
                    'Express.js',
                    'Node.js',
                    'TailwindCSS',
                    'Sentry',
                  ].map((item) => (
                    <span
                      key={item}
                      className="shadow-[inset_0px_6px_8px_0px_#fafafa40,inset_0px_-6px_8px_0px_#fafafa40][background:linear-gradient(0deg,#151515,#151515),linear-gradient(180deg,hsla(0,0%,8%,0)_66.3%,hsla(0,0%,100%,.5)),linear-gradient(183.22deg,hsla(0,0%,100%,.5)_2.62%,hsla(0,0%,8%,0)_52.03%)] antialiasedtext-md pointer-events-auto relative m-1.5 mb-1.5 box-border flex h-20 w-40 cursor-pointer items-center justify-center rounded-2xl border-[0.6px] px-10 py-5 font-bold text-white not-italic antialiased shadow-[inset_0px_6px_8px_0px_#fafafa40,inset_0px_-6px_8px_0px_#fafafa40] transition-all duration-200 ease-in-out [background:linear-gradient(0deg,#151515,#151515),linear-gradient(180deg,hsla(0,0%,8%,0)_66.3%,hsla(0,0%,100%,.5)),linear-gradient(183.22deg,hsla(0,0%,100%,.5)_2.62%,hsla(0,0%,8%,0)_52.03%)] hover:scale-[1.02] hover:shadow-[0_0_12px_#ffffff30] active:scale-95 active:shadow-inner"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="relative z-10 text-4xl font-bold text-neutral-600 dark:text-neutral-200">
          <span className={titleClassName}>{title}</span>
        </div>
        <div className="relative z-10 font-sans text-sm font-normal text-neutral-600 drop-shadow-md dark:text-neutral-300">
          <span className={descriptionClassName}>{description}</span>
        </div>
      </div>

      {id === 6 && (
        <BackgroundGradientAnimation containerClassName="object-fill rounded-2xl">
          <div className="mt-20 flex lg:mt-20">
            <div className="flex w-full flex-col items-center gap-4">
              <h2 className="lg:text-md w-3/4 text-center text-xl font-bold tracking-tight text-neutral-600 dark:text-neutral-200">
                Want to start a project together?
              </h2>
              <EmailCopyButton />
            </div>
          </div>
        </BackgroundGradientAnimation>
      )}
    </div>
  </div>
)
