/** @format */

import React, { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.scss";
import Router from "./pages/Router";

export default function App() {
  useEffect(() => {
    document.title = "makescents";
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
}
