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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddEditItemFood(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 20px 0px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddEditItemFood")}
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
        padding="20px 0px 20px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 41137134422")}
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
            gap="15px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <TextField
              width="240px"
              height="unset"
              label="Name"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField37134427")}
            ></TextField>
            <SelectField
              width="240px"
              height="unset"
              label="Category"
              shrink="0"
              placeholder="Placeholder"
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
            {...getOverrideProps(overrides, "Divider37134430")}
          ></Divider>
          <Flex
            gap="15px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 410")}
          >
            <TextField
              width="180px"
              height="unset"
              label="Expiry date"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField37134432")}
            ></TextField>
            <TextField
              width="180px"
              height="unset"
              label="Brand"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField37134433")}
            ></TextField>
            <TextField
              width="180px"
              height="unset"
              label="Amount per unit"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField37134434")}
            ></TextField>
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider39556091")}
          ></Divider>
          <Flex
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 41137134435")}
          >
            <TextAreaField
              width="240px"
              height="unset"
              label="Main ingredients"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextAreaField37134437")}
            ></TextAreaField>
            <TextAreaField
              width="240px"
              height="unset"
              label="Allergens"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextAreaField39556022")}
            ></TextAreaField>
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider39556237")}
          ></Divider>
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
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
