import React from "react";
import {EmailSvg} from "../../../assets/email-svgrepo-com.svg"
import Icon from "@ant-design/icons";

export function Contact() : JSX.Element{



    return (<>
        <div className="pt-5  flex justify-center">
            <div className="text-3xl">Pour me contacter</div>
        </div>
        <div>
            <div className="flex justify-center font-semibold">
                Ci-joints mon numéro de téléphone et mon adresse mail
            </div>  
            <Icon component={EmailSvg} />
        </div>  
        </>         
    )
}