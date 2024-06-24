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
  Flex,
  Heading,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddRequisiton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="65px"
      direction="column"
      width="1144px"
      height="564px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="32px 0px 32px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddRequisiton")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        level="3"
        children="Add/Edit Requisition"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Flex
        gap="24px"
        direction="row"
        width="1171px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 32px 21px 32px"
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
          {...getOverrideProps(overrides, "Info39035397")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="1056px"
          height="91px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 3039035398")}
        >
          <TextField
            width="225px"
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
            {...getOverrideProps(overrides, "name")}
          ></TextField>
          <TextField
            width="104px"
            height="unset"
            label="ID"
            placeholder="Pl.."
            position="absolute"
            top="0px"
            left="249px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "ID")}
          ></TextField>
          <SelectField
            width="328px"
            height="unset"
            label="Storage Infromation"
            placeholder="information"
            position="absolute"
            top="0px"
            left="377px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Storage information")}
          ></SelectField>
          <Flex
            gap="12px"
            direction="column"
            width="327px"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            position="absolute"
            top="0px"
            left="729px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Depot")}
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
              children="Depot"
              {...getOverrideProps(overrides, "label39035408")}
            ></Text>
            <Flex
              gap="0"
              direction="column"
              width="unset"
              height="49px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "InputGroup40214559")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(174,179,183,1)"
                borderRadius="5px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Input40214560")}
              >
                <Text
                                    fontSize="20px"
                  fontWeight="400"
                  color="rgba(128,128,128,1)"
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
                  children="Depot"
                  {...getOverrideProps(overrides, "placeholder40214561")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="1171px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 32px 21px 32px"
        {...getOverrideProps(overrides, "Frame 407")}
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
          {...getOverrideProps(overrides, "Info39035434")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="653.5px"
          height="88px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 3039035435")}
        >
          <TextField
            width="104px"
            height="unset"
            label="Kits"
            placeholder="kits"
            position="absolute"
            top="0px"
            left="0px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "KITS")}
          ></TextField>
          <SelectField
            width="328px"
            height="unset"
            label="Items"
            position="absolute"
            top="0px"
            left="128px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "items")}
          ></SelectField>
          <Flex
            gap="12px"
            direction="column"
            width="173px"
            height="88px"
            justifyContent="center"
            alignItems="flex-start"
            position="absolute"
            top="0px"
            left="480.5px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "notes")}
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
              children="Notes"
              {...getOverrideProps(overrides, "label39035445")}
            ></Text>
            <Flex
              gap="0"
              direction="column"
              width="133px"
              height="46px"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "InputGroup40214567")}
            >
              <Flex
                gap="10px"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                border="1px SOLID rgba(174,179,183,1)"
                borderRadius="5px"
                padding="8px 16px 8px 16px"
                {...getOverrideProps(overrides, "Input40214568")}
              >
                <Text
                                    fontSize="20px"
                  fontWeight="400"
                  color="rgba(128,128,128,1)"
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
                  children="Notes"
                  {...getOverrideProps(overrides, "placeholder40214569")}
                ></Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="1157px"
        height="68px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 32px 21px 32px"
        {...getOverrideProps(overrides, "Frame 408")}
      >
        <Button
          width="101px"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Save"
          {...getOverrideProps(overrides, "Button40184547")}
        ></Button>
        <Button
          width="101px"
          height="unset"
          shrink="0"
          backgroundColor="rgba(174,179,183,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Cancel"
          {...getOverrideProps(overrides, "Button40214571")}
        ></Button>
      </Flex>
    </Flex>
  );
}
