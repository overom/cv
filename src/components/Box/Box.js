import React from "react";
import { useState } from "react/cjs/react.development";
import close from "../../assets/close-icon.png";
import Draggable from "react-draggable";

const { Resizable } = require("react-resizable");

const Box = ({ title, content, toggleWindow, controlledPosition }) => {
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
          style={{
            width: state.width + "px",
            height: state.height + "px",
          }}
        >
          <div
            style={{
              width: state.width + "px",
              height: state.height + "px",
              backgroundColor: "silver",
              cursor: state.isGrabing ? "grabbing" : "grab",
            }}
            onMouseDown={() => setState({ isGrabing: true })}
            onMouseUp={() => setState({ isGrabing: false })}
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
                top: "2px",
                right: "2px",
                fontFamily: "arial",
                cursor: "pointer",
              }}
            >
              <button
                style={{ padding: "0", height: "16px", cursor: "pointer" }}
                onClick={toggleWindow}
              >
                <img src={close} alt="close" />
              </button>
            </div>
            <div style={{ padding: "5px" }}>{content}</div>
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
      </Resizable>
    </Draggable>
  );
};

export default Box;
