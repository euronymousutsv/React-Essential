import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data/data.js";
import { useState } from "react";
import { EXAMPLES } from "./data/data.js";
function App() {
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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Updating Content Dunamically */}
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
            {/* {CORE_CONCEPTS.map((item) => {
              <CoreConcept {...item} />;
            })}

            Passing Props 
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
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
      </main>
    </div>
  );
}

export default App;
