import React, { createContext, useState } from "react";

export const formDataContext = createContext();

export default function DataFormProvider({ children }) {
  const [dataForm, setDataForm] = useState({
    ownerNameCard: "",
    cardNumber: "",
    cardMonthExp: "",
    cardYearExp: "",
    cardCvc: "",
  });

  return (
    <formDataContext.Provider value={{ dataForm, setDataForm }}>
      {children}
    </formDataContext.Provider>
  );
}
