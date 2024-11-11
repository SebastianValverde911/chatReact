import React from "react";
import men from '../../assets/men.png';
import woman from '../../assets/woman.png';
import './CardContac.css';

const CardContac = (data) => {

    return(
        <div className="container-card" data-id={data.id} onClick={() => data.printChatLeftContainer(data.id)}>
            <div className="image-contact">
                <img className="img-user" src = {men} />
            </div>
            <div className="info-contact">
                <div className="name-user" title={data.name}>{data.name}</div>
                <div className="email-user" title={data.email}>{data.email}</div>
            </div>
        </div>
    )
}

export default CardContac;