import styled from "styled-components"
import { IZSK } from "./base"

interface Props {
  title: string
  description: string
}

export const AboutSection: IZSK.FC<Props> = ({ title, description }) => {
  return (
    <StyledDiv>
      <StyledH3>{title}</StyledH3>
      <StyledH4>{description}</StyledH4>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const StyledH4 = styled.h4`
  color: var(--text-color);
  /* font-size: 20px; */
  max-width: 100%;
  word-wrap: break-word;
  white-space: pre-line;
  margin: 0px;
  font-weight: 300;
`
const StyledH3 = styled.h3`
  width: max-content;
  margin: 0px;
  color: #eee;
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-left: 0.4rem;
    width: 0.125em;
    background: var(--accent-color);
    animation: typewriter 2.5s steps(24) 500ms forwards,
      blink 750ms steps(24) infinite;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--main-bg);
    animation: typewriter 2.5s steps(24) 500ms forwards;
  }

  @keyframes typewriter {
    to {
      left: 100%;
    }
  }

  @keyframes blink {
    to {
      background: transparent;
    }
  }
`
