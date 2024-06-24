/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SearchBar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="585px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SearchBar")}
      {...rest}
    >
      <View
        width="585px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Form")}
      ></View>
      <View
        width="23.16px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="25%"
        bottom="25%"
        left="90.6%"
        right="5.44%"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "bx:bx-search")}
      >
        <Icon
          width="18.05px"
          height="18.71px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 18.0537109375,
            height: 18.7080078125,
          }}
          paths={[
            {
              d: "M7.72077 16C9.43379 15.9996 11.0974 15.4054 12.4468 14.312L16.6894 18.708L18.054 17.294L13.8115 12.898C14.8673 11.4997 15.4411 9.77544 15.4415 8C15.4415 3.589 11.9778 0 7.72077 0C3.46373 0 0 3.589 0 8C0 12.411 3.46373 16 7.72077 16ZM7.72077 2C10.9143 2 13.5113 4.691 13.5113 8C13.5113 11.309 10.9143 14 7.72077 14C4.52726 14 1.93019 11.309 1.93019 8C1.93019 4.691 4.52726 2 7.72077 2Z",
              fill: "rgba(153,153,153,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="13.72%"
          left="8.33%"
          right="13.72%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
                fontSize="14px"
        fontWeight="400"
        color="rgba(153,153,153,1)"
        lineHeight="18.22800064086914px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31.25%"
        bottom="31.25%"
        left="5.47%"
        right="85.47%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Search..."
        {...getOverrideProps(overrides, "Search...")}
      ></Text>
    </View>
  );
}
