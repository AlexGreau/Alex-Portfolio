import email_icon from '../assets/email_icon.png'
import github_icon from '../assets/github_icon.png'
import linkedin_icon from '../assets/linkedin_icon.png'

const EMAIL = {
    id: 1,
    name: "Email",
    link: 'mailto:alexgreau@live.fr',
    img: email_icon
}

const GITHUB = {
    id: 2,
    name: "Github",
    link: 'https://github.com/AlexGreau/Alex-Portfolio',
    img: github_icon
}

const LINKEDIN = {
    id: 3,
    name: "LinkedIn",
    link: 'https://www.linkedin.com/in/alexandre-greau/',
    img: linkedin_icon
}

const SOCIALS = [
    EMAIL,
    GITHUB,
    LINKEDIN
]

export default SOCIALS;