import artManagemnt from '../assets/img/art-management.png'
import lafang from '../assets/img/lafang.png'
import onlineVoting from '../assets/img/online-voting.png'
import comingSoonBanner from '../assets/img/coming-soon-banner.png'
import vetHighlightImg from '../assets/img/veterinary_system/highlight.png'

const veterinary_systemImages = require.context('../assets/img/veterinary_system', false, /\.(png|jpe?g|svg)$/)
const veterinary_systemList = veterinary_systemImages.keys().map(veterinary_systemImages)

const projectData = [
  {
    id: 23,
    title: "Healthy Paw's",
    subtitle: 'Veterinary Clinic System',
    description:
      'A full-stack web application built to streamline operations for a mid-sized veterinary practice — appointment scheduling, patient records, treatment tracking, and billing.',
    github: null,
    features: [
      'Login',
      'Register',
      'Booking',
      'Email',
      'Doctor Management',
      'Client Management',
      'Invoice Management',
      'Pets Management',
      'Service Management'
    ],
    tools: ['PHP', 'Vue.js', 'Bootstrap', 'Axios', 'jQuery', 'HTML/CSS/JS', 'MySQL', 'XAMPP'],
    gallery: [...veterinary_systemList],
    videoUrl: 'https://www.youtube.com/embed/Hfm94aHAbYQ?si=6Z7UHCJZU37PpSvt',
    highLight: vetHighlightImg
  },
  {
    id: 1,
    title: 'Living Art',
    subtitle: 'Art Management System',
    description:
      'Living Art is a management system for online art galleries that allows buyers to purchase paintings, scriptures, and other artwork online using PHP.',
    github: 'https://github.com/casibanryan/Living-Art',
    features: ['Customer login', 'Admin login', 'Payment processing', 'CRUD inventory', 'Contact messaging'],
    tools: ['PHP', 'Bootstrap', 'Axios', 'jQuery', 'HTML/CSS/JS', 'MySQL', 'XAMPP'],
    gallery: [artManagemnt, comingSoonBanner, comingSoonBanner],
    videoUrl: 'https://www.youtube.com/embed/Hfm94aHAbYQ?si=6Z7UHCJZU37PpSvt'
  },
  {
    id: 2,
    title: 'C P C',
    subtitle: 'Online Voting System',
    description:
      'A secure voting platform built to help schools conduct elections online with separate student and admin flows, vote tracking, and results management.',
    github: 'https://github.com/casibanryan/voting-system',
    features: ['Student login', 'Admin login', 'Vote casting', 'Election management', 'Contact form'],
    tools: ['PHP', 'Bootstrap', 'Axios', 'jQuery', 'HTML/CSS/JS', 'MySQL', 'XAMPP'],
    gallery: [onlineVoting, comingSoonBanner, comingSoonBanner],
    videoUrl: 'https://www.youtube.com/embed/Hfm94aHAbYQ?si=6Z7UHCJZU37PpSvt'
  },
  {
    id: 3,
    title: 'Lafang',
    subtitle: 'Restaurant Online Reservation',
    description:
      'Lafang helps restaurant staff manage reservations and guest details in one place, improving responsiveness and keeping reservation data centralized.',
    github: 'https://github.com/casibanryan/voting-system',
    features: [
      'Reservation request',
      'Admin dashboard',
      'Automated email notifications',
      'CRUD bookings',
      'Customer contact'
    ],
    tools: ['PHP', 'Bootstrap', 'Axios', 'jQuery', 'HTML/CSS/JS', 'MySQL', 'XAMPP'],
    gallery: [lafang, comingSoonBanner, comingSoonBanner],
    videoUrl: 'https://www.youtube.com/embed/Hfm94aHAbYQ?si=6Z7UHCJZU37PpSvt'
  }
]

export default projectData
