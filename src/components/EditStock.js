/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "../ui-components/MyIcon";
import { Button, TextField, View } from "@aws-amplify/ui-react";
import { createStock, updateStock } from "../utils/apiUtils";
export default function EditStock(props) {
  const { overrides, ...rest } = props;
  const submitStock = async () => {
    if (props.newQuant == "") return;
    
    var data;
    if (props.stock.id == null) {
      data = {itemID: props.itemID, depotID: props.depotID, quantity: parseInt(props.newQuant)};
      await createStock(data);
    } else {
      data = {id: props.stock.id, _version: props.stock._version, quantity: parseInt(props.newQuant)};
      await updateStock(props.stock.id, data);
    }

    await new Promise(r => setTimeout(r, 2500));
    await props.fetchStocks();
    props.setEditingStock(false);
  };
  return (
    <View
      width="75px"
      height="33px"
      display="flex"
      gap="unset"
      alignItems="flex-start"
      justifyContent="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "EditStock")}
      {...rest}
    >
      <Button
        width="26px"
        height="26px"
        position="absolute"
        border="1px SOLID rgba(0,0,0,0)"
        top="9.09%"
        bottom="12.12%"
        left="27%"
        right="-1.33%"
        size="default"
        isDisabled={false}
        variation="default"
        onClick={() => submitStock()}
        children=""
        {...getOverrideProps(overrides, "Button")}
      >
        <MyIcon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="4%"
          left="12.5%"
          right="0%"
          padding="0px 0px 0px 0px"
          type="save"
          {...getOverrideProps(overrides, "MyIcon")}
        ></MyIcon>
      </Button>
      <TextField
        width="48px"
        height="unset"
        placeholder="##"
        position="absolute"
        type="number"
        top="0%"
        bottom="0%"
        left="0%"
        right="36%"
        size="small"
        value={props.newQuant}
        onChange={e => {
          props.setNewQuant(e.target.value)
        }}
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
    </View>
  );
}
