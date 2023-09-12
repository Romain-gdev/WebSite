import React from "react";
import { FirstSection } from "./FirstSection";
import { Skills } from "./Skills";
import { LastInfos } from "./LastInfos";
import { Contact } from "./contact/Contact";


export function WhoAmI(): JSX.Element {


    return (<>
        <div className="pl-8 pt-8 overflow-hidden grid grid-cols-1 gap-x-4 lg:grid lg:grid-cols-2 md:gap-x-4">
            <div className="col-span-1 md:col-span-1">
                <FirstSection />
            </div>
            <div className="col-span-1 md:col-span-1">
                <Skills />
            </div>
        </div>
        <div>
            <LastInfos />
        </div>
        <div>
            <Contact />
        </div>
    </>)
}