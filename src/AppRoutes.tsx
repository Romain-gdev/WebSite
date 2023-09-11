import { Route, createBrowserRouter, createRoutesFromElements, HashRouter, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import React from "react";


export const router = createBrowserRouter(
    createRoutesFromElements(
      <HashRouter basename="/" >
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </HashRouter>
  )
)