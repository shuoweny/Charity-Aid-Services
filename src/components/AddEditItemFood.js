/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useEffect, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button, Divider, Flex, Heading, TextAreaField, TextField,
} from "@aws-amplify/ui-react";
import SelectCategory from "./SelectCategory";
import { createItem } from "../utils/apiUtils";
export default function AddEditItemFood(props) {
  const { overrides, ...rest } = props;
  const [expiry, setExpiry] = useState("");
  const [brand, setBrand] = useState("");
  const [amountPC, setAmountPC] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [allergens, setAllergens] = useState("");

  const submitItem = async () => {
    if (Object.keys(props.itemCateg).length == 0 || props.itemName == "") return;
    if (expiry == "" || brand == "" || amountPC == "" || ingredients == "" || allergens == "") return;

    var data = {
      name: props.itemName,
      categoryId: props.itemCateg.id,
      expiry: expiry,
      brand: brand,
      amountPerCount: amountPC,
      mainIngredients: ingredients.replaceAll(" ", "").split(","),
      allergens: allergens.replaceAll(" ", "").split(","),
    }

    await createItem(data);
    await new Promise(r => setTimeout(r, 2500));
    await props.fetchItems();
    
    props.setFormVis(false);
  }

  useEffect(() => console.log(props.data), [props.data])

  return (
    <Flex
      gap="24px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 20px 0px 20px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddEditItemFood")}
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
        padding="20px 0px 20px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 41137134422")}
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
            gap="15px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
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
            <SelectCategory value={props.itemCateg} onChange={props.setItemCateg} isDisabled={props.action == "View"} data={props.action == "View" ? props.data.categoryObj : null} />
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider37134430")}
          ></Divider>
          <Flex
            gap="15px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 410")}
          >
            <TextField
              type="date"
              width="180px"
              height="unset"
              label="Expiry date"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              value={props.action == "View" ? props.data.expiry : expiry}
              onChange={e => setExpiry(e.target.value)}
              isDisabled={props.action == "View"}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField37134432")}
            ></TextField>
            <TextField
              width="180px"
              height="unset"
              label="Brand"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={props.action == "View"}
              labelHidden={false}
              value={props.action == "View" ? props.data.brand : brand}
              onChange={e => setBrand(e.target.value)}
              variation="default"
              {...getOverrideProps(overrides, "TextField37134433")}
            ></TextField>
            <TextField
              width="180px"
              height="unset"
              label="Amount per unit"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={props.action == "View"}
              labelHidden={false}
              value={props.action == "View" ? props.data.amountPerCount : amountPC}
              onChange={e => setAmountPC(e.target.value)}
              variation="default"
              {...getOverrideProps(overrides, "TextField37134434")}
            ></TextField>
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider39556091")}
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
            {...getOverrideProps(overrides, "Frame 41137134435")}
          >
            <TextAreaField
              width="285px"
              height="120px"
              label="Main ingredients"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={props.action == "View"}
              labelHidden={false}
              value={props.action == "View" ? props.data.ingredients : ingredients}
              onChange={e => setIngredients(e.target.value)}
              variation="default"
              {...getOverrideProps(overrides, "TextAreaField37134437")}
            ></TextAreaField>
            <TextAreaField
              width="285px"
              height="120px"
              label="Allergens"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              isDisabled={props.action == "View"}
              labelHidden={false}
              value={props.action == "View" ? props.data.allergens : allergens}
              onChange={e => setAllergens(e.target.value)}
              variation="default"
              {...getOverrideProps(overrides, "TextAreaField39556022")}
            ></TextAreaField>
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider39556237")}
          ></Divider>
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
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
