import { List } from "antd";
import React from "react";

interface Formation {
    year: string,
    title: string,
    description: string,
    campus: string,
}

export function Formation(): JSX.Element {

    const formations: Formation[] = [
        {
            title: "Licence Professionnelle MIAR",
            year: "2022-2023",
            campus: "I.U.T. Nantes",
            description: "J'ai justifié le choix de cette formation de par l'apprentissage en alternance. Je m'y suis plus quant à l'apprentissage des logiciels en mode Saas en entreprise."
                + " Et bien aussi les différents moyens de créer des serveurs servant des API REST (Node, JEE)",
        },
        {
            title: "Licence 2 MPCIE",
            year: "2021-2022",
            campus: "Faculté Sciences Angers Belle-Beille",
            description: "Après mon D.U.T Informatique, j'ai voulu maîtriser de nouveaux langages de programmation et approfondir mon apprentissage précédent."
                + " J'ai pu apprendre le C++ et le Postgre, et approfondir mes connaissances en Javascript et en php",
        },
        {
            title: "D.U.T. Informatique",
            year: "2019-2021",
            campus: "I.U.T. Nantes",
            description: "Je souhaitais avoir une formation professionalisante en 2 ans, " +
                "consacrer le plus de temps possible à l'apprentissage et bénéficier de l'expérience d'un stage professionnel.",
        },

    ];

    return (<div>
        <List dataSource={formations} className="ml-5"
            renderItem={(item: Formation) => (
                <List.Item key={item.title} className="font-semibold">
                    <List.Item.Meta title={<span className="text-2xl">{item.year} - {item.title}</span>}
                        description={<>
                            <span className="text-justify text-lg font-semibold">{item.campus}<br /></span>
                            <span className="text-xl text-justify">{item.description}</span>
                        </>} />
                </List.Item>
            )}
        />
    </div>);
}