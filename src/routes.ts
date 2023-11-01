const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    EXPERIENCE: "/experience",
    SKILLS: "/skills",
    CONTACT: "/contact",
    PROJECTS: "/projects",
    PROJECT: (id: string) => `/project/${id}`,
} as const;

export default ROUTES;
