import { Progress } from "antd"
import React from "react"


export function Skills(): JSX.Element {

    return <div className="mr-[5%]">
        <span className="font-semibold">Environnement .NET (.NET Framework)</span>
        <Progress percent={90} showInfo={false} type={"line"} format={(number, percent) => "Done"} />
        <span className="font-semibold">Typescript JSX </span>
        <Progress percent={80} showInfo={false} type={"line"} format={(number, percent) => "Done"} />
        <span className="font-semibold">GitLab CI / CD</span>
        <Progress percent={70} showInfo={false} type={"line"} format={(number, percent) => "Done"} />
    </div>
}