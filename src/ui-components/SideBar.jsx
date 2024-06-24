/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function SideBar(props) {
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
      {...getOverrideProps(overrides, "SideBar")}
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
        {...getOverrideProps(overrides, "Frame 32129767087")}
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
          {...getOverrideProps(overrides, "Frame 32129767088")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
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
              children="Depot&#xA;[Name]"
              {...getOverrideProps(overrides, "Heading")}
            ></Heading>
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
              {...getOverrideProps(overrides, "Frame 32137403626")}
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
                {...getOverrideProps(overrides, "MyIcon37133769")}
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
                {...getOverrideProps(overrides, "Button37406848")}
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
              {...getOverrideProps(overrides, "Frame 32137403640")}
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
                {...getOverrideProps(overrides, "MyIcon37403660")}
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
                {...getOverrideProps(overrides, "Button37406860")}
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
              {...getOverrideProps(overrides, "Frame 32137403647")}
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
                {...getOverrideProps(overrides, "MyIcon37403663")}
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
                {...getOverrideProps(overrides, "Button37406870")}
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
              {...getOverrideProps(overrides, "Frame 32137403654")}
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
                {...getOverrideProps(overrides, "MyIcon37403673")}
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
                {...getOverrideProps(overrides, "Button37406889")}
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
              {...getOverrideProps(overrides, "Frame 32137403667")}
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
                {...getOverrideProps(overrides, "MyIcon37403676")}
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
                {...getOverrideProps(overrides, "Button37406901")}
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
                {...getOverrideProps(overrides, "MyIcon38084339")}
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
                {...getOverrideProps(overrides, "Button38084340")}
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
            {...getOverrideProps(overrides, "Frame 32438275843")}
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
            {...getOverrideProps(overrides, "Frame 416")}
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
            {...getOverrideProps(overrides, "Frame 32438274073")}
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
              {...getOverrideProps(overrides, "MyIcon38274074")}
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
              {...getOverrideProps(overrides, "Button38274075")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
