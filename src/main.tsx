import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Page1 from "pages/Page1";
import Page2 from "pages/Page2";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="p-3">
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<Navigate replace to="/page1" />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
