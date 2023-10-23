const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  EXPERIENCE: "/experience",
  SKILLS: "/skills",
  CONTACT: "/contact",
  PROJECTS: "/projects",
  PROJECT: (id: string) => `/project/${id}`,
} as const;

const projects = [
  {
    id: "1",
    title: "Project 1",
    description: "This is the first project",
    image: "https://picsum.photos/1080/720",
  },
  {
    id: "2",
    title: "Project 2",
    description: "This is the second project",
    image: "https://picsum.photos/1080/720",
  },
  {
    id: "3",
    title: "Project 3",
    description: "This is the third project",
    image: "https://picsum.photos/1080/720",
  },
  {
    id: "4",
    title: "Project 4",
    description: "This is the fourth project",
    image: "https://picsum.photos/1080/720",
  },
  {
    id: "5",
    title: "Project 5",
    description: "This is the fifth project",
    image: "https://picsum.photos/1080/720",
  },
  {
    id: "6",
    title: "Project 6",
    description: "This is the sixth project",
    image: "https://picsum.photos/1080/720",
  },
];

export { projects };
export default ROUTES;
