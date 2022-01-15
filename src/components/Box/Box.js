import React, { useState } from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";
import close from "../../assets/close-icon.png";

const Box = ({
  children,
  title,
  handleWindow,
  controlledPosition,
  boxClassName,
  name,
  handleZIndex,
}) => {
  const [state, setState] = useState({
    width: 200,
    height: 200,
    isGrabing: false,
  });

  const onResize = (event, { element, size, handle }) => {
    setState({ width: size.width, height: size.height });
  };

  return (
    <Draggable
      defaultPosition={{
        x: controlledPosition.x + 20,
        y: controlledPosition.y + 20,
      }}
      cancel="span"
    >
      <Resizable
        height={state.height}
        width={state.width}
        onResize={onResize}
        minConstraints={[150, 150]}
      >
        <div
          onDoubleClick={() => handleWindow(name, true)}
          style={{ border: "1px solid black", zIndex: handleZIndex }}
        >
          <div
            className={boxClassName}
            style={{
              width: state.width + "px",
              height: state.height + "px",
              border: boxClassName ? "" : "3px solid silver",
            }}
          >
            <div
              style={{
                width: state.width + "px",
                height: state.height + "px",
                backgroundColor: "silver",
                cursor: state.isGrabing ? "grabbing" : "grab",
              }}
              onMouseDown={() => setState({ ...state, isGrabing: true })}
              onMouseUp={() => setState({ ...state, isGrabing: false })}
            >
              <div style={{ backgroundColor: "navy", height: "20px" }}>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "12px",
                    padding: "5px",
                    cursor: "default",
                  }}
                >
                  {title}
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  fontFamily: "arial",
                  cursor: "pointer",
                }}
              >
                <button
                  style={{ padding: "0", height: "16px", cursor: "pointer" }}
                  onClick={() => handleWindow(name, false)}
                >
                  <img src={close} alt="close" />
                </button>
              </div>
              <div style={{ padding: "5px" }}>{children}</div>
              <span
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  width: "30px",
                  height: "30px",
                  backgroundColor: "tranparent",
                }}
              ></span>
            </div>
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
};

export default Box;
