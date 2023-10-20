import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Menu from "../components/Menu";

export default function Home() {
    

    return (
        <div>
            <div><Navbar /></div>
            <div><Menu/></div>
            
            <div><Carousal /></div>
            
            <div className="m-6">
                <Card />
                <Card />
                <Card />
            </div>
            <div><Footer /></div>
        </div>
    )
}
