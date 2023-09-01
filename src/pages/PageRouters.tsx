import { Route, BrowserRouter, Routes } from "react-router-dom";

import MainPage from "./MainPage";
import DetailPage from "./DetailPage";
import NotFoundPage from "./NotFoundPage";

function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/issue/:number" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRouter;
