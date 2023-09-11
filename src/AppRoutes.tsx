import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./components/Home";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/home" element={<Home />}></Route>
      )
)