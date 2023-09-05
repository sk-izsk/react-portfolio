import { useTitle } from "ahooks"
import styled from "styled-components"
import Ayu from "../../assets/ayu.png"
import Dracula from "../../assets/dracula.png"
import GithubDark from "../../assets/github-dark.png"
import NightOwl from "../../assets/night-owl.png"
import Nord from "../../assets/nord.png"
import { ThemeInfo } from "../../components"
import styles from "./Settings.module.css"

const SettingsPage = () => {
  useTitle("Settings")
  return (
    <StyledDiv>
      <h2>Manage Themes</h2>
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon={GithubDark}
          publisher="GitHub"
          theme="github-dark"
        />
        <ThemeInfo
          name="Dracula"
          icon={Dracula}
          publisher="Dracula Theme"
          theme="dracula"
        />
        <ThemeInfo
          name="Ayu Dark"
          icon={Ayu}
          publisher="teabyii"
          theme="ayu-dark"
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon={Ayu}
          publisher="teabyii"
          theme="ayu-mirage"
        />
        <ThemeInfo
          name="Nord"
          icon={Nord}
          publisher="arcticicestudio"
          theme="nord"
        />
        <ThemeInfo
          name="Night Owl"
          icon={NightOwl}
          publisher="sarah.drasner"
          theme="night-owl"
        />
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  color: var(--text-color);
  padding: 0px 1.5rem;
`

export default SettingsPage
