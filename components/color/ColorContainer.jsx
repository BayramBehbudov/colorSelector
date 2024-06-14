import React from "react";
import style from "./colorComponent.module.css";
const ColorContainer = ({ color, index }) => {
  return (
    <div  className={style.colorContainer}>
      <div className={style.back} style={{ background: color.color }}></div>
      <div className={style.title}>{color.name}</div>
    </div>
  );
};

export default ColorContainer;
