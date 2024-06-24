/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Button, Divider, View } from "@aws-amplify/ui-react";
export default function StockPageSubNav(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Divider: {},
        Button36783296: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        Button36783304: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        Button36783300: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        StockPageSubNav: {},
      },
      variantValues: { view: "Default" },
    },
    {
      overrides: {
        Divider: {},
        Button36783296: {
          width: "333px",
          borderRadius: "10px 10px 0px 0px",
          top: "0%",
          bottom: "0%",
          left: "0%",
          right: "66.7%",
          variation: "primary",
          height: "50px",
        },
        Button36783304: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        Button36783300: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        StockPageSubNav: {},
      },
      variantValues: { view: "Items" },
    },
    {
      overrides: {
        Divider: {},
        Button36783296: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        Button36783304: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        Button36783300: {
          width: "334px",
          borderRadius: "10px 10px 0px 0px",
          top: "0%",
          bottom: "0%",
          left: "33.3%",
          right: "33.3%",
          variation: "primary",
          height: "50px",
        },
        StockPageSubNav: {},
      },
      variantValues: { view: "Categories" },
    },
    {
      overrides: {
        Divider: {},
        Button36783296: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        Button36783304: {
          width: "333px",
          borderRadius: "10px 10px 0px 0px",
          top: "0%",
          bottom: "0%",
          left: "66.7%",
          right: "0%",
          variation: "primary",
          height: "50px",
        },
        Button36783300: {
          borderRadius: "10px 10px 0px 0px",
          height: "50px",
          color:"#999999",
          backgroundColor: "white",
        },
        StockPageSubNav: {},
      },
      variantValues: { view: "Kits" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1000px"
      height="64px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StockPageSubNav")}
      {...rest}
    >
      <Divider
        width="1000px"
        height="0.83px"
        position="absolute"
        top="103.39%"
        bottom="-4.69%"
        left="0%"
        right="0%"
        borderRadius="20px 20px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Button
        width="335px"
        height="66px"
        position="absolute"
        borderRadius="21px 21px 1px 1px"
        top="-1.56%"
        bottom="-1.56%"
        left="-0.1%"
        right="66.6%"
        size="default"
        paddingTop="0px"
        isDisabled={false}
        variation="default"
        children="Items"
        onClick={() => props.setView("ITEMS")}
        {...getOverrideProps(overrides, "Button36783296")}
      ></Button>
      <Button
        width="335px"
        height="66px"
        position="absolute"
        borderRadius="21px 21px 1px 1px"
        top="-1.56%"
        bottom="-1.56%"
        left="66.6%"
        right="-0.1%"
        size="default"
        isDisabled={false}
        variation="default"
        paddingTop="0px"
        children="Kits"
        onClick={() => props.setView("KITS")}
        {...getOverrideProps(overrides, "Button36783304")}
      ></Button>
      <Button
        width="336px"
        height="66px"
        position="absolute"
        borderRadius="21px 21px 1px 1px"
        top="-1.56%"
        bottom="-1.56%"
        left="33.2%"
        right="33.2%"
        size="default"
        isDisabled={false}
        paddingTop="0px"
        variation="default"
        children="Categories"
        onClick={() => props.setView("CATEGORIES")}
        {...getOverrideProps(overrides, "Button36783300")}
      ></Button>
    </View>
  );
}
