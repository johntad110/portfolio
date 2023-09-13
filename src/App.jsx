import './index.css'

import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Lab from "./pages/Lab"
import Whoops404 from "./pages/Whoops404"

const App = () => {

  return (
    <>
      <main className="app transition-all ease-in">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/lab" element={<Lab />}/>
            <Route path="*" element={<Whoops404 />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App