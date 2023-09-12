import React from "react";
import { FirstSection } from "./FirstSection";
import { Skills } from "./Skills";


export function WhoAmI(): JSX.Element {


    return (<>
        <div className="ml-8 mt-8 grid grid-cols-2 gap-4">
            <FirstSection />
            <Skills />
        </div>
    </>)
}