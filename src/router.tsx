import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { BookDetail } from "@/pages/BookDetail";
import { Checkout } from "@/pages/Checkout";

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;
