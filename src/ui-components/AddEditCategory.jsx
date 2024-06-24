/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Radio,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AddEditCategory(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddEditCategory")}
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
        {...getOverrideProps(overrides, "Frame 41137003839")}
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
          padding="0px 60px 0px 60px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="3"
            children="Add/Edit Category"
            {...getOverrideProps(overrides, "Heading37003841")}
          ></Heading>
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
            {...getOverrideProps(overrides, "Frame 412")}
          >
            <TextField
              width="240px"
              height="unset"
              label="Name"
              placeholder="Placeholder…"
              shrink="0"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField39554522")}
            ></TextField>
            <Flex
              gap="12px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "TextField39554736")}
            >
              <Text
                                fontSize="20px"
                fontWeight="400"
                color="rgba(48,64,80,1)"
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
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Type"
                {...getOverrideProps(overrides, "label")}
              ></Text>
              <Flex
                padding="0px 0px 0px 0px"
                width="342px"
                height="30px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                shrink="0"
                position="relative"
                {...getOverrideProps(overrides, "Group 7")}
              >
                <Radio
                  width="unset"
                  height="unset"
                  position="absolute"
                  top="0px"
                  left="0px"
                  size="large"
                  defaultChecked={false}
                  isDisabled={false}
                  labelPosition="start"
                  children="Food"
                  {...getOverrideProps(overrides, "Radio39554740")}
                ></Radio>
                <Radio
                  width="unset"
                  height="unset"
                  position="absolute"
                  top="0px"
                  left="104px"
                  size="large"
                  defaultChecked={false}
                  isDisabled={false}
                  labelPosition="start"
                  children="Clothing"
                  {...getOverrideProps(overrides, "Radio39554741")}
                ></Radio>
                <Radio
                  width="unset"
                  height="unset"
                  position="absolute"
                  top="0px"
                  left="240px"
                  size="large"
                  defaultChecked={true}
                  isDisabled={false}
                  labelPosition="start"
                  children="Neither"
                  {...getOverrideProps(overrides, "Radio39554742")}
                ></Radio>
              </Flex>
            </Flex>
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider37343759")}
          ></Divider>
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="5"
            children="Acceptable stock levels"
            {...getOverrideProps(overrides, "Heading37343826")}
          ></Heading>
          <View
            width="718px"
            height="33px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,0,0,1)"
            padding="0px 0px 0px 0px"
            backgroundImage="linear-gradient(0deg, rgba(255,0,0,1), rgba(255,255,0,1), rgba(14,177,0,1))"
            {...getOverrideProps(overrides, "Rectangle 1167")}
          ></View>
          <Flex
            gap="61px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 410")}
          >
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(0,0,0,1)"
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
              children="Low"
              {...getOverrideProps(overrides, "Low")}
            ></Text>
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(0,0,0,1)"
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
              children="▲"
              {...getOverrideProps(overrides, "\u25B237344069")}
            ></Text>
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(0,0,0,1)"
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
              children="Medium"
              {...getOverrideProps(overrides, "Medium")}
            ></Text>
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(0,0,0,1)"
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
              children="▲"
              {...getOverrideProps(overrides, "\u25B237344075")}
            ></Text>
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(0,0,0,1)"
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
              children="High"
              {...getOverrideProps(overrides, "High")}
            ></Text>
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(0,0,0,1)"
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
              children="▲"
              {...getOverrideProps(overrides, "\u25B237344088")}
            ></Text>
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(0,0,0,1)"
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
              children="Excess"
              {...getOverrideProps(overrides, "Excess")}
            ></Text>
          </Flex>
          <Flex
            gap="119px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 41137344011")}
          >
            <TextField
              width="71px"
              height="unset"
              label="Name"
              placeholder="##"
              shrink="0"
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "TextField37344254")}
            ></TextField>
            <TextField
              width="71px"
              height="unset"
              label="Name"
              placeholder="##"
              shrink="0"
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "TextField37344355")}
            ></TextField>
            <TextField
              width="71px"
              height="unset"
              label="Name"
              placeholder="##"
              shrink="0"
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "TextField37344376")}
            ></TextField>
          </Flex>
          <Divider
            width="720px"
            height="1px"
            shrink="0"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider39554971")}
          ></Divider>
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <Button
              width="unset"
              height="unset"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Save category"
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
