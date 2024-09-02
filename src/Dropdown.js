import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["React", "Node", "MongoDB", "Express", "jQuery"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        {/* <span className="fas fa-caret-down"></span> */}
        <AiOutlineCaretDown />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, i) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
              key={i}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
