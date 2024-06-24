/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Donationstableheader from "./Donationstableheader";
import Donationstableone from "./Donationstableone";
import { Button, SearchField, SelectField, View } from "@aws-amplify/ui-react";
export default function Donationstable(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="976px"
      height="186px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Donationstable")}
      {...rest}
    >
      <Donationstableheader
        width="976px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="32.26%"
        bottom="52.69%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "donations table header")}
      ></Donationstableheader>
      <Donationstableone
        width="976px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="47.31%"
        bottom="26.34%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "donations table one39064663")}
      ></Donationstableone>
      <Donationstableone
        width="976px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="73.66%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "donations table one39064670")}
      ></Donationstableone>
      <SearchField
        width="205px"
        height="unset"
        placeholder="Search"
        position="absolute"
        top="0%"
        bottom="82.26%"
        left="10.45%"
        right="68.55%"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <SelectField
        width="89px"
        height="unset"
        placeholder="Item"
        position="absolute"
        top="0%"
        bottom="82.26%"
        left="0.51%"
        right="90.37%"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="3.23%"
        bottom="79.03%"
        left="85.25%"
        right="2.66%"
        size="small"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
