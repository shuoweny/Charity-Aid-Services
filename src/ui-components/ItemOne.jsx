/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ItemOne(props) {
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
      {...getOverrideProps(overrides, "ItemOne")}
      {...rest}
    >
      <Flex
        gap="105px"
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
        padding="0px 45px 0px 45px"
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
          children="Category"
          {...getOverrideProps(overrides, "Category")}
        ></Text>
        <Flex
          gap="5px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 1000")}
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
            children="0"
            {...getOverrideProps(overrides, "0")}
          ></Text>
          <Flex
            padding="0px 0px 0px 0px"
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Group 8")}
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
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              type="edit"
              {...getOverrideProps(overrides, "MyIcon39835225")}
            ></MyIcon>
            <Button
              width="26px"
              height="26px"
              position="absolute"
              border="1px SOLID rgba(0,0,0,0)"
              top="-4.17%"
              bottom="-4.17%"
              left="-4.17%"
              right="-4.17%"
              size="default"
              isDisabled={false}
              variation="default"
              children=""
              {...getOverrideProps(overrides, "Button39835226")}
            ></Button>
          </Flex>
        </Flex>
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
        {...getOverrideProps(overrides, "MyIcon36784099")}
      ></MyIcon>
      <Button
        width="42px"
        height="42px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,0)"
        top="10px"
        left="21px"
        size="default"
        isDisabled={false}
        variation="default"
        children=""
        {...getOverrideProps(overrides, "Button38344071")}
      ></Button>
    </View>
  );
}
