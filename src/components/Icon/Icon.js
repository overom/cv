import React from "react";
import Draggable from "react-draggable";
import Box from "../Box/Box";

const Icon = ({
  onOpen,
  onClose,
  position,
  onDrag,
  iconClassName,
  showWindow,
  name,
}) => {
  return (
    <>
      <div onDoubleClick={onOpen}>
        <Draggable position={position} onDrag={(e, p) => onDrag(e, p, name)}>
          <div className={iconClassName} />
        </Draggable>
      </div>

      {showWindow && (
        <Box
          title="Windows CV viewer"
          content="Helloooo"
          onClose={onClose}
          controlledPosition={position}
        />
      )}
    </>
  );
};

export default Icon;
