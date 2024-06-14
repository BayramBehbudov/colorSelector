import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, navig }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(navig);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
