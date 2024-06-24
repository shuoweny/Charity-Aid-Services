/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Heading,
  SelectField,
  View,
} from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function SideBarAdmin(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="266px"
      height="762px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SideBarAdmin")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="column"
        width="266px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="32px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32137765803")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="626px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 32137765804")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="188px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 415")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              level="3"
              children="Depot"
              {...getOverrideProps(overrides, "Heading")}
            ></Heading>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 41637783764")}
            >
              <SelectField
                width="183px"
                height="unset"
                placeholder="Select…"
                shrink="0"
                size="default"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                {...getOverrideProps(overrides, "SelectField")}
              ></SelectField>
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 414")}
          >
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765809")}
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
                type="dashboard"
                {...getOverrideProps(overrides, "MyIcon37765810")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="Dashboard"
                {...getOverrideProps(overrides, "Button37765811")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765812")}
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
                type="warehouse"
                {...getOverrideProps(overrides, "MyIcon37765813")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="Stock"
                {...getOverrideProps(overrides, "Button37765814")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765815")}
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
                type="send"
                {...getOverrideProps(overrides, "MyIcon37765816")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="Requisitions"
                {...getOverrideProps(overrides, "Button37765817")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765818")}
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
                type="donation"
                {...getOverrideProps(overrides, "MyIcon37765819")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="Donations"
                {...getOverrideProps(overrides, "Button37765820")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765821")}
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
                {...getOverrideProps(overrides, "MyIcon37765822")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="Recipients"
                {...getOverrideProps(overrides, "Button37765823")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765824")}
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
                type="donor"
                {...getOverrideProps(overrides, "MyIcon37765825")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="Donors"
                {...getOverrideProps(overrides, "Button37765826")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 323")}
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
                type="info"
                {...getOverrideProps(overrides, "MyIcon38084217")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="About Us"
                {...getOverrideProps(overrides, "Button38084218")}
              ></Button>
            </Flex>
          </Flex>
          <Flex
            gap="-1px"
            direction="row"
            width="161px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 324")}
          ></Flex>
          <Flex
            gap="-1px"
            direction="row"
            width="161px"
            height="34px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 417")}
          ></Flex>
          <Flex
            gap="-1px"
            direction="row"
            width="161px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 41638274904")}
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
              type="logOut"
              {...getOverrideProps(overrides, "MyIcon38274905")}
            ></MyIcon>
            <Button
              width="193px"
              height="48px"
              border="1px SOLID rgba(0,0,0,0)"
              shrink="0"
              size="large"
              isDisabled={false}
              variation="default"
              children="Log Out"
              {...getOverrideProps(overrides, "Button38274906")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
