import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Checkout, Home } from "../pages"


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router