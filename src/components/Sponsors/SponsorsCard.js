import React from "react";
import "./SponsorsCard.css";
import {sponsors} from "../../data"

function SponsorsCard() {
  return (
    <>
      {sponsors.map((sp) => (
        <div className="Sponsors__card" key={sp.id} img={sp.img}>
          <img src={sp.img} className="Sponsors__img" alt="img" />
        </div>
      ))}
    </>
  );
}

export default SponsorsCard;
