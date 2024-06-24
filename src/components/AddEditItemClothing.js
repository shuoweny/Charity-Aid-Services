/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button, Divider, Flex, Heading, TextField,
} from "@aws-amplify/ui-react";
import SelectCategory from "./SelectCategory";
import { createItem } from "../utils/apiUtils";
export default function AddEditItemClothing(props) {
  const { overrides, ...rest } = props;
  const [size, setSize] = useState("");

  const submitItem = async () => {
    if (Object.keys(props.itemCateg).length == 0 || props.itemName == "" || size == "") return;

    var data = {
      name: props.itemName,
      categoryId: props.itemCateg.id,
      size: size
    }

    await createItem(data);
    await new Promise(r => setTimeout(r, 2500));
    await props.fetchItems();
    
    props.setFormVis(false);
  }

  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 20px 0px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddEditItemClothing")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="3"
            children={`${props.action} Item`}
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Flex
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
          <TextField
            width="240px" height="unset" label="Name" shrink="0" placeholder="Placeholder" size="large"
            value={props.action == "View" ? props.data.itemName : props.itemName} onChange={e => props.setItemName(e.target.value)}
            isDisabled={props.action == "View"} labelHidden={false} variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
            <TextField
              width="80px"
              height="unset"
              label="Size"
              placeholder="…"
              shrink="0"
              size="large"
              value={props.action == "View" ? props.data.size : size}
              onChange={e => setSize(e.target.value)}
              isDisabled={props.action == "View"}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField37135286")}
            ></TextField>
            <SelectCategory value={props.itemCateg} onChange={props.setItemCateg} isDisabled={props.action == "View"} data={props.action == "View" ? props.data.categoryObj : null} />
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider")}
          ></Divider>
          <Flex
            gap="20px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
          {
            props.action == "View"
          ?
            <Button
              width="unset" height="unset" shrink="0" size="default" isDisabled={false}
              variation="default" children="Close" onClick={() => props.setFormVis(false)}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          :
            <><Button
              width="unset" height="unset" shrink="0" size="default" isDisabled={false}
              variation="default" children="Cancel" onClick={() => props.setFormVis(false)}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
            <Button
              width="unset" height="unset" shrink="0" size="default" isDisabled={false}
              variation="primary" children="Save item" onClick={() => submitItem()}
              {...getOverrideProps(overrides, "Button")}
            ></Button></>
          }
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
