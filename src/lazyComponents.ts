import { lazy } from "react"

export const Home = lazy(() => import("./screens/Home/Home"))
export const TabsBar = lazy(() => import("./screens/TabsBar/TabsBar"))
export const About = lazy(() => import("./screens/About/About"))
export const Contact = lazy(() => import("./screens/Contact/Contact"))
export const Projects = lazy(() => import("./screens/Projects/Projects"))
export const BottomBar = lazy(() => import("./screens/BottomBar/BottomBar"))
export const Settings = lazy(() => import("./screens/Settings/Settings"))
