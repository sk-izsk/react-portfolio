import { useTitle } from "ahooks"
import styled from "styled-components"
import { AboutSection, IZSK } from "../../components"
import { about } from "../../data"

const About: IZSK.FC = () => {
  useTitle("About")

  return (
    <StyledDiv>
      {about.map((item, index) => (
        <AboutSection
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </StyledDiv>
  )
}
const StyledDiv = styled.div`
  padding: 1rem;
`

export default About
