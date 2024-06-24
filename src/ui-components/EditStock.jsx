/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Button, TextField, View } from "@aws-amplify/ui-react";
export default function EditStock(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="75px"
      height="33px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EditStock")}
      {...rest}
    >
      <MyIcon
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="12.12%"
        bottom="15.15%"
        left="68%"
        right="0%"
        padding="0px 0px 0px 0px"
        type="save"
        {...getOverrideProps(overrides, "MyIcon")}
      ></MyIcon>
      <Button
        width="26px"
        height="26px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,0)"
        top="9.09%"
        bottom="12.12%"
        left="66.67%"
        right="-1.33%"
        size="default"
        isDisabled={false}
        variation="default"
        children=""
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <TextField
        width="48px"
        height="unset"
        placeholder="##"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="36%"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </View>
  );
}
