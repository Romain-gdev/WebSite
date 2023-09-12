import React from "react";
import { Image } from 'antd';
import Photo from "../assets/photo-identity.png";

export function Identity(): JSX.Element {

    return (
        <div className="pl-10">
            <div className="pt-20 flex flex-col md:flex-row">
                <div className="md:w-1/4 ml-[5%]">
                    <Image srcSet={Photo} preview={false} className="rounded-full" width={204} height={166} />
                </div>
                <div className="text-justify md:w-3/4 mr-[5%]">
                    <br />
                    <br />
                    <span className="text-5xl">GAUTIER Romain<br /></span>
                    <span className="text-2xl">Diplômé de l'I.U.T de Nantes <br /> Conception, Développement et Test de logiciels, Parcours : Applications Réparties</span>
                </div>
            </div>
        </div>
    )
}