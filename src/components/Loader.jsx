import React from "react";
import loader from "./../assets/bars.svg";

export default function Loader() {
  return (
    <button className="btn-loader">
      <img src={loader} alt="loader" />
    </button>
  );
}
