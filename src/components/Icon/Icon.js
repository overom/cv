import React from "react";
import Draggable from "react-draggable";
import Box from "../Box/Box";

const Icon = ({
  onClick,
  position,
  onDrag,
  iconClassName,
  toggleWindow,
  showWindow,
}) => {
  return (
    <>
      <div onClick={onClick}>
        <Draggable position={position} onDrag={onDrag}>
          <div className={iconClassName} />
        </Draggable>
      </div>

      {showWindow && (
        <Box
          title="Windows CV viewer"
          content="Helloooo"
          toggleWindow={toggleWindow}
          controlledPosition={position}
        />
      )}
    </>
  );
};

export default Icon;
