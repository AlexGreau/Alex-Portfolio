import flashcards_icon from '../assets/cards.jpg';
import hello from '../assets/helloworld.png';
import headset from '../assets/headset.jpg';
import burger from '../assets/burger.png';

const TEST = {
    id : 1,
    title: 'Hello',
    desc: 'A dramatic greeting',
    img: hello,
    link: "/helloworld",
}

const MUSICMASTER = {
    id : 2,
    title : 'Music Master',
    desc: 'Listen to your favorite artists',
    img: headset,
    link: '/music-master'
}

const FLASHCARDS = {
    id: 3,
    title: 'Flashcards',
    desc: 'A useful helper for my chinese learning journey',
    img: flashcards_icon,
    link: '/flashcards'
}

const BURGER = {
    id: 4,
    title: 'BurgerBuilder',
    desc: "Let's build that meal !",
    img: burger,
    link: '/burger-builder'
}

const PROJECTS = [
    TEST,
    BURGER,
    MUSICMASTER,
    FLASHCARDS,
]

export default PROJECTS;