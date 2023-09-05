import React, { Suspense, useEffect } from "react"
import { MutatingDots } from "react-loader-spinner"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { Explorer, Header, Sidebar } from "./components"
import {
  About,
  BottomBar,
  Contact,
  Home,
  Projects,
  Settings,
  TabsBar,
} from "./lazyComponents"
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
  }, [])
  return (
    <>
      <Suspense
        fallback={
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        }
      >
        <BrowserRouter>
          <Header />
          <StyledMain>
            <Sidebar />
            <Explorer />
            <div style={{ width: "100%" }}>
              <TabsBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>
          </StyledMain>
          <BottomBar />
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default App

const StyledMain = styled.div`
  display: flex;
  background: var(--main-bg);
`
