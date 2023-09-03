import { lazy } from "react"

export const Home = lazy(() => import("./screens/Home/Home"))
export const TabsBar = lazy(() => import("./screens/TabsBar/TabsBar"))
export const About = lazy(() => import("./screens/About/About"))
export const Contact = lazy(() => import("./screens/Contact/Contact"))
