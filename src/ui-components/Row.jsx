/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Cell from "./Cell";
import { Flex } from "@aws-amplify/ui-react";
export default function Row(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="240px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,0.0001)"
      {...getOverrideProps(overrides, "Row")}
      {...rest}
    >
      <Cell
        display="flex"
        gap="0"
        direction="column"
        width="120px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(185,185,185,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.002)"
        type="Default"
        {...getOverrideProps(overrides, "Cell36923264")}
      ></Cell>
      <Cell
        display="flex"
        gap="0"
        direction="column"
        width="120px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="1px SOLID rgba(185,185,185,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.002)"
        type="Default"
        {...getOverrideProps(overrides, "Cell36923267")}
      ></Cell>
    </Flex>
  );
}
