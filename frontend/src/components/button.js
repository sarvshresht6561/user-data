import React from "react";
import { stateContext } from "../contexts/stateProvider";
import { clickContext } from "../contexts/clickProvider";
import { messageContext } from "../contexts/messageProvider";
import { countClickedContext } from "../contexts/countClickedProvider";
import { returnResponse } from "../services/onClick";

const Button = (props) => {
  const [state] = React.useContext(stateContext);
  const [click, setClick] = React.useContext(clickContext);
  const [countClicked, setCountClicked] = React.useContext(countClickedContext);
  const [message, setMessage] = React.useContext(messageContext);

  const onClick = async (e, name) => {
    try {
      let result = await returnResponse(state, name);
      if (result === undefined)
        setMessage({ ...message, [name.toLowerCase()]: "Error occurred" });
      else
        setMessage({ ...message, [name.toLowerCase()]: result.data.message });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button
        type="button"
        disabled={props.disabled}
        onClick={(e) => {
          if (props.value === "COUNT") setCountClicked(true);
          else if (props.value === "ADD" || props.value === "UPDATE") {
            setClick({
              ...click,
              [props.value.toLowerCase()]: click[props.value.toLowerCase()] + 1,
            });
            onClick(e, props.value);
          } else onClick(e, props.value);
        }}
        className="button"
      >
        {props.value}
      </button>
    </>
  );
};

export default Button;
