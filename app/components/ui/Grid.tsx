'use client'
import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { GridItem } from '@/app/data/item'

export function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto max-w-7xl gap-3 lg:gap-10">
      {GridItem.map(
        ({ id, title, description, className, imageClassName, image }) => (
          <BentoGridItem
            id={id}
            title={title}
            description={description}
            className={className}
            key={id}
            imageClassName={imageClassName}
            image={image}
          />
        ),
      )}
    </BentoGrid>
  )
}
