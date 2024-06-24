/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Heading,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddEditItemClothing(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 20px 0px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddEditItemClothing")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="3"
            children="Add/Edit Item"
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Flex
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <TextField
              width="212px"
              height="unset"
              label="Name"
              placeholder="Item name"
              shrink="0"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField39555451")}
            ></TextField>
            <TextField
              width="80px"
              height="unset"
              label="Size"
              placeholder="…"
              shrink="0"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField37135286")}
            ></TextField>
            <SelectField
              width="240px"
              height="unset"
              label="Category"
              placeholder="Category"
              shrink="0"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "SelectField")}
            ></SelectField>
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Save item"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
