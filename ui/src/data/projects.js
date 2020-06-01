import flashcards_icon from '../assets/cards.jpg';
import hello from '../assets/helloworld.png'

const FLASHCARDS = {
    id: 1,
    title: 'Flashcards',
    desc: 'A useful helper for my chinese learning journey',
    img: flashcards_icon,
    link: '/flashcards'
}

const TEST = {
    id : 2,
    title: 'Hello',
    desc: 'A dramatic greeting',
    img: hello,
    link: "/helloworld",
}

const PROJECTS = [
    FLASHCARDS,
    TEST
]

export default PROJECTS;