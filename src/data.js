// Named export MUST BE EXACT
import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2024',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6 days',
    cost: 'from $2100',
  },
  {
    id: 2,
    img: tour2,
    date: 'october 1th, 2024',
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '8 days',
    cost: 'from $5000',
  },
  {
    id: 3,
    img: tour3,
    date: 'september 15th, 2024',
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'hong kong',
    duration: '6 days',
    cost: 'from $2100',
  },
  {
    id: 4,
    img: tour4,
    date: 'august 26th, 2024',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '6 days',
    cost: 'from $2100',
  },
  {
    id: 5,
    img: tour5,
    date: 'august 26th, 2024',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '6 days',
    cost: 'from $2100',
  },
  {
    id: 6,
    img: tour6,
    date: 'august 26th, 2024',
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '6 days',
    cost: 'from $2100',
  },
]
