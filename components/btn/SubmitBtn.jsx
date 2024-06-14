import React from "react";

const SubmitBtn = ({ text, isDisabled, handle }) => {
  return (
    <button disabled={isDisabled} onClick={handle}>
      {text}
    </button>
  );
};

export default SubmitBtn;
