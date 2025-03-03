import { RouteData } from "../interfaces/routes.interface";

export enum AppRoutes {
    HOME = "",
    ERROR = "error",
    EXPERIENCE = "experience",
    EDUCATION = "education",
    PROJECTS = "projects",
    ACHIEVEMENTS = "achievements",

    // Your google form link
    CONTACT = "https://docs.google.com/forms/d/e/1FAIpQLSe_XgmEFkeqdqAAGFVXZAPAaYA0Pqwp5G089hXJ45z5USyjgg/viewform?usp=dialog",
}

export const RoutesData: RouteData[] = [
    {
        routeLinkText: "Home",
        routeURLName: AppRoutes.HOME,
        isVisible: true,
    },
    {
        routeLinkText: "Projects",
        routeURLName: AppRoutes.PROJECTS,
        isVisible: true,
    },
    {
        routeLinkText: "Experience",
        routeURLName: AppRoutes.EXPERIENCE,
        isVisible: true,
    },
    {
        routeLinkText: "Education",
        routeURLName: AppRoutes.EDUCATION,
        isVisible: true,
    },
    {
        routeLinkText: "Achievements",
        routeURLName: AppRoutes.ACHIEVEMENTS,
        isVisible: true,
    },
    {
        routeLinkText: "Contact",
        routeURLName: AppRoutes.CONTACT,
        isVisible: true,
        isExternalLink: true,
    },
    {
        routeLinkText: "Error",
        routeURLName: AppRoutes.ERROR,
        isVisible: false,
    },
]