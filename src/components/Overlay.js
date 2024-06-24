import React from 'react';

export default function Overlay(props) {

  const modalStyle = {
    backgroundColor: "rgba(50,50,50,0.8)", position: "absolute",
    zIndex: 99, width: "100%", height: "70%", border: "none",
    display: props.show ? "flex" : "none",
    flexDirection: "column", alignItems: "center", justifyContent: "center"
  }

  return <div
    id="modal-overlay"
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