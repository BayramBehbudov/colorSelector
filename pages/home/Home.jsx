import React, { useContext } from "react";
import style from "./home.module.css";
import { Context } from "../../src/colorContext";
import ColorContainer from "../../components/color/ColorContainer";
import Button from "../../components/btn/NavButton";

const Home = () => {
  const { groups } = useContext(Context);
  console.log(groups)
  return (
    <div className={style.homeContainer}>
      <div className={style.section}>
        <h1>Home Page</h1>
        <Button text="Create new color box" navig="/create" />
      </div>
      <div className={style.section}>
        <div className={style.currentGroup}>
          {groups.map((group, index) => (
            <div className={style.colorContainer} key={"group" + index}>
              <div className={style.title}>{group.name}</div>
              <div className={style.colors}>
                {group.colors.map((color, index) => (
                  <ColorContainer
                    color={color}
                    index={index}
                    key={color.name + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
