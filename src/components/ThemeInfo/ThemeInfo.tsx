import styled from "styled-components"
import { IZSK } from "../base"
import styles from "./ThemeInfo.module.css"

interface Props {
  icon: string
  name: string
  publisher: string
  theme: string
}

export const ThemeInfo: IZSK.FC<Props> = ({ icon, name, publisher, theme }) => {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }

  return (
    <div className={styles.container}>
      <img src={icon} alt={name} height={100} width={100} />
      <div className={styles.info}>
        <div>
          <StyledH3>{name}</StyledH3>
          <StyledH5>{publisher}</StyledH5>
        </div>
        <button onClick={() => setTheme(theme)}>Set Color Theme</button>
      </div>
    </div>
  )
}

const StyledH3 = styled.h3`
  margin: 0px;
`

const StyledH5 = styled.h5`
  margin: 0px;
`
