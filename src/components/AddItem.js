/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import Popup from 'reactjs-popup';
import styled from "styled-components";

import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Icon,
  View,
  Button,
  Flex,
  Heading,
  // SelectField
  Text,
  TextField,
  SearchField,
} from "@aws-amplify/ui-react";
export default function AddItem(props) {
  const { overrides, ...rest } = props;

  const Button = styled.button`
    font: 400 13px Inter;
    background-color: rgba(4,125,149,1);
    padding: 5px 8px 5px;
    color: white;
    border-radius: 0px;
    outline: 0;
    border: 0;
    margin: 10px 0px;
    box-shadow: 0px 1px 1px lightgray;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
      background-color: rgba(9,94,111,1);
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;

  return (

    <Flex className="form"
      gap="24px"
      direction="row"
      width="1160px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddEditItem")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
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
          grow="1"
          shrink="1"
          basis="0"
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
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
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
              children=""
              {...getOverrideProps(overrides, "Info")}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="1031px"
              height="88px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Group 29")}
            >
              <TextField
                width="328px"
                height="unset"
                label="Name"
                position="absolute"
                top="0px"
                left="0px"
                placeholder="Placeholder"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField36883457")}
              ></TextField>
              <SelectField
                width="328px"
                height="unset"
                label="Category"
                position="absolute"
                top="0px"
                left="352px"
                placeholder="Placeholder"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField")}
              ></SelectField>
              <TextField
                width="327px"
                height="unset"
                label="Quantity in this depot"
                position="absolute"
                top="0px"
                left="704px"
                placeholder="Placeholder"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "TextField37003496")}
              ></TextField>
            </Flex>
          </Flex>
          <Flex
            gap="24px" direction="row" width="unset" height="unset"
            justifyContent="center" alignItems="flex-start" shrink="0"
            alignSelf="stretch" position="relative" padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <Button
              width="unset" height="unset" shrink="0" size="default"
              isDisabled={false} variation="default" children="Cancel"
              {...getOverrideProps(overrides, "Button")}
              onClick={() => props.setFormVis(false)}
            ></Button>
            <Popup
              trigger={<Button
                width="unset" height="unset" shrink="0" size="default"
                isDisabled={false} variation="primary" children="Save item"
                {...getOverrideProps(overrides, "Button")}
                onClick={() => props.setFormVis(false)}></Button>}
              modal
              nested
            >
              {close => (
                <div className="modal">
                  <Icon
        width="612px"
        height="406px"
        viewBox={{ minX: 0, minY: 0, width: 612, height: 406 }}
        paths={[
          {
            d: "M0 0L612 0L612 406L0 406L0 0Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="178px"
        left="358px"
        {...getOverrideProps(overrides, "background")}
      ></Icon>
      <SearchField
        width="300px"
        height="unset"
        label="Donor Name"
        position="absolute"
        top="385px"
        left="409px"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Icon
        width="25.08px"
        height="25.08px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 25.083984375,
          height: 25.08349609375,
        }}
        paths={[
          {
            d: "M25.0833 2.52625L22.5571 0L12.5417 10.0154L2.52625 0L0 2.52625L10.0154 12.5417L0 22.5571L2.52625 25.0833L12.5417 15.0679L22.5571 25.0833L25.0833 22.5571L15.0679 12.5417L25.0833 2.52625Z",
            fill: "rgba(0,85,102,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="28.48%"
        bottom="68.23%"
        left="66.57%"
        right="31.54%"
        {...getOverrideProps(overrides, "Cancel")}
        onClick={() => props.setFormVis(false)}
      ></Icon>
      <Text
                fontSize="36px"
        fontWeight="500"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="217px"
        left="410px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add donation"
        {...getOverrideProps(overrides, "Add donation")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="88px"
        height="35px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="501px"
        left="825px"
        {...getOverrideProps(overrides, "button")}
      >
        <View
          width="88px"
          height="35px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "Rectangle 1192")}
        ></View>
        <Text
                    fontSize="16px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="49.33px"
          height="27.1px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="5.65px"
          left="22.67px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Save"
          {...getOverrideProps(overrides, "Save")}
        ></Text>
      </View>
      <TextField
        width="149px"
        height="unset"
        label="Name"
        position="absolute"
        top="306px"
        left="410px"
        placeholder="Placeholder"
        size="small"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39194482")}
      ></TextField>
      <TextField
        width="181px"
        height="unset"
        label="Category"
        position="absolute"
        top="306px"
        left="593px"
        placeholder="Placeholder"
        size="small"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39194489")}
      ></TextField>
      <TextField
        width="105px"
        height="unset"
        label="Quantity"
        position="absolute"
        top="306px"
        left="808px"
        placeholder="Placeholder"
        size="small"
        isDisabled={true}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField39194496")}
      ></TextField>
                </div>
                )}
              </Popup>
            
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
