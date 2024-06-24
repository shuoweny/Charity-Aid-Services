/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import Donationstable from "./Donationstable";
export default function Donations(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1328px"
      height="762px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Donations")}
      {...rest}
    >
      <View
        width="1062px"
        height="762px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="266px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "backg")}
      ></View>
      <Text
                fontSize="40px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="52.08000183105469px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="47px"
        left="297px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Donations"
        {...getOverrideProps(overrides, "Donations37874592")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="976px"
        height="486px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="180px"
        left="297px"
        {...getOverrideProps(overrides, "Transaction History")}
      >
        <View
          width="976px"
          height="486px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Card backg")}
        ></View>
      </View>
      <Donationstable
        width="976px"
        height="186px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="134px"
        left="297px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "donations table")}
      ></Donationstable>
    </View>
  );
}
