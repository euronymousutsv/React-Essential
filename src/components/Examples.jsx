import React from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data/data";
import { useState } from "react";
import Tabs from "./Tabs";
import Section from "./Section";
function Examples() {
  const [select, setSelect] = useState("");
  const clickHandler = (description) => {
    setSelect(description);
  };
  // Rendering content conditionally use of ternary operator and variables
  let tabContent = !select ? (
    <p>Please select content</p>
  ) : (
    <div id="tab-content">
      <h3>{EXAMPLES[select].title}</h3>
      <p>{EXAMPLES[select].description}</p>
      <pre>
        <code>{EXAMPLES[select].code}</code>
      </pre>
    </div>
  );
  return (
    <>
      <Section title="Examples" id="examples">
        {/* Created Tabs component to wrap the element. Common pattern of sending multiple JSX Slots.  */}
        <Tabs
          // string value for built-in components and {Section} value for custom Component
          // ButtonsContainer="menu" // component identifier is set to menu as default in Tabs Component.
          buttons={
            <>
              {/* Components State managing via useState Hook */}
              {/* Passing function as value in the props */}
              <TabButton
                isSelected={select === "components"}
                onClick={() => clickHandler("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={select === "jsx"}
                //onSelect={() => clickHandler("jsx")}
                //forwarding click event as props to Tab Button
                onClick={() => clickHandler("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={select === "props"}
                onClick={() => clickHandler("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={select === "state"}
                onClick={() => clickHandler("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    </>
  );
}

export default Examples;
