import React, { useContext, useRef, useState } from "react";
import style from "./create.module.css";
import { Context } from "../../src/colorContext";
import ColorContainer from "../../components/color/ColorContainer";
import NavButton from "../../components/btn/NavButton";
import SubmitBtn from "../../components/btn/SubmitBtn";
import Input from "../../components/Input";

const Group = () => {
  const [name, setName] = useState("");
  const [color, setColorValue] = useState("");
  const [groupName, setGroupName] = useState("");
  const { setColors, setColor, colors, setGroup } = useContext(Context);

  function handleGroup() {
    if (name != "" && color != "" && colors.length < 6) {
      const newGroup = {
        name,
        color,
      };

      setColor(newGroup);
    }
  }
  function saveColors() {
    if (colors.length >= 6 && groupName != "") {
      const group = {
        name: groupName,
        colors,
      };

      setGroup(group);
      setColors([]);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Setting Page</h1>
        <span>
          Here you can create your own color groups by choosing 6 color names or
          codes and saving them.
        </span>
      </div>
      <div className={style.makeGroup}>
        <Input placeholder="Color Name" set={setName} />
        <Input placeholder="Color code" set={setColorValue} />
        <SubmitBtn text="Add Color" handle={handleGroup} />
      </div>
      <div className={style.currentGroup}>
        {colors.map((color, index) => (
          <ColorContainer
            color={color}
            index={index}
            key={color.name + index}
          />
        ))}
      </div>
      <div className={style.makeGroup}>
        <Input placeholder="Group Name" set={setGroupName} />
        <SubmitBtn text="Save" handle={saveColors} />
      </div>
      <div className={style.backbtn}>
        <NavButton text="Back" navig="/" />
      </div>
    </div>
  );
};

export default Group;
