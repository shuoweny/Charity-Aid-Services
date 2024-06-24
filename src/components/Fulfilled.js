/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import '../App.css';

import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Text, View } from "@aws-amplify/ui-react";
export default function Fulfilled(props) {
  const [btnText, setBtnText] = useState("Is fulfilled?");

  if (props.fulfilled) return (
    <Text
      className="donationTableLine" fontSize="18px" fontWeight="700" color="rgba(4,125,149,1)"
      lineHeight="23.43600082397461px" textAlign="left" display="block" direction="column" justifyContent="unset"
      width="150px" height="30px" gap="unset" alignItems="unset" position="absolute" top="26.53%" bottom="26.53%"
      left="84.62%" padding="0px 0px 0px 0px" overflow= "auto" whiteSpace="nowrap" children="✓"
  ></Text>
  );
  else return (
    <>
      <Text
        className="donationTableLine" fontSize="18px" fontWeight="700" color="rgba(4,125,149,1)"
        lineHeight="23.43600082397461px" textAlign="left" display="block" direction="column" justifyContent="unset"
        width="150px" height="30px" gap="unset" alignItems="unset" position="absolute" top="26.53%" bottom="26.53%"
        left="84.62%" padding="0px 0px 0px 0px" overflow= "auto" whiteSpace="nowrap" children="✕"
      ></Text>
      <Button
        className="donationTableLine" fontSize="16px" fontWeight="500" color="rgba(153,153,153,1)"
        lineHeight="23.43600082397461px" textAlign="left" display="flex" alignItems="center"
        width="112px" height="unset" gap="unset" position="absolute" top="21%" disabled={btnText == "Loading…"}
        left="87.62%" padding="2px 5px" overflow= "auto" whiteSpace="pre-wrap" children={btnText}
        onMouseEnter={() => setBtnText("Mark Fulfilled")} onMouseLeave={() => setBtnText("Is fulfilled?")}
        onClick={() => {setBtnText("Loading…"); props.fulfillReq()}}
        />
    </>
  );
}