/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
export default function LoginPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1328px"
      height="762px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LoginPage")}
      {...rest}
    >
      <Image
        width="679px"
        height="762px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "joel-muniz-A4Ax1ApccfA-unsplash (1) 1"
        )}
      ></Image>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="109px"
        left="718px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome to Aid Management System"
        {...getOverrideProps(overrides, "Welcome to Aid Management System")}
      ></Text>
      <Text
                fontSize="24px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="296px"
        left="804px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please choose your role to login"
        {...getOverrideProps(overrides, "Please choose your role to login")}
      ></Text>
      <Button
        width="294.8px"
        height="82.06px"
        position="absolute"
        top="381px"
        left="839px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Admin"
        {...getOverrideProps(overrides, "Button36953582")}
      ></Button>
      <Button
        width="294.8px"
        height="82.06px"
        position="absolute"
        top="521px"
        left="839px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Employee or Volunteer"
        {...getOverrideProps(overrides, "Button36953583")}
      ></Button>
      <View
        width="100px"
        height="36px"
        {...getOverrideProps(overrides, "Frame 417")}
      ></View>
      <Image
        width="96px"
        height="108px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="168px"
        left="935px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "user-avatar 1")}
      ></Image>
    </View>
  );
}
