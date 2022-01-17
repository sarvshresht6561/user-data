import React from "react";

export const countClickedContext = React.createContext();
const initialState = false;

const CountClickedProvider = (props) => {
  const [countClicked, setCountClicked] = React.useState(initialState);
  return (
    <countClickedContext.Provider value={[countClicked, setCountClicked]}>
      {props.children}
    </countClickedContext.Provider>
  );
};

export default CountClickedProvider;
