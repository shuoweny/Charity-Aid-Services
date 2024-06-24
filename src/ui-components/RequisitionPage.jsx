/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
import RequisitionTable from "./RequisitionTable";
export default function RequisitionPage(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="-30px"
      direction="column"
      width="1062px"
      height="936px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="18px"
      padding="24px 19px 24px 24px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "RequisitionPage")}
      {...rest}
    >
      <Flex
        gap="37px"
        direction="row"
        width="1000px"
        height="270px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="18px"
        padding="24px 0px 24px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Frame 412")}
      >
        <Flex
          gap="39px"
          direction="row"
          width="311px"
          height="156px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="18px"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 413")}
        >
          <Button
            width="180px"
            height="unset"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Speech-to-text"
            {...getOverrideProps(overrides, "Button38638265")}
          ></Button>
          <MyIcon
            width="56px"
            height="56px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            border="10px SOLID rgba(4,125,149,1)"
            borderRadius="74px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(4,125,149,1)"
            type="microphone"
            {...getOverrideProps(overrides, "MyIcon38638279")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="39px"
          direction="row"
          width="311px"
          height="156px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="18px"
          padding="24px 24px 24px 24px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 416")}
        >
          <Button
            width="180px"
            height="unset"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Add Requisition"
            {...getOverrideProps(overrides, "Button38638299")}
          ></Button>
          <MyIcon
            width="56px"
            height="56px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            border="10px SOLID rgba(4,125,149,1)"
            borderRadius="74px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(4,125,149,1)"
            type="microphone"
            {...getOverrideProps(overrides, "MyIcon38638300")}
          ></MyIcon>
        </Flex>
        <Flex
          gap="39px"
          direction="row"
          width="311px"
          height="156px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="18px"
          padding="24px 114px 24px 31px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Frame 417")}
        >
          <Button
            width="180px"
            height="unset"
            shrink="0"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Received info"
            {...getOverrideProps(overrides, "Button38638306")}
          ></Button>
          <MyIcon
            width="56px"
            height="56px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            border="10px SOLID rgba(4,125,149,1)"
            borderRadius="74px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(4,125,149,1)"
            type="microphone"
            {...getOverrideProps(overrides, "MyIcon38638307")}
          ></MyIcon>
        </Flex>
      </Flex>
      <RequisitionTable
        width="1000px"
        height="618px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "requisitionTable")}
      ></RequisitionTable>
    </Flex>
  );
}
