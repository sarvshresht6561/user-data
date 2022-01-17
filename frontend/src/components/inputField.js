import React from "react";
import { stateContext } from "../contexts/stateProvider";

const InputField = (props) => {
  const [state, setState] = React.useContext(stateContext);
  const { label, buttonName, ...rest } = props;
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        {...rest}
        onChange={(e) => setState({ ...state, [rest.name]: e.target.value })}
      />
    </div>
  );
};

export default InputField;
