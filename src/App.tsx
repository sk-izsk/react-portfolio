import React, { useEffect } from "react"
import { Header } from "./components"
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
      <Header />
    </>
  )
}

export default App
