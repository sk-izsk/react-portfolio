import { useTitle } from "ahooks"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { Illustration } from "../../components"
import styles from "./Home.module.css"

const Home = () => {
  useTitle("Home")

  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>WEBSITES</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Zeeshan</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <Link to="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link to="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
            <StyledButton
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Z4Z6Z6Z3Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6/view?usp=sharing",
                  "_blank"
                )
              }
              className={styles.outlined}
            >
              Download Resume
            </StyledButton>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  )
}

const StyledButton = styled.button`
  margin-left: 24px;
`

export default Home
