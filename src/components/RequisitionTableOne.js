/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import '../App.css';

import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Text, View, Button } from "@aws-amplify/ui-react";
import { Fulfilled } from ".";
import { updateRequisition } from "../utils/apiUtils";
import { MyIcon } from "../ui-components";
export default function RequisitionTableOne(props) {
  const { overrides, ...rest } = props;

  const fulfillReq = async () => {
    var data = { id: props.data.id, fulfilled: true, _version: props.data._version };
    await updateRequisition(props.data.id, data);
    await new Promise(r => setTimeout(r, 2500));
    await props.fetchRequisitions(props.setRequisitions);

    // TODO update stock
  };
  
  return (
    <View
      width="976px" height="49px" display="block" gap="unset" alignItems="unset"
      justifyContent="unset" position="relative" padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Donationstableone")}
      {...rest}
    >
      <Text
        fontSize="18px" fontWeight="400" color="rgba(51,51,51,1)"
        textAlign="left" display="block" direction="column" justifyContent="unset" width="200px"
        height="32px" gap="unset" alignItems="unset" position="absolute" top="30.21%" 
        left="47.3%" right="49.97%" padding="0px 0px 0px 0px" overflow="auto" whiteSpace="nowrap"
        children={props.data.kits}
        {...getOverrideProps(overrides, "Footwear")}
      ></Text>
      {
        props.data.notes == null || props.data.notes.trim() == ""
        ?
        <Text
          fontSize="18px" fontWeight="400" color="rgba(51,51,51,1)" border="none"
          lineHeight="23.43600082397461px" textAlign="left" display="block" direction="column" justifyContent="unset"
          width="30px" height="30px" gap="unset" alignItems="unset" position="absolute" top="30.75%"
          bottom="39.09%" left="69.65%" right="35.81%" padding="0px 0px 0px 0px" overflow="visible" whiteSpace="nowrap"
          children="(None)"
        />
        :
        <Button
        fontSize="18px" fontWeight="400" color="rgba(51,51,51,1)" border="none"
        lineHeight="23.43600082397461px" textAlign="left" display="block" direction="column" justifyContent="unset"
        width="30px" height="30px" gap="unset" alignItems="unset" position="absolute" top="30.75%"
        bottom="39.09%" left="70.95%" right="35.81%" padding="0px 0px 0px 0px" overflow="auto" whiteSpace="nowrap"
        onClick={() => alert(props.data.notes)} {...getOverrideProps(overrides, "1")}
      >
        <MyIcon type="info" position="absolute" 
          left="8%" top="8%" 
        />
      </Button>
      }
      <Text
        fontSize="18px" fontWeight="400" color="rgba(51,51,51,1)"
        lineHeight="23.43600082397461px" textAlign="left" display="block" direction="column" justifyContent="unset"
        width="225px" height="30px" gap="unset" alignItems="unset" position="absolute" top="30.61%" bottom="38.78%"
        left="21.05%" right="65.14%" padding="0px 0px 0px 0px" overflow= "auto" whiteSpace="nowrap"
        children={props.data.items}
        {...getOverrideProps(overrides, "shoes")}
      ></Text>
      <Text
        fontSize="18px" fontWeight="700" color="rgba(4,125,149,1)"
        lineHeight="23.43600082397461px" textAlign="left" display="block" direction="column" justifyContent="unset"
        width="150px" height="30px" gap="unset" alignItems="unset" position="absolute" top="34.69%" bottom="26.53%"
        left="3.79%" right="84.02%" padding="0px 0px 0px 0px" whiteSpace="nowrap" style={{overflowY: "hide", overflowX: "auto"}}
        children={props.data.recipientName}
      ></Text>
      <Fulfilled fulfilled={props.data.fulfilled} fulfillReq={fulfillReq}/>
      <Divider
        width="976px" height="1px" position="absolute" top="100%" bottom="-2.04%" left="0%" right="0%"
        size="small" orientation="horizontal" {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </View>
  );
}
