import React from "react";
import InputField from "./inputField";
import Button from "./button";
import { messageContext } from "../contexts/messageProvider";

const FormControl = (props) => {
  const { buttonName, form: formArr } = props;
  const [message] = React.useContext(messageContext);

  return (
    <div className="form">
      {formArr ? (
        <form>
          {formArr.map((item, i) => (
            <React.Fragment key={i}>
              <InputField {...item} />
            </React.Fragment>
          ))}
        </form>
      ) : null}
      <Button
        value={buttonName}
        disabled={
          buttonName === "UPDATE" && props.form[1].disabled ? true : false
        }
      />
      {message[buttonName.toLowerCase()] === "Error cccurred" ? (
        <h4 className="error">{message[buttonName.toLowerCase()]}</h4>
      ) : message[buttonName.toLowerCase()] === "" ? null : (
        <h4>{message[buttonName.toLowerCase()]}</h4>
      )}
    </div>
  );
};

export default FormControl;
