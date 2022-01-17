import React from "react";

export const clickContext = React.createContext();
const clickState = { add: 0, update: 0 };

const ClickProvider = (props) => {
  const [click, setClick] = React.useState(clickState);
  return (
    <clickContext.Provider value={[click, setClick]}>
      {props.children}
    </clickContext.Provider>
  );
};

export default ClickProvider;
