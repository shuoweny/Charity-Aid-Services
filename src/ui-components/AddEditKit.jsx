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
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import AddKitItem from "./AddKitItem";
export default function AddEditKit(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddEditKit")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 41137003935")}
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
          padding="0px 60px 0px 60px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="3"
            children="Add/Edit Kit"
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children=""
              {...getOverrideProps(overrides, "Info37003939")}
            ></Text>
            <TextField
              width="328px"
              height="unset"
              label="Kit Name"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
          </Flex>
          <AddKitItem
            display="flex"
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "AddKitItem")}
          ></AddKitItem>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider37133633")}
          ></Divider>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 41137133634")}
          >
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children=""
              {...getOverrideProps(overrides, "Info37133635")}
            ></Text>
            <Button
              width="330px"
              height="unset"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="default"
              children="Add Item"
              {...getOverrideProps(overrides, "Button37133636")}
            ></Button>
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider37044015")}
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
              children="Save category"
              {...getOverrideProps(overrides, "Button37003947")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
