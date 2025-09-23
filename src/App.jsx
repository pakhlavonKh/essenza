import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Catalog from "../pages/Catalog"


function App() {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;