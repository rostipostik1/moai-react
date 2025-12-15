import React from "react";

export const InputField = ({ label, type, name, placeholder }) => (
  <label>
    <span>{label}</span>
    <input type={type} name={name} placeholder={placeholder} />
  </label>
);
