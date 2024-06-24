/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import styled from "styled-components";
import '../App.css';

import * as React from "react";
import { useRef } from "react";
import Select from 'react-select';
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Icon,
  StepperField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import { createDonation } from "../utils/apiUtils";
export default function Adddonationnew(props) {
  const { overrides, ...rest } = props;
  const [ itemOptions, setItemOptions] = React.useState([]);
  const [ donorOptions, setDonorOptions] = React.useState([]);
  const [ theItemID, setTheItemID] = React.useState("");
  const [ theDonorID, setTheDonorID] = React.useState("");
  const [ itemQuanity, setItemQuanity] = React.useState(0);

  const customSelectStyle = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#047D95" : "#304050",
      backgroundColor: state.isSelected ? "#F5F5F5" : "#fff",
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      border: "1px",
      boxShadow: "none",
    }),
  }

  const Button = styled.button`
    font: 400 15px Inter;
    background-color: rgba(4,125,149,1);
    padding: 6px 18px 6px;
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

  React.useEffect(() => {
    var allItems = [];

    [].concat(props.items).sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1).forEach(i => {
      var eachItem = {};

      eachItem.label = i.name;
      eachItem.value = i.id;
      allItems.push(eachItem);
    })
    setItemOptions(allItems);
  }, [props.items]);

  React.useEffect(() => {
    var allDonors = [];
    var allOrganizations = [];

    props.donors.forEach(d => {

      var eachDonor = {};
      var eachOrganization = {};
    
      if (d.isOrganisation) {
        eachOrganization.label = d.organisationName;
        eachOrganization.value = d.id;
        allOrganizations.push(eachOrganization);
      } else {
        eachDonor.label = d.donorName;
        eachDonor.value = d.id;
        allDonors.push(eachDonor);
      }
      
    })

    setDonorOptions([{label: "donor", options: allDonors},{label: "organization", options: allOrganizations}]);
  }, [props.donors]);

  const submitDonation = async () => {
    console.log("itemID", theItemID);
    console.log("donorID", theDonorID);
    console.log("quantity", itemQuanity);
    if (theItemID == "") {
      alert(`item not found`);
      return;
    } else if (theDonorID == "") {
      alert(`donor not found`);
      return;
    } else if (itemQuanity <= 0) {
      alert(`quantity should be bigger than 0`);
      return;
    }

    var donation = {
      donorID: theDonorID,
      itemID: theItemID,
      quantity: itemQuanity
    }
    
    await createDonation(donation);
    await new Promise(r => setTimeout(r, 2500));
    await props.fetchDonations();
    
    props.setFormVis(false);
    setInputItemValue(NULL);
    alert("New donation is saved!");
  }

  const closePopup = () => {
    props.setFormVis(false);
  };

  return (
    <View
      width="1328px"
      height="762px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Adddonationnew")}
      {...rest}
    >
      <Icon
        width="545px"
        height="364px"
        viewBox={{ minX: 0, minY: 0, width: 551, height: 364 }}
        paths={[
          {
            d: "M0 0L551 0L551 364L0 364L0 0Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="199px"
        left="388px"
        {...getOverrideProps(overrides, "background")}
      ></Icon>

      <p className="selectItemLabel">Item Name</p>
      <Select
        className="selectItem"
        color="primary"
        styles={customSelectStyle}
        options={itemOptions}
        placeholder="Choose an item..."
        onChange={opt => setTheItemID(opt.value)}
      />
      <p className="selectDonorLabel">Donor Name</p>
      <Select
        className="selectDonor"
        styles={customSelectStyle}
        options={donorOptions}
        placeholder="Choose a donor..."
        onChange={opt => setTheDonorID(opt.value)}
      />

      <Icon
        className="close"
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
        top="31.23%"
        bottom="65.47%"
        left="64.53%"
        right="33.58%"
        {...getOverrideProps(overrides, "Cancel")}
        onClick={() => closePopup()}
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
        top="238px"
        left="440px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Add donation"
        {...getOverrideProps(overrides, "Add donation")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="88px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="470px"
        left="800px"
        {...getOverrideProps(overrides, "button")}
      >
        <Button className="button" onClick={() => submitDonation()}>Save</Button>
      </View>
      <StepperField
        width="134px"
        height="unset"
        label="Quantity"
        position="absolute"
        top="306px"
        left="728px"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="quiet"
        min={0}
        step={1}
        {...getOverrideProps(overrides, "StepperField")}
        value={itemQuanity}
        onStepChange={(e) => setItemQuanity(e)}
      ></StepperField>
    </View>
  );
}
