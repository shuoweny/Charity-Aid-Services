/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import StockPageSubNav from "./StockPageSubNav";
import CategoryOne from "./CategoryOne";
import StockHeaderBarCategories from "./StockHeaderBarCategories";
import { View } from "@aws-amplify/ui-react";
export default function StockCategoryPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1062px"
      height="614px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StockCategoryPage")}
      {...rest}
    >
      <StockPageSubNav
        width="1000px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="31px"
        padding="0px 0px 0px 0px"
        view="Categories"
        {...getOverrideProps(overrides, "StockPageSubNav")}
      ></StockPageSubNav>
      <CategoryOne
        width="1000px"
        height="62px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="128px"
        left="30px"
        border="1px SOLID rgba(174,179,183,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CategoryOne37365285")}
      ></CategoryOne>
      <CategoryOne
        width="1000px"
        height="62px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="188px"
        left="30px"
        border="1px SOLID rgba(174,179,183,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "CategoryOne37365286")}
      ></CategoryOne>
      <StockHeaderBarCategories
        width="1000px"
        height="62px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="66px"
        left="30px"
        border="1px SOLID rgba(174,179,183,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(233,235,236,1)"
        {...getOverrideProps(overrides, "StockHeaderBarCategories")}
      ></StockHeaderBarCategories>
    </View>
  );
}
