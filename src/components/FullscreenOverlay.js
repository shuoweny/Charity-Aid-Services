import React from 'react';

export default function FullscreenOverlay(props) {

  const modalStyle = {
    backgroundColor: "rgba(50,50,50,0.5)", position: "absolute",
    zIndex: 1, border: "none",
    display: props.show ? "flex" : "none",
    flexDirection: "column"
  }

  return <div
    width="100%"
    height="100%"
    shrink="0"
    size="default"
    style={modalStyle}
    isDisabled={false}
    labelHidden={true}
    variation="default"
  >
    {props.children}
  </div>;
};