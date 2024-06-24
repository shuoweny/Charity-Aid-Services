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
  Flex,
  Heading,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import AddChild from "./AddChild";
export default function AddRecipientPage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="-1px"
      direction="column"
      width="983px"
      height="615px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddRecipientPage")}
      {...rest}
    >
      <Heading
        width="239px"
        height="56px"
        shrink="0"
        level="1"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Flex
        gap="-1px"
        direction="column"
        width="983px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="45px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Frame 1011")}
      >
        <Flex
          gap="75px"
          direction="row"
          width="983px"
          height="89px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45px"
          padding="0px 17px 0px 17px"
          {...getOverrideProps(overrides, "frame39034862")}
        >
          <TextField
            width="168px"
            height="unset"
            label="Name*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034880")}
          ></TextField>
          <TextField
            width="168px"
            height="unset"
            label="Age*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034887")}
          ></TextField>
          <TextField
            width="438px"
            height="unset"
            label="Previous Address*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034894")}
          ></TextField>
        </Flex>
        <Flex
          gap="37px"
          direction="row"
          width="983px"
          height="89px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "frame39034863")}
        >
          <SelectField
            width="168px"
            height="unset"
            label="Nationality*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField39035206")}
          ></SelectField>
          <SelectField
            width="168px"
            height="unset"
            label="ID Type*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField39035221")}
          ></SelectField>
          <TextField
            width="203px"
            height="unset"
            label="Expiry date*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034947")}
          ></TextField>
          <Flex
            gap="8px"
            direction="column"
            width="203px"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TextField39034961")}
          >
            <Text
                            fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Supporting Documents"
              {...getOverrideProps(overrides, "label")}
            ></Text>
            <Button
              width="170px"
              height="unset"
              borderRadius="38px"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Upload File"
              {...getOverrideProps(overrides, "Button39034974")}
            ></Button>
          </Flex>
        </Flex>
        <Flex
          gap="75px"
          direction="row"
          width="983px"
          height="89px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "frame39034878")}
        >
          <SelectField
            width="235px"
            height="unset"
            label="Number of family members*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField39035239")}
          ></SelectField>
          <TextField
            width="324px"
            height="unset"
            label="Name of partner"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034994")}
          ></TextField>
          <TextField
            width="169px"
            height="unset"
            label="Age of partner"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39035001")}
          ></TextField>
        </Flex>
        <Flex
          gap="75px"
          direction="row"
          width="983px"
          height="89px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "frame39034879")}
        >
          <AddChild
            display="flex"
            gap="75px"
            direction="row"
            width="433px"
            height="89px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="45px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "AddChild")}
          ></AddChild>
        </Flex>
        <Flex
          gap="75px"
          direction="row"
          width="983px"
          height="89px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "frame39035013")}
        >
          <Button
            width="unset"
            height="unset"
            borderRadius="39px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="default"
            children="Cancel"
            {...getOverrideProps(overrides, "Button39035019")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            borderRadius="38px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Submit"
            {...getOverrideProps(overrides, "Button39035023")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
