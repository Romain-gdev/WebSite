import { Route, createBrowserRouter, createRoutesFromElements, HashRouter } from "react-router-dom";
import { Home } from "./components/Home";
import React from "react";


export const router = createBrowserRouter(
    createRoutesFromElements(
      <HashRouter basename="/" >
        <Route path="/home" element={<Home />}></Route>
      </HashRouter>
      )
)