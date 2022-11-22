import React from "react";
import "./ImageContainer.css"
import imagePLaceholder from "../assets/sufyan-fL3ft7155kE-unsplash.jpg"

export default function ImageContainer() {

    return (
        <>
            <div className="ImageContainer show">
                <h2>Image</h2>
                <img src={imagePLaceholder} id="ImageContainer" alt="image palceholder" />
            </div>
            <div className="ImageContainer show">
                <h2>Image</h2>
                <img src={imagePLaceholder} id="ImageContainer" alt="image palceholder" />
            </div>
        </>
    )
}