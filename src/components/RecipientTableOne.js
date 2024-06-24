/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import '../App.css';

import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Text, View } from "@aws-amplify/ui-react";
export default function RecipientTableOne(props) {
  const { overrides, ...rest } = props;
  // console.log("props",props.data);
  return (
    <View
      width="976px"
      height="49px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Donationstableone")}
      {...rest}
    >
      <Text
                fontSize="18px"
        fontWeight="400"
        color="rgba(51,51,51,1)"
        lineHeight="23.43600082397461px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.61%"
        bottom="38.78%"
        left="35%"
        right="49.97%"
        padding="0px 0px 0px 0px"
        overflow= "auto"
        whiteSpace="nowrap"
        children={props.data.partner}
        {...getOverrideProps(overrides, "Footwear")}
      ></Text>
      <Text
        className="donationTableLine"
                // fontSize="18px"
        // fontWeight="700"
        // color="rgba(4,125,149,1)"
        // lineHeight="23.43600082397461px"
        fontSize="18px"
        fontWeight="400"
        color="rgba(51,51,51,1)"
        lineHeight="23.43600082397461px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.75%"
        bottom="39.09%"
        left="54%"
        right="35.81%"
        padding="0px 0px 0px 0px"
        overflow= "auto"
        whiteSpace="nowrap"
        children={props.data.familyCount}
        {...getOverrideProps(overrides, "1")}
      ></Text>
      <Text
        className="donationTableLine"
                fontSize="18px"
        fontWeight="500"
        color="rgba(4,125,149,1)"
        lineHeight="23.43600082397461px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30.61%"
        bottom="38.78%"
        left="24.5%"
        right="65.14%"
        padding="0px 0px 0px 0px"
        overflow= "auto"
        whiteSpace="nowrap"
        children={props.data.age}
        {...getOverrideProps(overrides, "role")}
      ></Text>
      <Text
        className="donationTableLine"
        //         // fontSize="18px"
        // fontWeight="400"
        // color="rgba(153,153,153,1)"
        // lineHeight="23.43600082397461px"
                fontSize="18px"
        fontWeight="700"
        color="rgba(4,125,149,1)"
        lineHeight="23.43600082397461px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="34.69%"
        bottom="26.53%"
        left="3.79%"
        right="84.02%"
        padding="0px 0px 0px 0px"
        style={{overflowY: "hidden", overflowX: "auto"}}
        whiteSpace="nowrap"
        children={props.data.name}
        {...getOverrideProps(overrides, "donorName")}
      ></Text>
      <Text
        className="donationTableLine"
                // fontSize="18px"
        // fontWeight="500"
        // color="rgba(153,153,153,1)"
        // lineHeight="23.43600082397461px"
        fontSize="18px"
        fontWeight="400"
        color="rgba(51,51,51,1)"
        lineHeight="23.43600082397461px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="150px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="26.53%"
        bottom="26.53%"
        left="70%"
        right="10.96%"
        padding="0px 0px 0px 0px"
        overflow= "auto"
        whiteSpace="nowrap"
        children={props.data.Address}
        {...getOverrideProps(overrides, "James S")}
      ></Text>
      <Divider
        width="976px"
        height="1px"
        position="absolute"
        top="100%"
        bottom="-2.04%"
        left="0%"
        right="0%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </View>
  );
}
