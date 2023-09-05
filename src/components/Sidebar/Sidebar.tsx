import {
  VscAccount,
  VscCode,
  VscFiles,
  VscMail,
  VscSettingsGear,
} from "react-icons/vsc"
import { Link, useLocation } from "react-router-dom"
import { IZSK } from "../base"
import styles from "./Sidebar.module.css"
const sidebarTopItems = [
  {
    Icon: VscFiles,
    path: "/",
  },
  // {
  //   Icon: VscGithubAlt,
  //   path: "/github",
  // },
  {
    Icon: VscCode,
    path: "/projects",
  },
  {
    Icon: VscMail,
    path: "/contact",
  },
]

const sidebarBottomItems = [
  {
    Icon: VscAccount,
    path: "/about",
  },
  {
    Icon: VscSettingsGear,
    path: "/settings",
  },
]

interface Props {}

export const Sidebar: IZSK.FC<Props> = () => {
  const location = useLocation()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                location.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  location.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer}>
            <Link to={path} key={path}>
              <Icon
                fill={
                  location.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  )
}
