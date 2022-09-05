import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import SuccessResult from "./SuccessResult";

export default function Form() {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    goBack,
  } = useForm(initialForm, validationsForm);

  return (
    <section className="form-container">
      {!response ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ownerNameCard">cardholder name</label>
            <input
              type="text"
              placeholder="e.g Jane Appleseed"
              name="ownerNameCard"
              id="ownerNameCard"
              value={form.ownerNameCard}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </div>

          {errors.ownerNameCard && (
            <p className="error-msg">{errors.ownerNameCard}</p>
          )}

          <div className="form-group">
            <label htmlFor="card-number">card number</label>
            <input
              type="text"
              placeholder="e.g 1234 5678 9123 0000"
              id="card-number"
              name="cardNumber"
              value={form.cardNumber}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            />
          </div>

          {errors.cardNumber && (
            <p className="error-msg">{errors.cardNumber}</p>
          )}

          <div className="form-group last-inputs">
            <div className="exp-date-container">
              <span className="exp-date">Exp. date (mm/yy)</span>

              <div className="mm-yy">
                <div className="mm">
                  <input
                    min="1"
                    type="number"
                    name="cardMonthExp"
                    placeholder="MM"
                    value={form.cardMonthExp}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  {errors.cardMonthExp && (
                    <p className="error-msg">{errors.cardMonthExp}</p>
                  )}
                </div>

                <div className="yy">
                  <input
                    min="22"
                    type="number"
                    name="cardYearExp"
                    placeholder="YY"
                    value={form.cardYearExp}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />

                  {errors.cardYearExp && (
                    <p className="error-msg">{errors.cardYearExp}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="cvc-container">
              <label htmlFor="cvc">cvc</label>

              <input
                min="100"
                type="number"
                name="cardCvc"
                placeholder="e.g 123"
                id="cvc"
                value={form.cardCvc}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              />
              {errors.cardCvc && <p className="error-msg">{errors.cardCvc}</p>}
            </div>
          </div>
          {!loading ? <input type="submit" value="Confirm" /> : <Loader />}
        </form>
      ) : (
        <SuccessResult goBack={goBack} />
      )}

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/gamcode98" target="_blank">
          Gamcode98
        </a>
        .
      </div>
    </section>
  );
}

const initialForm = {
  ownerNameCard: "",
  cardNumber: "",
  cardMonthExp: "",
  cardYearExp: "",
  cardCvc: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexownerNameCard = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexCardNumber = /\d{4} \d{4} \d{4} \d{4}/;

  if (!form.ownerNameCard.trim()) {
    errors.ownerNameCard = "Can't be blank";
  } else if (!regexownerNameCard.test(form.ownerNameCard.trim())) {
    errors.ownerNameCard = "Wrong format, letters and white spaces only";
  }

  if (!form.cardNumber.trim()) {
    errors.cardNumber = "Can't be blank";
  } else if (!regexCardNumber.test(form.cardNumber.trim())) {
    errors.cardNumber = "Wrong format, numbers and white spaces only";
  }

  if (!form.cardMonthExp.trim()) {
    errors.cardMonthExp = "Can't be blank";
  } else if (form.cardMonthExp < 1 || form.cardMonthExp > 12) {
    errors.cardMonthExp = "Wrong format";
  }

  if (!form.cardYearExp.trim()) {
    errors.cardYearExp = "Can't be blank";
  } else if (form.cardYearExp < 22 || form.cardYearExp > 50) {
    errors.cardYearExp = "Wrong format";
  }

  if (!form.cardCvc.trim()) {
    errors.cardCvc = "Can't be blank";
  } else if (form.cardCvc < 100 || form.cardCvc > 999) {
    errors.cardCvc = "Wrong format";
  }

  return errors;
};
