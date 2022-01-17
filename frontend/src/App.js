import "./styles.css";
import Container from "./components/container";
import contents from "./contents.json";
import React from "react";
import StateProvider from "./contexts/stateProvider";
import ClickProvider from "./contexts/clickProvider";
import CountClickedProvider from "./contexts/countClickedProvider";
import MessageProvider from "./contexts/messageProvider";

export default function App() {
  return (
    <div className="App">
      <h2>
        IN THIS PAGE, YOU CAN ADD, UPDATE DATA, CHECK THE COUNT AND RESIZE THE
        FORM BOXES
      </h2>
      <StateProvider>
        <ClickProvider>
          <CountClickedProvider>
            <MessageProvider>
              {Object.keys(contents).map((property, i) => (
                <React.Fragment key={i}>
                  <Container {...contents[property]} />
                </React.Fragment>
              ))}
            </MessageProvider>
          </CountClickedProvider>
        </ClickProvider>
      </StateProvider>
    </div>
  );
}
