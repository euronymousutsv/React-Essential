import React from "react";

function Section({ title, children, ...props }) {
  return (
    // Section will use id value from props forwarding method
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
