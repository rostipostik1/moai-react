import React from "react";

export const FormField = ({ field }) => {
  const { type, name, label, placeholder, isPrivacy } = field;

  // 🧩 Если это поле с политикой — отдельный рендер
  if (isPrivacy) {
    return (
      <div className="form-group">
        <label className="privacy">{label}</label>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label>
        <span>{label}</span>
        {type === "textarea" ? (
          <textarea name={name} placeholder={placeholder}></textarea>
        ) : (
          <input type={type} name={name} placeholder={placeholder} />
        )}
      </label>
    </div>
  );
};
