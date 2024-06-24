/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, TextField } from "@aws-amplify/ui-react";
export default function AddDonorPageOrganisation(props) {
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
      {...getOverrideProps(overrides, "AddDonorPageOrganisation")}
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
          gap="60px"
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
            width="522px"
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
            width="291px"
            height="unset"
            label="Contact Number*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034887")}
          ></TextField>
        </Flex>
        <Flex
          gap="60px"
          direction="row"
          width="983px"
          height="89px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45px"
          padding="0px 17px 0px 17px"
          {...getOverrideProps(overrides, "frame39374889")}
        >
          <TextField
            width="537px"
            height="unset"
            label="Address*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034894")}
          ></TextField>
          <TextField
            width="279px"
            height="unset"
            label="Australia Business Number*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39374890")}
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
