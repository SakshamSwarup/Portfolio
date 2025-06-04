export interface client {
  id: number
  name: string
  img: string
  testimonial: string
  description: string
}

export const client: client[] = [
  {
    id: 1,
    name: 'Client',
    testimonial: 'Testimonial',
    img: './profile.svg',
    description: '',
  },
]
