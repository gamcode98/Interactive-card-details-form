import bgCardFront from "./../assets/images/bg-card-front.png";
import bgCardBack from "./../assets/images/bg-card-back.png";
import cardLogo from "./../assets/images/card-logo.svg";
import React, { useContext } from "react";
import { formDataContext } from "../context/DataFormContext";

export default function Cards() {
  const context = useContext(formDataContext);

  return (
    <section className="bg-cards">
      <figure className="card-container back">
        <img src={bgCardBack} alt="back card" className="card card-back" />
        <span className="card-back-numbers">
          {context.dataForm.cardCvc || "000"}
        </span>
      </figure>

      <figure className="card-container front">
        <img src={cardLogo} alt="card logo" className="card-logo" />
        <img src={bgCardFront} alt="front card" className="card card-front" />
        <div className="card-front-numbers">
          {context.dataForm.cardNumber || "0000 0000 0000 0000"}
        </div>
        <div className="card-details">
          <span>{context.dataForm.ownerNameCard || "jane appleseed"}</span>
          <span>
            {context.dataForm.cardMonthExp || "00"}/
            {context.dataForm.cardYearExp || "00"}
          </span>
        </div>
      </figure>
    </section>
  );
}
