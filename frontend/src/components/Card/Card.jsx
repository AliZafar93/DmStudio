import React from "react";
import "./Card.css";

export default function Card({title,price,features,onClick}){
    return(
        <div className="pricing-card">
            <div className="pricing-title">{title}</div>
            <div className="pricing-price">{price}</div>
            <ul className="pricing-features">
                {features.map((feature,idx)=>(
                    <li key={idx}>{feature}</li>
                ))}
            </ul>
            <button className="pricing-btn" onClick={onClick}>Get Started</button>
        </div>
    );
}