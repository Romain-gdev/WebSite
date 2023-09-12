import { Steps, Timeline } from "antd"
import React from "react"


export function LastInfos(): JSX.Element {

    return (
        <>
            <div className="pl-8 pt-8 overflow-hidden grid grid-cols-1 gap-x-4 lg:grid lg:grid-cols-2 lg:gap-x-4">
                <div className="col-span-1 md:col-span-1">
                    <div className="text-3xl text-justify mr-[5%]">Ma dernière expérience professionnnelle</div>
                    <Timeline className="mt-[2%]"
                        items={[{
                            children: <div>
                                <span className="text-2xl">Alternance chez ELA SOFTWARE / 2022-2023<br /></span>
                                <span className="text-lg"> Specialisée dans le développement de logiciels pour les professionnels de la maîtrise d'oeuvre.
                                    J'ai développé un logiciel de gestion d'une base client</span></div>
                        }]} />
                </div>
                <div className="col-span-1 md:col-span-1">
                    <div className="text-3xl text-justify">Mon dernier Projet</div>
                    <Timeline className="mt-[2%]"
                        items={[{
                            children: <div>
                                <span className="text-2xl">Création d'un serveur JEE servant une API REST<br /></span>
                                <span className="text-lg">Dans le cadre d'un projet final de la licence professionnelle, nous devions créer un serveur JEE servant une API REST
                                    J'ai réalisé ceci en binôme avec le Framework Spring
                                </span>
                            </div>
                        }]} /> 
                </div>
            </div>

        </>)
}