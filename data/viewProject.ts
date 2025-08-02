export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tools: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 'space-landing',
    title: 'Space Landing page',
    category: 'Branding',
    image: '/assets/images/casestudy/AL Salam.png',
    tools: ['sketch-icon.svg', 'figma-icon.svg'],
    description: 'This is the Space Landing Page project...',
  },
  {
    id: 'crypto-game',
    title: 'Crypto Game - UX Interface',
    category: 'Branding',
    image: '/assets/images/casestudy/BevArabia.png',
    tools: ['sketch-icon.svg', 'figma-icon.svg'],
    description: 'This is the Crypto Game project...',
  },
  {
    id: 'product-space',
    title: 'Space Landing page',
    category: 'Product Design',
    image: '/assets/images/casestudy/FIdility United.png',
    tools: ['sketch-icon.svg', 'figma-icon.svg'],
    description: 'Product Design version of Space Landing...',
  },
  {
    id: 'product-space',
    title: 'Space Landing page',
    category: 'Product Design',
    image: '/assets/images/casestudy/KFH.png',
    tools: ['sketch-icon.svg', 'figma-icon.svg'],
    description: 'Product Design version of Space Landing...',
  },
  {
    id: 'product-space',
    title: 'Space Landing page',
    category: 'Product Design',
    image: '/assets/images/casestudy/Zain.png',
    tools: ['sketch-icon.svg', 'figma-icon.svg'],
    description: 'Product Design version of Space Landing...',
  },
];

export default projects;
