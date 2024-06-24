/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Icon,
  SearchField,
  StepperField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function Adddonationnew(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1328px"
      height="762px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Adddonationnew")}
      {...rest}
    >
      <Icon
        width="551px"
        height="364px"
        viewBox={{ minX: 0, minY: 0, width: 551, height: 364 }}
        paths={[
          {
            d: "M0 0L551 0L551 364L0 364L0 0Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="199px"
        left="388px"
        {...getOverrideProps(overrides, "background")}
      ></Icon>
      <SearchField
        width="300px"
        height="unset"
        label="Donor Name"
        position="absolute"
        top="387px"
        left="440px"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "SearchField39584461")}
      ></SearchField>
      <SearchField
        width="219px"
        height="unset"
        label="Item Name"
        position="absolute"
        top="306px"
        left="440px"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "SearchField39584473")}
      ></SearchField>
      <Icon
        width="25.08px"
        height="25.08px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 25.083984375,
          height: 25.08349609375,
        }}
        paths={[
          {
            d: "M25.0833 2.52625L22.5571 0L12.5417 10.0154L2.52625 0L0 2.52625L10.0154 12.5417L0 22.5571L2.52625 25.0833L12.5417 15.0679L22.5571 25.0833L25.0833 22.5571L15.0679 12.5417L25.0833 2.52625Z",
            fill: "rgba(0,85,102,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.23%"
        bottom="65.47%"
        left="64.53%"
        right="33.58%"
        {...getOverrideProps(overrides, "Cancel")}
      ></Icon>
      <Text
                fontSize="36px"
        fontWeight="500"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="238px"
        left="440px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add donation"
        {...getOverrideProps(overrides, "Add donation")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="88px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="488px"
        left="776px"
        {...getOverrideProps(overrides, "button")}
      >
        <View
          width="88px"
          height="29.62px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "Rectangle 1192")}
        ></View>
        <Text
                    fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="86px"
          height="30px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="2px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Save"
          {...getOverrideProps(overrides, "Save")}
        ></Text>
      </View>
      <StepperField
        width="134px"
        height="unset"
        label="Quantity"
        position="absolute"
        top="306px"
        left="728px"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "StepperField")}
      ></StepperField>
    </View>
  );
}
