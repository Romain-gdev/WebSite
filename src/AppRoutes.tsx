
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { WhoAmI } from "./components/whoami/WhoAmI";
import { Formation } from './components/formation/Formation';


export function AppRoutes(): JSX.Element {
    return (<BrowserRouter>
        <Routes>
            <Route path="/website/" element={<App />} >
                <Route path="whoami" element={<WhoAmI />} />
                <Route path="formation" element={<Formation />} />
                <Route path="current-year" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>);
}