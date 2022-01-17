import React from "react";

export const messageContext = React.createContext();

const MessageProvider = (props) => {
  const [message, setMessage] = React.useState({ add: "", update: "" });
  return (
    <messageContext.Provider value={[message, setMessage]}>
      {props.children}
    </messageContext.Provider>
  );
};

export default MessageProvider;
