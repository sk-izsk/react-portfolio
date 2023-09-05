import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useMobileView } from "../../hooks"
import { ChevronRight, Css, Html5, ReactJS, Typescript } from "../icons"
import styles from "./Explorer.module.css"

export const explorerItems = [
  {
    name: "home.tsx",
    path: "/",
    icon: <ReactJS height={18} width={18} />,
  },
  {
    name: "about.html",
    path: "/about",
    icon: <Html5 height={18} width={18} />,
  },
  {
    name: "contact.css",
    path: "/contact",
    icon: <Css height={18} width={18} />,
  },
  {
    name: "projects.ts",
    path: "/projects",
    icon: <Typescript height={18} width={18} />,
  },
  // {
  //   name: "github.md",
  //   path: "/github",
  //   icon: <Markdown height={18} width={18} />,
  // },
]

export const Explorer = () => {
  const { isMobileView, isPortrait } = useMobileView()
  const [portfolioOpen, setPortfolioOpen] = useState(true)

  return (
    <StyledDiv
      $isResponsive={isPortrait && !isMobileView}
      className={styles.explorer}
    >
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
    </StyledDiv>
  )
}

const StyledDiv = styled.div<{ $isResponsive: boolean }>`
  margin-left: ${({ $isResponsive }) => ($isResponsive ? "28px" : "default")};
`

const StyledLink = styled(Link)`
  color: var(--text-color);
  text-decoration: none;
  /* height: 30px;
  width: 100%; */

  span {
    padding-left: 6px;
  }
`
