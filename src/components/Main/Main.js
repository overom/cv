import React, { useState } from "react";
import Icon from "../Icon/Icon";

import "./main.css";

const Main = () => {
  const [showDesktopWindow, setShowDesktopWindow] = useState(false);
  //   const [controlledPosition, setControlledPosition] = useState({
  //     desktop: { x: 40, y: 40 },
  //     files: { x: 40, y: 40 },
  //   });

  const [controlledPosition, setControlledPosition] = useState({
    x: 40,
    y: 40,
  });

  const [desktopControlledPosition, setDesktopControlledPosition] = useState({
    x: 40,
    y: 40,
  });

  const toggleDesktopWindow = () => {
    setShowDesktopWindow(!showDesktopWindow);
  };

  const onControlledDrag = (e, position) => {
    const { x, y } = position;
    setControlledPosition({ x, y });
  };

  const onControlledDragDesktop = (e, position) => {
    const { x, y } = position;
    setDesktopControlledPosition({ x, y });
  };

  return (
    <div>
      <Icon
        iconClassName="desktop-icon-background"
        position={desktopControlledPosition}
        onDrag={onControlledDragDesktop}
        onClick={toggleDesktopWindow}
        toggleWindow={toggleDesktopWindow}
        showWindow={showDesktopWindow}
      />

      <Icon
        iconClassName="folder-icon-background"
        position={controlledPosition}
        onDrag={onControlledDrag}
      />
    </div>
  );
};

export default Main;
