import React from "react";
import { Image } from 'antd';
import Photo from "../assets/photo-identity.png";

export function Identity(): JSX.Element {

    return (
        <div className="h-full w-full pl-10">
            <div className="pt-20 flex flex-row">
                <div className="">
                    <Image src={Photo} preview={false} className="rounded-full" width={204} height={166} />
                </div>
                <div className="text-justify">
                    <br />
                    <br />
                    <span className="text-5xl">GAUTIER Romain<br /></span>
                    <span className="text-2xl   ">Diplômé de l'I.U.T de Nantes <br /> Conception, Développement et Test de logiciels, Parcours : Applications Réparties</span>
                </div>
            </div>
        </div>
    )
}