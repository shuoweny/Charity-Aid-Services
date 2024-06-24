/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function AddIdDoc(props) {
  return         <Flex
  gap="37px"
  direction="row"
  width="983px"
  height="89px"
  justifyContent="center"
  alignItems="center"
  shrink="0"
  position="relative"
  borderRadius="45px"
  padding="0px 0px 0px 0px"
>
  <TextField
    width="168px"
    height="unset"
    label="ID Document Type*"
    placeholder="Enter…"
    shrink="0"
    size="default"
    isDisabled={false}
    labelHidden={false}
    variation="default"
    value={props.data[props.idx].type}
    onChange={e => props.setData(ids => {
      var newIds = [...ids];
      newIds[props.idx].type = e.target.value;
      return newIds;
    })}
  ></TextField>
  <TextField
    width="168px"
    height="unset"
    label="Document Number*"
    placeholder="Enter…"
    shrink="0"
    size="default"
    isDisabled={false}
    labelHidden={false}
    variation="default"
    value={props.data[props.idx].documentID}
    onChange={e => props.setData(ids => {
      var newIds = [...ids];
      newIds[props.idx].documentID = e.target.value;
      return newIds;
    })}
  ></TextField>
  <TextField
    width="203px"
    height="unset"
    label="Expiry date*"
    placeholder="Enter…"
    type="date"
    shrink="0"
    size="default"
    isDisabled={false}
    labelHidden={false}
    variation="default"
    value={props.data[props.idx].expiry}
    onChange={e => props.setData(ids => {
      var newIds = [...ids];
      newIds[props.idx].expiry = e.target.value;
      return newIds;
    })}
  ></TextField>
  <Flex
    gap="8px"
    direction="column"
    width="203px"
    height="unset"
    justifyContent="center"
    alignItems="flex-start"
    shrink="0"
    position="relative"
    padding="0px 0px 0px 0px"
  >
    <Text
      fontSize="16px"
      fontWeight="400"
      color="rgba(48,64,80,1)"
      lineHeight="24px"
      textAlign="left"
      display="block"
      direction="column"
      justifyContent="unset"
      width="unset"
      height="unset"
      gap="unset"
      alignItems="unset"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      padding="0px 0px 0px 0px"
      whiteSpace="pre-wrap"
      children="Scanned copy"
    ></Text>
    <label>
      <div className="amplify-button amplify-field-group__control amplify-button--primary amplify-button--default"
        style={{borderRadius: "38px", width:"170px"}}
      >
        Upload File
          <input
            type="file" accept="image/*,application/pdf"
            onChange={e => props.setData(ids => {
              var newIds = [...ids];
              newIds[props.idx].image = e.target.files[0];
              return newIds;
            })}
            name="newImg" style={{display: "none"}}
          />
      </div>
    </label>
  </Flex>
</Flex>
}