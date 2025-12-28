import React from "react";

function TabButton({ children, onSelect, isSelected }) {
  return (
    <div>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </div>
  );
}

export default TabButton;
