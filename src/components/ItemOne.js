/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "../ui-components/MyIcon";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
import EditStock from "./EditStock";
export default function ItemOne(props) {
  const { overrides, ...rest } = props;
  const [newQuant, setNewQuant] = useState("");
  const [editingStock, setEditingStock] = useState(false);

  useEffect(() => {
    setNewQuant(`${props.data.quantHere}`);
  }, [props.data]);

  return (
    <View
      width="1000px" height="62px" display="block" gap="unset" alignItems="unset"
      justifyContent="unset" position="relative" border="1px SOLID rgba(174,179,183,1)"
      padding="0px 0px 0px 0px" backgroundColor="white"
      {...getOverrideProps(overrides, "ItemOne")}
      {...rest}
    >
      <Flex
        gap="35px" direction="row" width="900px" height="63px" justifyContent="flex-start"
        alignItems="center" position="absolute" top="-1.61%" bottom="0%" left="10%" right="0%"
        padding="0px 45px 0px 45px"
        {...getOverrideProps(overrides, "Frame 999")}
      >
        <Text
          fontSize="18px"
          fontWeight="700"
          color="rgba(4, 125, 149,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="150px"
          overflow="auto"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="noWrap"
          children={
            `${props.data.itemName}${
              props.data.amountPerCount != null && props.data.amountPerCount != "" ? ` - ${props.data.amountPerCount}` : ""
            }${
              props.data.size != null && props.data.size != "" ? ` - ${props.data.size}` : ""
            }`
          }
          {...getOverrideProps(overrides, "Name")}
        ></Text>
        <Text
                    fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="180px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={props.data.itemCategory}
          {...getOverrideProps(overrides, "Category")}
        ></Text>
        {editingStock
        ? <EditStock
          itemID={props.data.itemID} depotID={props.data.depotID} stock={props.data.stock}
          newQuant={newQuant} setNewQuant={setNewQuant} setEditingStock={setEditingStock}
          marginRight="-36px" fetchStocks={props.fetchStocks} width="200px" />
        :
          <Flex
            gap="5px" direction="row" width="unset" height="unset" justifyContent="flex-start" shrink="0"
            alignItems="center" alignSelf="stretch" position="relative" padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 1000")}
          >
            <Text
              textAlign="left" display="block" direction="column" justifyContent="unset" width="unset"
              height="unset" gap="unset" alignItems="unset" shrink="0" position="relative"
              padding="0px 0px 0px 0px" whiteSpace="pre-wrap" children={props.data.quantHere}
              {...getOverrideProps(overrides, "0")}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px" width="150px" height="24px" display="block" gap="unset" shrink="0"
              alignItems="flex-start" justifyContent="flex-start" position="relative"
              {...getOverrideProps(overrides, "Group 8")}
            >
              <Button
                width="26px" height="26px" position="absolute" border="1px SOLID rgba(0,0,0,0)" children=" "
                top="-4.17%" bottom="-4.17%" left="0%" right="-4.17%" size="default" isDisabled={false}
                variation="default" onClick={() => setEditingStock(true)}
                {...getOverrideProps(overrides, "Button39835226")}
              >
                <MyIcon
                  width="24px" height="24px" display="block" gap="unset" alignItems="unset" justifyContent="unset"
                  overflow="hidden" position="absolute" top="0%" bottom="0%" left="14%" right="0%" type="edit"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "MyIcon39835225")}
                ></MyIcon>
              </Button>
            </Flex>
          </Flex>
        }
        <Text />
        <Text
                    fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          children={props.data.quantOther}
          {...getOverrideProps(overrides, "\u2014")}
        ></Text>
      </Flex>
      <Button
        width="42px" height="42px" position="absolute" border="1px SOLID rgba(0,0,0,0)"
        top="10px" left="21px" size="default" isDisabled={false} variation="default"
        children="" onClick={() => props.renderForm("ITEMS", "View", props.data)}
        {...getOverrideProps(overrides, "Button")}
      >
        <MyIcon
          width="24px" height="24px" display="block" gap="unset" alignItems="unset"
          justifyContent="unset" overflow="hidden" position="absolute"
          top="22.65%" left="20%" type="info"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </Button>
    </View>
  );
}
