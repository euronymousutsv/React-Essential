import React from "react";
//Forwarding props

// function TabButton({ children, onSelect, isSelected }) {
function TabButton({ children, isSelected, ...props }) {
  return (
    <div>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </div>
  );
}

export default TabButton;
