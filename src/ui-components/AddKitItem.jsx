/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, SelectField } from "@aws-amplify/ui-react";
export default function AddKitItem(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddKitItem")}
      {...rest}
    >
      <Divider
        width="720px"
        height="1px"
        shrink="0"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="50px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <SelectField
          width="320px"
          height="unset"
          label="Item Name"
          shrink="0"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField39544684")}
        ></SelectField>
        <SelectField
          width="320px"
          height="unset"
          label="Quantity"
          shrink="0"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField39544685")}
        ></SelectField>
      </Flex>
    </Flex>
  );
}
