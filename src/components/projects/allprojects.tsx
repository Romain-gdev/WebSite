import React from "react";
import "./allprojects.css"

export function AllProjects(): JSX.Element {


    return (
        <div className="options">
        <div className="option active">
            <div className="label">
                <div className="icon">
                    <i className="fas fa-walking"></i>
                </div>
                <div className="info">
                    <div className="main">Ultricies</div>
                    <div className="sub">Elit ut aliquam purus sit</div>
                </div>
            </div>
        </div>
        <div className="option" >
            <div className="label">
                <div className="icon">
                    <i className="fas fa-snowflake"></i>
                </div>
                <div className="info">
                    <div className="main">Luctus</div>
                    <div className="sub">Arcu cursus vitae congue mauris</div>
                </div>
            </div>
        </div>
        <div className="option">
            <div className="label">
                <div className="icon">
                    <i className="fas fa-tree"></i>
                </div>
                <div className="info">
                    <div className="main">Purus</div>
                    <div className="sub">Neque vitae tempus quam pellentesque</div>
                </div>
            </div>
        </div>
        <div className="option" >
            <div className="label">
                <div className="icon">
                    <i className="fas fa-tint"></i>
                </div>
                <div className="info">
                    <div className="main">Accumsan</div>
                    <div className="sub">Aagittis id consectetur purus ut</div>
                </div>
            </div>
        </div>
        <div className="option">
            <div className="label">
                <div className="icon">
                    <i className="fas fa-sun"></i>
                </div>
                <div className="info">
                    <div className="main">Dignissim</div>
                    <div className="sub">Augue ut lectus arcu bibendum</div>
                </div>
            </div>
        </div>
    </div>

        // <div NameName="option">
        //     <div NameName="option-active">
        //         <div NameName="label">
        //             <div className="icon"><i className="fas fa-walking"></i></div>
        //         </div>
        //         <div className="infos"></div>
        //         <div className="main"></div>
        //     </div>
        // </div>
    )
}