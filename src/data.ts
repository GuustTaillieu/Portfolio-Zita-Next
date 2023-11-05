import bg_image from "@public/images/backgroundImage.webp";
import { SectionType } from "../types";
import ROUTES from "./routes";

export const sections: SectionType[] = [
    {
        title: "About me",
        link_url: ROUTES.ABOUT,
    },
    {
        title: "Experience",
        link_url: ROUTES.EXPERIENCE,
    },
    {
        title: "Skills",
        link_url: ROUTES.SKILLS,
    },
    {
        title: "Projects",
        link_url: ROUTES.PROJECTS,
    },
    {
        title: "Contact",
        link_url: ROUTES.CONTACT,
    },
];

export const projects = [
    {
        id: "1",
        title: "Project 1",
        description: "This is the first project",
        image: bg_image,
    },
    {
        id: "2",
        title: "Project 2",
        description: "This is the second project",
        image: bg_image,
    },
    {
        id: "3",
        title: "Project 3",
        description: "This is the third project",
        image: bg_image,
    },
    {
        id: "4",
        title: "Project 4",
        description: "This is the fourth project",
        image: bg_image,
    },
    {
        id: "5",
        title: "Project 5",
        description: "This is the fifth project",
        image: bg_image,
    },
    {
        id: "6",
        title: "Project 6",
        description: "This is the sixth project",
        image: bg_image,
    },
];

export const timeline = [
    {
        company: "Howest",
        role: "Student",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "MdWork",
    },
    {
        company: "Howest",
        role: "Architect",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "IoSchoolSharp",
    },
    {
        company: "Howest",
        role: "Architect",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "IoSchoolSharp",
    },
    {
        company: "Howest",
        role: "Architect",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "IoSchoolSharp",
    },
    {
        company: "Howest",
        role: "Architect",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "IoSchoolSharp",
    },
    {
        company: "Howest",
        role: "Architect",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "IoSchoolSharp",
    },
    {
        company: "Howest",
        role: "Architect",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "IoSchoolSharp",
    },
    {
        company: "Howest",
        role: "Architect",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "IoSchoolSharp",
    },
    {
        company: "Howest",
        role: "Architect",
        location: "Brugge",
        date: { start: "2018", end: "2021" },
        icon: "IoSchoolSharp",
    },
];

export const skills = [
    {
        logo: bg_image,
        percentage: 80,
    },
    {
        logo: bg_image,
        percentage: 80,
    },
    {
        logo: bg_image,
        percentage: 80,
    },
    {
        logo: bg_image,
        percentage: 80,
    },
    {
        logo: bg_image,
        percentage: 80,
    },
    {
        logo: bg_image,
        percentage: 80,
    },
    {
        logo: bg_image,
        percentage: 80,
    },
    {
        logo: bg_image,
        percentage: 80,
    },
];

export const info = {
    backgroundImage: bg_image,
    phoneNumber: "+32 123 45 67 89",
    email: "email.email@email.com",
    address: "Street 123, 1234 City",
};
