import React from "react";
import men from '../../assets/men.png';
import woman from '../../assets/woman.png';
import './CardContac.css';

const CardContac = (data) => {
    return(
        <div className="container-card" data-id={data.id}>
            <div className="image-contact">
                <img className="img-user" src = {woman} />
            </div>
            <div className="info-contact">
                <div>{data.name}</div>
                <div>{data.email}</div>
            </div>
        </div>
    )
}

export default CardContac;