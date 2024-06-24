/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import { SelectDepot } from "./";
export default function StockHeaderBarKits(props) {
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
      backgroundColor="white"
      {...getOverrideProps(overrides, "StockHeaderBarKits")}
      {...rest}
    >
      <Flex
        gap="170px"
        direction="row"
        width="177px"
        height="63px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="calc(50% - 31.5px - 0.5px)"
        left="0%"
        right="82.3%"
        padding="0px 152px 0px 152px"
        {...getOverrideProps(overrides, "Frame 99937854443")}
      >
        <Text
          fontSize="20px"
          color="#999999"
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
          color="#999999"
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
          children="Stock available"
          {...getOverrideProps(overrides, "Stock available")}
        ></Text>
        <Flex
          gap="9px"
          direction="row"
          width="177px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 99937854485")}
        >
          <Text
            fontSize="20px"
            color="#999999"
            lineHeight="30px"
            textAlign="right"
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
            children="Stock at"
            {...getOverrideProps(overrides, "Stock at")}
          ></Text>
          <SelectDepot
            setSelectedDepot={props.setOtherDepot} selectedDepot={props.otherDepot} />
        </Flex>
      </Flex>
    </View>
  );
}
