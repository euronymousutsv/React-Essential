import React from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data/data";
import { useState } from "react";
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
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* Components State managing via useState Hook */}
          {/* Passing function as value in the props */}
          <TabButton
            isSelected={select === "components"}
            onSelect={() => clickHandler("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={select === "jsx"}
            onSelect={() => clickHandler("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={select === "props"}
            onSelect={() => clickHandler("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={select === "state"}
            onSelect={() => clickHandler("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
    </>
  );
}

export default Examples;
