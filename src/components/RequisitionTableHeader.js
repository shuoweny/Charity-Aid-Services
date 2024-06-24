/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Text, View } from "@aws-amplify/ui-react";
export default function RequisitionTableHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="976px"
      height="28px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Donationstableheader")}
      {...rest}
    >
      <Divider
        width="976px"
        height="1px"
        position="absolute"
        top="28px"
        left="0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <View
        padding="0px 0px 0px 0px"
        width="852.47px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="4%"
        right="8.66%"
        {...getOverrideProps(overrides, "Header")}
      >
        <Text
          fontSize="18px"
          fontWeight="400"
          color="rgba(153,153,153,1)"
          lineHeight="23.43600082397461px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="99px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="89.34%"
          padding="0px 0px 0px 0px"
          whiteSpace="nowrap"
          children="Recipient Name"
          {...getOverrideProps(overrides, "ID")}
        ></Text>
        <Text
                    fontSize="18px"
          fontWeight="400"
          color="rgba(153,153,153,1)"
          lineHeight="23.43600082397461px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="150px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="19.88%"
          right="67.9%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Items"
          {...getOverrideProps(overrides, "Name")}
        ></Text>
        <Text
                    fontSize="18px"
          fontWeight="400"
          color="rgba(153,153,153,1)"
          lineHeight="23.43600082397461px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="132.72px"
          height="18px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="35.71%"
          left="49.44%"
          right="42.99%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Kits"
          {...getOverrideProps(overrides, "Category")}
        ></Text>
        <Text
                    fontSize="18px"
          fontWeight="400"
          color="rgba(153,153,153,1)"
          lineHeight="23.43600082397461px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="133.74px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="75.51%"
          right="18.8%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Notes"
          {...getOverrideProps(overrides, "Quantity")}
        ></Text>
        <Text
                    fontSize="18px"
          fontWeight="400"
          color="rgba(153,153,153,1)"
          lineHeight="23.43600082397461px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="91.88px"
          height="28px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="89.22%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Fulfilled?"
          {...getOverrideProps(overrides, "Donor")}
        ></Text>
      </View>
    </View>
  );
}
