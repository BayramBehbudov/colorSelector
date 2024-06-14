import { createContext, useState } from "react";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [colors, setColors] = useState([]);
  const [groups, setGroups] = useState([]);

  function setGroup(newGroup) {
    setGroups((prewGroups) => [...prewGroups, newGroup]);
  }

  function setColor(newColor) {
    setColors((prevColors) => [...prevColors, newColor]);
  }

  return (
    <Context.Provider value={{ setColors, setColor, colors, groups, setGroup }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
