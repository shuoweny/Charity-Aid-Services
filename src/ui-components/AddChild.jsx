/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField } from "@aws-amplify/ui-react";
export default function AddChild(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="75px"
      direction="row"
      width="433px"
      height="89px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="45px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddChild")}
      {...rest}
    >
      <TextField
        width="168px"
        height="unset"
        label="Child’s Name"
        placeholder="Enter…"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39034805")}
      ></TextField>
      <TextField
        width="168px"
        height="unset"
        label="Child’s Age"
        placeholder="Enter…"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39034812")}
      ></TextField>
    </Flex>
  );
}
