import React from "react";
import { CORE_CONCEPTS } from "../data/data";
import CoreConcept from "./CoreConcept";
function CoreConcepts() {
  return (
    <>
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
    </>
  );
}

export default CoreConcepts;
