import React from "react";

function InputComp({
  type,
  placeholder,
  InputName,
  value,
  handleChange,
  min,
  max,
  pattern,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={InputName}
        value={value}
        onChange={handleChange}
        required
        minLength={min}
        maxLength={max}
        pattern={pattern}
      />
    </>
  );
}

export default InputComp;
