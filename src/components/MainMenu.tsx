import React, { useState } from "react";
import { Layout, Menu } from 'antd';
import { useNavigate } from "react-router-dom";

export function MainMenu(): JSX.Element {

    const navigate = useNavigate();

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} defaultValue={['1']} items={[
            {
                key: 1,
                label: "WHO AM I",
                onClick: () => { navigate("whoami") }
            },
            {
                key: 2,
                label: "MA FORMATION",
                onClick: () => navigate("formation"),
            },
            {
                key: 3,
                label: "MES EXPERIENCES",
                // onClick: () => navigate("experiences"),
            },
            {
                key: 5,
                label: "TOUS MES PROJETS",
                // onClick: () => navigate("allprojects"),
            },
        ]}>
        </Menu>
    )
}