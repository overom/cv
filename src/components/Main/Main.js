import React, { useState } from "react";
import Icon from "../Icon/Icon";

import "./main.css";

const Main = () => {
  const [showDesktopWindow, setShowDesktopWindow] = useState(false);
  const [showFilesWindow, setShowFilesWindow] = useState(false);
  const [controlledPosition, setControlledPosition] = useState({
    desktop: { x: 40, y: 40 },
    files: { x: 40, y: 40 },
  });

  const onOpenDesktopWindow = () => {
    setShowDesktopWindow(true);
  };

  const onOpenFilesWindow = () => {
    setShowFilesWindow(true);
  };

  const onCloseFilesWindow = () => {
    setShowFilesWindow(false);
  };

  const onCloseDesktopWindow = () => {
    setShowDesktopWindow(false);
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
        position={controlledPosition.desktop}
        onDrag={onControlledDrag}
        onOpen={onOpenDesktopWindow}
        onClose={onCloseDesktopWindow}
        showWindow={showDesktopWindow}
      />

      <Icon
        name="files"
        iconClassName="folder-icon-background"
        position={controlledPosition.files}
        onDrag={onControlledDrag}
        onOpen={onOpenFilesWindow}
        onClose={onCloseFilesWindow}
        showWindow={showFilesWindow}
      />
    </div>
  );
};

export default Main;
