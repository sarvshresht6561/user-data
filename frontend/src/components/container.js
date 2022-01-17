import React from "react";
import FormControl from "./form";
import Button from "./button";
import { clickContext } from "../contexts/clickProvider";
import { countClickedContext } from "../contexts/countClickedProvider";

const Container = (props) => {
  const [countClicked, setCountClicked] = React.useContext(countClickedContext);
  const [click] = React.useContext(clickContext);

  return (
    <div className="container">
      {props.buttonName === "COUNT" ? (
        <>
          <h2>{props.heading}</h2>
          <Button value={props.buttonName} />
          {countClicked === true ? <h2>{click.add + click.update}</h2> : null}
        </>
      ) : (
        <FormControl {...props} />
      )}
    </div>
  );
};

export default Container;
