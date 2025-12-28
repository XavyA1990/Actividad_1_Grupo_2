import { BrowserRouter, Routes, Route } from 'react-router-dom';

function GlobalRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/page1" element={<div>Page 1</div>} />
        <Route path="/page2" element={<div>Page 1</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default GlobalRouter;