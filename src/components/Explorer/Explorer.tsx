import { useState } from "react"
import { BiLogoCss3 } from "react-icons/bi"
import { CgReadme } from "react-icons/cg"
import { DiReact } from "react-icons/di"
import { TbBrandTypescript } from "react-icons/tb"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { ChevronRight, Html5 } from "../icons"
import styles from "./Explorer.module.css"

export const explorerItems = [
  {
    name: "home.tsx",
    path: "/",
    icon: <DiReact size={20} />,
  },
  {
    name: "about.html",
    path: "/about",
    icon: <Html5 />,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: <BiLogoCss3 size={20} />,
  },
  {
    name: "projects.ts",
    path: "/projects",
    icon: <TbBrandTypescript size={20} />,
  },
  {
    name: "github.md",
    path: "/github",
    icon: <CgReadme size={20} />,
  },
]

export const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true)

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: "block" } : { display: "none" }}
        >
          {explorerItems.map((item) => (
            <StyledLink to={item.path} key={item.name}>
              <div className={styles.file}>
                {item.icon}
                <span>{item.name}</span>
              </div>
            </StyledLink>
          ))}
        </div>
      </div>
    </div>
  )
}

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  /* height: 30px;
  width: 100%; */

  span {
    padding-left: 6px;
  }
`
