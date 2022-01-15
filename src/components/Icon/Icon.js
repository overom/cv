import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import Box from "../Box/Box";
import "./icon.css";

const Icon = ({
  children,
  position,
  onDrag,
  iconClassName,
  showWindow,
  name,
  boxClassName,
  handleWindow,
  handleZIndex,
  title,
  iconTitle,
}) => {
  const [newIconTitle, setNewIconTitle] = useState("");

  useEffect(() => {
    setNewIconTitle(iconTitle.split(" ").map((elt) => [elt, <br />]));
  }, []);

  return (
    <>
      <div onDoubleClick={() => handleWindow(name, true)}>
        <Draggable position={position} onDrag={(e, p) => onDrag(e, p, name)}>
          <div>
            <div className={"icon " + iconClassName} />
            <div className="icon-title">{newIconTitle}</div>
          </div>
        </Draggable>
      </div>

      {showWindow && (
        <Box
          name={name}
          title={title}
          handleWindow={handleWindow}
          controlledPosition={position}
          boxClassName={boxClassName}
          handleZIndex={handleZIndex}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default Icon;
