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
  TextField,
} from "@aws-amplify/ui-react";
export default function DonorOption(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="-1.0172940492630005px"
      direction="column"
      width="1000px"
      height="625.64px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DonorOption")}
      {...rest}
    >
      <Heading
        width="243.13px"
        height="56.97px"
        shrink="0"
        level="1"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Flex
        gap="-1.0172940492630005px"
        direction="column"
        width="1000px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="45.77823257446289px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Frame 1011")}
      >
        <Flex
          gap="61.03764343261719px"
          direction="row"
          width="1000px"
          height="90.54px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45.77823257446289px"
          padding="0px 17.29399871826172px 0px 17.29399871826172px"
          {...getOverrideProps(overrides, "frame39034862")}
        >
          <TextField
            width="198px"
            height="unset"
            label="Name*"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034880")}
          ></TextField>
          <TextField
            width="111px"
            height="unset"
            label="Age*"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034887")}
          ></TextField>
          <TextField
            width="470px"
            height="unset"
            label="Mailing Address*"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField40304546")}
          ></TextField>
        </Flex>
        <Flex
          gap="35.040000915527344px"
          direction="row"
          width="1000px"
          height="90.54px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45.77823257446289px"
          padding="0px 17.29399871826172px 0px 17.29399871826172px"
          {...getOverrideProps(overrides, "frame39374889")}
        >
          <TextField
            width="205px"
            height="unset"
            label="Phone Number*"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034894")}
          ></TextField>
          <TextField
            width="404px"
            height="unset"
            label="Email*"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39374890")}
          ></TextField>
          <SelectField
            width="225px"
            height="90px"
            label="Preferred communication*"
            shrink="0"
            placeholder="Placeholder"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField40305111")}
          ></SelectField>
        </Flex>
        <Flex
          gap="97.04000091552734px"
          direction="row"
          width="1000px"
          height="90.54px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45.77823257446289px"
          padding="0px 17.29399871826172px 0px 17.29399871826172px"
          {...getOverrideProps(overrides, "frame40305789")}
        >
          <TextField
            width="241px"
            height="unset"
            label="Nationality*"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField40305790")}
          ></TextField>
          <SelectField
            width="225px"
            height="90px"
            label="Expire Date*"
            shrink="0"
            placeholder="Placeholder"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField40305792")}
          ></SelectField>
          <SelectField
            width="245px"
            height="90px"
            label="Supporting Document*"
            shrink="0"
            placeholder="Placeholder"
            size="default"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField40306228")}
          ></SelectField>
        </Flex>
        <Flex
          gap="76.29705047607422px"
          direction="row"
          width="1000px"
          height="90.54px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45.77823257446289px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "frame39035013")}
        >
          <Button
            width="unset"
            height="unset"
            border="1.02px SOLID rgba(174,179,183,1)"
            borderRadius="39.67446720600128px"
            padding="8.138352394104004px 16.276704788208008px 8.138352394104004px 16.276704788208008px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="default"
            children="Cancel"
            {...getOverrideProps(overrides, "Button39035019")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            border="1.02px SOLID rgba(0,0,0,0)"
            borderRadius="38.65717315673828px"
            padding="7.121058344841003px 15.259410738945007px 7.121058344841003px 15.259410738945007px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Submit"
            {...getOverrideProps(overrides, "Button39035023")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
