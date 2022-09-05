import React from "react";
import iconComplete from "./../assets/images/icon-complete.svg";

export default function SuccessResult({ goBack }) {
  return (
    <div className="success-result">
      <img src={iconComplete} className="icon-complete" alt="icon complete" />
      <h3 className="success-result title">Thank you!</h3>
      <p className="success-result paraph">We've added your card details</p>
      <button className="success-result btn" onClick={goBack}>
        Continue
      </button>
    </div>
  );
}
