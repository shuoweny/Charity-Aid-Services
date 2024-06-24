/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function RequisitionTable(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1000px"
      height="618px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "RequisitionTable")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="1000px"
        height="618px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="18px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Flex
          gap="40px"
          direction="row"
          width="1000px"
          height="84px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="18px 18px 0px 0px"
          padding="0px 122px 0px 37px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="recipient"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
                        fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24.200000762939453px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="75px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="ID"
            {...getOverrideProps(overrides, "ID")}
          ></Text>
          <Text
                        fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24.200000762939453px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="103px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Volunteer Name"
            {...getOverrideProps(overrides, "John White38659810")}
          ></Text>
          <Text
                        fontSize="22px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24.200000762939453px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="586px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Stored information"
            {...getOverrideProps(overrides, "John White38659815")}
          ></Text>
        </Flex>
        <Flex
          width="1000px"
          height="84px"
          {...getOverrideProps(overrides, "RequisitionLine386510482")}
        ></Flex>
      </Flex>
      <Flex
        width="1000px"
        height="84px"
        {...getOverrideProps(overrides, "RequisitionLine38764149")}
      ></Flex>
      <Flex
        width="1000px"
        height="84px"
        {...getOverrideProps(overrides, "RequisitionLine38764174")}
      ></Flex>
    </View>
  );
}
