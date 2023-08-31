import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { IZSK } from "../base"
import {
  AccountIcon,
  CodeIcon,
  FilesIcon,
  GithubIcon,
  MailIcon,
  PencilIcon,
  SettingsIcon,
} from "../icons"
import styles from "./Sidebar.module.css"
const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    Icon: PencilIcon,
    path: "/articles",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
]

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
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

const StyledMain = styled.div`
  @media screen and (min-width: 2000px) {
    .sidebar {
      width: 2.5vw;
    }
  }

  @media screen and (max-width: 1100px) {
    .sidebar {
      width: 6vw;
    }
  }

  @media screen and (max-width: 900px) {
    .sidebar {
      width: 8vw;
    }
    .icon {
      height: 48px;
      width: 48px;
      padding: 0.6rem;
    }
  }

  @media screen and (max-width: 600px) {
    .sidebar {
      width: 10vw;
    }
    .icon {
      height: 40px;
      width: 40px;
      padding: 0.6rem;
    }
  }
`

const StyledSidebar = styled.aside`
  background: var(--sidebar-bg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 4.5vw;
  min-width: 40px;
  height: calc(100vh - 30px - 25px);
`
const StyledIcon = styled("svg")`
  height: 48px;
  width: 48px;
  padding: 0.65rem 0;
  display: block;
  margin: 0 auto;
`

const StyledSideBarTop = styled.div``

const StyledSideBarBottom = styled.div``

const StyledIconContainer = styled.div`
  cursor: pointer;
  width: 100%;
  &:hover {
    background: var(--sidebar-hover-bg);
  }
`

const StyledActive = styled.div`
  border-left: 2px solid var(--accent-color);
`
