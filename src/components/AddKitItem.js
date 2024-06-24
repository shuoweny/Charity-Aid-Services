/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, SelectField, TextField } from "@aws-amplify/ui-react";
export default function AddKitItem(props) {
  const { overrides, ...rest } = props;
  const [sessionStorage, setSessionStorage] = useState({});
  useEffect(() => {
    setSessionStorage({
      items: JSON.parse(window.sessionStorage.getItem("items"))
    });
  }, []);
  if (props.view) return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="reletive"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddKitItem")}
      {...rest}
    >
      <Divider
        width="720px"
        height="1px"
        shrink="0"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="50px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <SelectField
          width="320px"
          height="unset"
          label="Item Name"
          shrink="0"
          size="large"
          value={"{}"}
          isDisabled={true}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField39544684")}
        >
          <option key={"noItem"} value={"{}"}>{
            (sessionStorage.items == null) ? "Select…" : sessionStorage.items.filter(i => i.id == props.data.itemIDs[props.idx])[0].name
          }</option>
        </SelectField>
        <TextField
          type="number"
          step="1"
          min="0"
          width="320px"
          height="unset"
          label="Quantity"
          shrink="0"
          value={props.data.itemQuantities[props.idx]}
          placeholder="Enter amount…"
          size="large"
          isDisabled={true}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField39544685")}
        ></TextField>
      </Flex>
    </Flex>
  );
  else return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="reletive"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddKitItem")}
      {...rest}
    >
      <Divider
        width="720px"
        height="1px"
        shrink="0"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="50px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <SelectField
          width="320px"
          height="unset"
          label="Item Name"
          shrink="0"
          size="large"
          value={props.kitItems[props.idx].item}
          onChange={e => props.setKitItems(ki => {
            var newKi = [...ki];
            newKi[props.idx].item = e.target.value;
            return newKi;
          })}
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField39544684")}
        >
          <option key={"noItem"} value={"{}"}>Select…</option>
          {(sessionStorage.items == null) ? <></> : sessionStorage.items.map(i => {
            return <option key={i.name} value={JSON.stringify(i)}>{i.name}</option>
          })}
        </SelectField>
        <TextField
          type="number"
          step="1"
          min="0"
          width="320px"
          height="unset"
          label="Quantity"
          shrink="0"
          value={props.kitItems[props.idx].quantity}
          onChange={e => props.setKitItems(ki => {
            var newKi = [...ki];
            newKi[props.idx].quantity = e.target.value;
            return newKi;
          })}
          placeholder="Enter amount…"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField39544685")}
        ></TextField>
      </Flex>
    </Flex>
  );
}
