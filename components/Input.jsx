import React, { useRef } from "react";

const Input = ({ placeholder, set,val }) => {
  const inputRef = useRef();
  
  return (
    <input
      type="text"
      placeholder={placeholder}
      ref={inputRef}
      onBlur={() => set(inputRef.current.value)}
    />
  );
};

export default Input;
