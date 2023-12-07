import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    dispatch({
        type : 'CHG_CURRENCY',
        payload : event,
    })
  };
  return (
    <div class="dropdown alert alert-success" >
        <label>Currency</label>
      <select className="dropdown alert alert-success" id="inputGroupSelect02" onChange={(event) => handleCurrencyChange(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
    </div>
  );
};

export default Currency;
