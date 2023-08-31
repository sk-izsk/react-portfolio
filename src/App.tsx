import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import styled from "styled-components"
import { Header, Sidebar } from "./components"
import "./themes/themes.css"

interface Props {}

const App: React.FC<Props> = () => {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme") as string
      )
    }
    // document.documentElement.setAttribute("data-theme", "github-dark")
    // localStorage.setItem("theme", "github-dark")
  }, [])
  return (
    <>
      <BrowserRouter>
        <Header />
        <StyledMain>
          <Sidebar />
          <p>VSCode Clone</p>
        </StyledMain>
      </BrowserRouter>
    </>
  )
}

export default App

const StyledMain = styled.div`
  display: flex;
  background: var(--main-bg);
`
