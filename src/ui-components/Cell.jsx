/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Cell(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { type: "Default" },
      overrides: { Text: {}, Content: {}, Cell: {} },
    },
    {
      variantValues: { type: "Header" },
      overrides: {
        Text: { fontWeight: "600" },
        Content: {},
        Cell: { backgroundColor: "rgba(0,0,0,0.06)" },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="120px"
      height="36px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(185,185,185,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0.002)"
      display="flex"
      {...getOverrideProps(overrides, "Cell")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 12px 10px 12px"
        display="flex"
        {...getOverrideProps(overrides, "Content")}
      >
        <Text
                    fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.59999942779541px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children=""
          {...getOverrideProps(overrides, "Text")}
        ></Text>
      </Flex>
    </Flex>
  );
}
