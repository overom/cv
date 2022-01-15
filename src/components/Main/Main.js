import React, { useState } from "react";
import Icon from "../Icon/Icon";

import "./main.css";

const Main = () => {
  const [showWindow, setShowWindow] = useState({
    desktop: false,
    files: false,
    briefcase: false,
    contact: false,
  });
  const [controlledPosition, setControlledPosition] = useState({
    desktop: { x: 40, y: 40 },
    files: { x: 40, y: 40 },
    briefcase: { x: 40, y: 40 },
    contact: { x: 40, y: 40 },
  });
  const [boxClassName, setBoxClassName] = useState({
    desktop: "",
    files: "",
    briefcase: "",
    contact: "",
  });

  const [handleZIndex, setHandleZIndex] = useState({ desktop: 1, files: 1 });

  const handleWindow = (name, bool) => {
    Object.keys(handleZIndex).forEach((elt) => {
      if (elt === name) {
        handleZIndex[elt] = 1;
      } else {
        handleZIndex[elt] = 0;
      }
    });

    setHandleZIndex({ ...handleZIndex, [name]: handleZIndex[name] + 1 });
    if (showWindow[name] && bool) {
      console.log("======name==============================");
      console.log(name);
      console.log("====================================");
      setBoxClassName({ ...boxClassName, [name]: "alerts-border" });
      setTimeout(() => {
        setBoxClassName({ ...boxClassName, [name]: "" });
      }, 500);
    }
    setShowWindow({ ...showWindow, [name]: bool });
  };

  const onControlledDrag = (e, position, name) => {
    const { x, y } = position;
    setControlledPosition({ ...controlledPosition, [name]: { x, y } });
  };

  return (
    <div>
      <Icon
        name="desktop"
        iconClassName="desktop-icon-background"
        boxClassName={boxClassName.desktop}
        position={controlledPosition.desktop}
        onDrag={onControlledDrag}
        showWindow={showWindow.desktop}
        handleWindow={handleWindow}
        handleZIndex={handleZIndex.desktop}
        title="Windows CV Viewer"
        iconTitle="Présentation"
      >
        Hello content
      </Icon>

      <Icon
        name="files"
        iconClassName="folder-icon-background"
        boxClassName={boxClassName.files}
        position={controlledPosition.files}
        onDrag={onControlledDrag}
        showWindow={showWindow.files}
        handleWindow={handleWindow}
        handleZIndex={handleZIndex.files}
        title="Windows Projects Viewer"
        iconTitle="Personnal Projects"
      >
        Hello content
      </Icon>

      <Icon
        name="contact"
        iconClassName="folder-contact-background"
        boxClassName={boxClassName.contact}
        position={controlledPosition.contact}
        onDrag={onControlledDrag}
        showWindow={showWindow.contact}
        handleWindow={handleWindow}
        handleZIndex={handleZIndex.contact}
        title="Windows Contact Viewer"
        iconTitle="Contact"
      >
        Hello content
      </Icon>

      <Icon
        name="briefcase"
        iconClassName="folder-briefcase-background"
        boxClassName={boxClassName.briefcase}
        position={controlledPosition.briefcase}
        onDrag={onControlledDrag}
        showWindow={showWindow.briefcase}
        handleWindow={handleWindow}
        handleZIndex={handleZIndex.briefcase}
        title="Windows Professional Work Viewer"
        iconTitle="Professional Projects"
      >
        Hello content
      </Icon>
    </div>
  );
};

export default Main;
