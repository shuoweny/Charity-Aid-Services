/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function RequisitionLine(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="95px"
      direction="row"
      width="1352px"
      height="84px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="0px 31px 0px 31px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "RequisitionLine")}
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
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        type="recipient"
        {...getOverrideProps(overrides, "MyIcon")}
      ></MyIcon>
      <Text
                fontSize="22px"
        fontWeight="400"
        color="rgba(0,64,76,1)"
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
        children="1000000"
        {...getOverrideProps(overrides, "1000000")}
      ></Text>
      <Text
                fontSize="22px"
        fontWeight="400"
        color="rgba(0,64,76,1)"
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
        children="John White"
        {...getOverrideProps(overrides, "John White386510349")}
      ></Text>
      <Text
                fontSize="22px"
        fontWeight="400"
        color="rgba(0,64,77,1)"
        lineHeight="24.200000762939453px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="743px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="I need to request some aid items for a family in need. They require blankets, &#xA;canned food, and hygiene supplies. Can you please... "
        {...getOverrideProps(overrides, "John White386510350")}
      ></Text>
    </Flex>
  );
}
