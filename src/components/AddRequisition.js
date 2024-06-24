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
  const [setForm, setFormVis] = React.useState(true);
  const handleSaveClick = () => {
    props.setFormVis(false);
  };

  const handleCancelClick = () => {
    props.setFormVis(false);
  };

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
          display="flex"
          direction="row"
          gap="20px"
          alignItems="center"
          justifyContent="center"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 3039035398")}
        >
          <TextField
            width="225px"
            height="unset"
            label="Name"
            position="relative"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "name")}
          ></TextField>
          <TextField
            width="225px"
            height="unset"
            label="Depot"
            position="relative"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "depot")}
          ></TextField>
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
          display="flex"
          direction="row"
          gap="20px"
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
            position="relative"
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
            position="relative"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "items")}
          ></SelectField>
          <TextField
            width="104px"
            height="unset"
            label="Notes"
            placeholder="Notes…"
            position="relative"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "Notes")}
          ></TextField>
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
          onClick={handleSaveClick}
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
          onClick={handleCancelClick}
          {...getOverrideProps(overrides, "Button40214571")}
        ></Button>
      </Flex>
    </Flex>
  );
}
