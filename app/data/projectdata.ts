export interface Project {
  id: number
  title: string
  description: string
  img: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Ai Movie Recommender & Trending Movie App',
    description:
      'A full-stack application that uses AI to recommend movies based on user prompt and displays trending movies.',
    img: './movie.png',
    link: 'https://github.com/sakshamswarup',
  },
  {
    id: 2,
    title: 'Multi-Modal AI Chatbot',
    description:
      'A multi-modal AI chatbot that can process text and pdf to provide responses. Switches between llms based on input type.',
    img: './MultiGpt.png',
    link: 'https://github.com/sakshamswarup',
  },
  {
    id: 3,
    title: 'Ai Avatar Generator',
    description:
      'Personalised Ai avatar generator that uses AI to create avatars based on user input.',
    img: './avatar.png',
    link: 'https://github.com/sakshamswarup',
  },
  {
    id: 4,
    title: 'E-commerce Website',
    description:
      'A full-stack e-commerce website with user authentication, product management, and payment integration.',
    img: './p1.svg',
    link: 'https://github.com/sakshamswarup',
  },
]
