import React from "react";

export const stateContext = React.createContext();
const initialState = { add: "", update: "", search: "" };

const StateProvider = (props) => {
  const [state, setState] = React.useState(initialState);
  return (
    <stateContext.Provider value={[state, setState]}>
      {props.children}
    </stateContext.Provider>
  );
};

export default StateProvider;
