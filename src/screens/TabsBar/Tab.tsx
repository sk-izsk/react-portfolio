import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import { IZSK } from "../../components"
import styles from "./TabsBar.module.css"

interface Props {
  icon: JSX.Element
  filename: string
  path: string
}

export const Tab: IZSK.FC<Props> = ({ icon, filename, path }) => {
  const location = useLocation()

  return (
    <Link to={path}>
      <div
        className={`${styles.tab} ${
          location.pathname === path && styles.active
        }`}
      >
        {icon}
        <StyledSpan>{filename}</StyledSpan>
      </div>
    </Link>
  )
}

const StyledSpan = styled.span`
  /* padding: 0.5rem; */
`
