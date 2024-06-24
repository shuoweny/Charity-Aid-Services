/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
export default function StockLayout(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1062px"
      height="148px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "StockLayout")}
      {...rest}
    >
      <Flex
        gap="65px"
        direction="row"
        width="1062px"
        height="148px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 101px 0px 101px"
        {...getOverrideProps(overrides, "Frame 999")}
      >
        <Heading
          width="unset"
          height="unset"
          justifyContent="flex-start"
          shrink="0"
          level="1"
          children="Current Stock"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
        <Button
          width="116px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Add item"
          {...getOverrideProps(overrides, "Button37365439")}
        ></Button>
        <Button
          width="157px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Add category"
          {...getOverrideProps(overrides, "Button37365437")}
        ></Button>
        <Button
          width="99px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Add kit"
          {...getOverrideProps(overrides, "Button37365438")}
        ></Button>
      </Flex>
    </View>
  );
}
