/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function InputBox(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="169px"
      height="65px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "InputBox")}
      {...rest}
    >
      <View
        width="169px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33.85%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="38px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,0.6)"
        {...getOverrideProps(overrides, "inputBox")}
      ></View>
      <Text
                fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="22px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="66.15%"
        left="10.06%"
        right="71.01%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Age"
        {...getOverrideProps(overrides, "Age")}
      ></Text>
    </View>
  );
}
