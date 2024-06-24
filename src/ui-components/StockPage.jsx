/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import StockLayout from "./StockLayout";
import { Text, View } from "@aws-amplify/ui-react";
import StockItemPage from "./StockItemPage";
export default function StockPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1062px"
      height="762px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StockPage")}
      {...rest}
    >
      <StockLayout
        width="1062px"
        height="148px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "StockLayout")}
      ></StockLayout>
      <Text
                fontSize="64px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="77.45454406738281px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1907px"
        left="1620px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Admin access"
        {...getOverrideProps(overrides, "Admin access")}
      ></Text>
      <Text
                fontSize="64px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="77.45454406738281px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2459px"
        left="1641px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Volunteer Admin"
        {...getOverrideProps(overrides, "Volunteer Admin")}
      ></Text>
      <StockItemPage
        width="1062px"
        height="614px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="148px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "StockItemPage")}
      ></StockItemPage>
    </View>
  );
}
