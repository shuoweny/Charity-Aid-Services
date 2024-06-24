/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
export default function CategoryOne(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1000px"
      height="62px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CategoryOne")}
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
        top="30.65%"
        bottom="30.65%"
        left="3%"
        right="94.6%"
        padding="0px 0px 0px 0px"
        type="edit"
        {...getOverrideProps(overrides, "MyIcon")}
      ></MyIcon>
      <Flex
        gap="116px"
        direction="row"
        width="900px"
        height="63px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="-1.61%"
        bottom="0%"
        left="10%"
        right="0%"
        padding="0px 54px 0px 54px"
        {...getOverrideProps(overrides, "Frame 999")}
      >
        <Text
                    fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
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
          children="Name"
          {...getOverrideProps(overrides, "Name")}
        ></Text>
        <Text
                    fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
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
          children="(Low / Medium / High / Excess)"
          {...getOverrideProps(overrides, "(Low / Medium / High / Excess)")}
        ></Text>
        <Text
                    fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
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
          children="—"
          {...getOverrideProps(overrides, "\u2014")}
        ></Text>
      </Flex>
      <Button
        width="42px"
        height="42px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,0)"
        top="16.13%"
        bottom="16.13%"
        left="2.1%"
        right="93.7%"
        size="default"
        isDisabled={false}
        variation="default"
        children=""
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
