import styled from "styled-components"
import VSCodeIcon from "../assets/vscode_icon.svg"
import { IZSK } from "./base"

export const Header: IZSK.FC = () => {
  return (
    <StyledTitlebar>
      <img src={VSCodeIcon} alt="VSCode Icon" height={15} width={15} />
      <StyledItems>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </StyledItems>
      <StyledTitle>Shaikh Zeeshan Murshed - Visual Studio Code</StyledTitle>
      <StyledWindowsButtons>
        <StyledMinimize />
        <StyledMaximize />
        <StyledClose />
      </StyledWindowsButtons>
    </StyledTitlebar>
  )
}

const StyledTitlebar = styled.section`
  background: var(--titlebar-bg);
  height: 30px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.85rem;
  border-bottom: 1px solid #191d20;

  @media screen and (max-width: 900px) {
    .items p {
      display: none;
    }
    .title {
      flex: 4;
    }
  }
`

const StyledWindowsButtons = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: auto;
  > * {
    margin-left: 0.5rem;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    cursor: pointer;
  }
`

const StyledItems = styled.div`
  flex: 1;
  display: flex;
  margin-right: auto;
  margin-left: 0.5rem;
  > * {
    padding: 0 0.5rem;
    cursor: pointer;
  }
`

const StyledTitle = styled.p`
  flex: 1;
  text-align: center;
`

const StyledMaximize = styled.span`
  background: #50fa7b;
`

const StyledClose = styled.span`
  background: #ff5555;
`

const StyledMinimize = styled.span`
  background: #f1fa8c;
  margin-left: auto;
`
