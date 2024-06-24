/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, Icon, Text, View } from "@aws-amplify/ui-react";
import RecipientTable from "./RecipientTable";
import SideBar from "./SideBar";
import MyIcon from "./MyIcon";
export default function Recipientpage(props) {
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
      {...getOverrideProps(overrides, "Recipientpage")}
      {...rest}
    >
      <Heading
        width="184px"
        height="56px"
        position="absolute"
        top="44px"
        left="287px"
        level="1"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <RecipientTable
        width="983px"
        height="502px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="147px"
        left="287px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "recipientTable")}
      ></RecipientTable>
      <SideBar
        width="266px"
        height="762px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="79.97%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SideBar")}
      ></SideBar>
      <View
        padding="0px 0px 0px 0px"
        width="92px"
        height="26px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="645px"
        left="41px"
        {...getOverrideProps(overrides, "Group 13212")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="61px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="31px"
          {...getOverrideProps(overrides, "Group 231")}
        >
          <Text
                        fontSize="16px"
            fontWeight="500"
            color="rgba(110,113,145,1)"
            lineHeight="26px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.6px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Log out"
            {...getOverrideProps(overrides, "Log out")}
          ></Text>
        </View>
        <View
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="3px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "user 1")}
        >
          <Icon
            width="8.33px"
            height="8.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.3330078125,
              height: 8.33349609375,
            }}
            paths={[
              {
                d: "M8.33344 4.16672C8.33344 6.4679 6.4679 8.33328 4.16672 8.33328C1.86554 8.33328 0 6.4679 0 4.16672C0 1.86554 1.86554 0 4.16672 0C6.4679 0 8.33344 1.86554 8.33344 4.16672Z",
                fill: "rgba(110,113,145,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6.25%"
            bottom="52.08%"
            left="16.67%"
            right="41.67%"
            {...getOverrideProps(overrides, "Vector38124339")}
          ></Icon>
          <Icon
            width="15px"
            height="7.5px"
            viewBox={{ minX: 0, minY: 0, width: 15, height: 7.5 }}
            paths={[
              {
                d: "M11.0417 0L3.95828 0C1.77582 0 0 1.77582 0 3.95828L0 6.875C0 7.22 0.279999 7.5 0.625 7.5L14.375 7.5C14.72 7.5 15 7.22 15 6.875L15 3.95828C15 1.77582 13.2242 0 11.0417 0L11.0417 0Z",
                fill: "rgba(110,113,145,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="56.25%"
            bottom="6.25%"
            left="0%"
            right="25%"
            {...getOverrideProps(overrides, "Vector38124340")}
          ></Icon>
          <Icon
            width="8.33px"
            height="6.67px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 8.3330078125,
              height: 6.666015625,
            }}
            paths={[
              {
                d: "M8.13416 2.87415L5.21744 0.165863C5.09995 0.0566101 4.94659 0 4.79248 0C4.37912 0 4.16657 0.351715 4.16657 0.624237L4.16657 2.49924L0.833283 2.49924C0.372467 2.49924 0 2.87247 0 3.33252C0 3.79257 0.372467 4.1658 0.833283 4.1658L4.16657 4.1658L4.16657 6.0408C4.16657 6.38748 4.44824 6.6658 4.79157 6.6658C4.94659 6.6658 5.09918 6.60843 5.21744 6.49918L8.13416 3.79089C8.2608 3.67249 8.33328 3.50586 8.33328 3.33252C8.33328 3.15918 8.2608 2.99255 8.13416 2.87415L8.13416 2.87415Z",
                fill: "rgba(110,113,145,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="27.09%"
            bottom="39.58%"
            left="58.33%"
            right="0%"
            {...getOverrideProps(overrides, "Vector38124341")}
          ></Icon>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="125px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="674px"
        left="716px"
        {...getOverrideProps(overrides, "pageSelectionBox")}
      >
        <View
          width="125px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="38px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "pageSelection")}
        ></View>
        <Text
                    fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="22px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="125px"
          height="45px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1"
          {...getOverrideProps(overrides, "1")}
        ></Text>
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="10px"
          left="5px"
          padding="0px 0px 0px 0px"
          type="chevronWhiteLeft"
          {...getOverrideProps(overrides, "MyIcon38155314")}
        ></MyIcon>
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="10px"
          left="93px"
          padding="0px 0px 0px 0px"
          type="chevronWhiteRight"
          {...getOverrideProps(overrides, "MyIcon38155315")}
        ></MyIcon>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="165px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="674px"
        left="936px"
        {...getOverrideProps(overrides, "deleteButton36943746")}
      >
        <View
          width="165px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="38px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "deleteButton36943744")}
        ></View>
        <Text
                    fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="22px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="165px"
          height="45px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Delete recipient"
          {...getOverrideProps(overrides, "Delete recipient")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="165px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="674px"
        left="455px"
        {...getOverrideProps(overrides, "addButton36943747")}
      >
        <View
          width="165px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="38px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "addButton36943748")}
        ></View>
        <Text
                    fontSize="20px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="22px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="165px"
          height="45px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add recipient"
          {...getOverrideProps(overrides, "Add recipient")}
        ></Text>
      </View>
    </View>
  );
}
