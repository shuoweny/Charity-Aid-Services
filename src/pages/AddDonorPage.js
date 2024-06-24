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
  ButtonGroup,
  Heading,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { AddChild } from "../ui-components";
import { useNavigate } from "react-router-dom";

export default function AddDonorPage(props) {
  const { overrides, ...rest } = props;

  let navigate = useNavigate(); 
  const AddIndividualDonor = () => { 
    let path = `addIndividualDonor`;
    navigate(path);
  }
  const AddOrganizationDonor = () => { 
    let path = `addOrganisationDonor`;
    navigate(path);
  }
  const cancelAddition = () => {
    navigate(-1);
  }
  return (
    <body>
        <div style={{marginTop: `${3}%`}}>
            <Heading
            width="1000px"
            height="56px"
            shrink="0"
            level="1"
            {...getOverrideProps(overrides, "Heading")}
            >Choose Donor Type</Heading>
        </div>
        <div style={{height: 150}}>
        </div>
        <div>
            <ButtonGroup 
              direction="column" 
              variation="primary"
              width="150" 
              height="50">
              <Button
                  width="150" height="50" shrink="0" borderRadius="39px"
                  isDisabled={false} variation="primary" children="Individual Donor"
                  {...getOverrideProps(overrides, "Button")}
                  onClick={AddIndividualDonor}
              ></Button>
              <Button
                  width="150" height="50" shrink="0" borderRadius="39px"
                  isDisabled={false} variation="primary" children="Organisation Donor"
                  {...getOverrideProps(overrides, "Button")}
                  onClick={AddOrganizationDonor}
              ></Button>
              <Button
                  width="150" height="50" shrink="0" borderRadius="39px"
                  isDisabled={false} variation="primary" children="Back to Previous Page"
                  {...getOverrideProps(overrides, "Button")}
                  onClick={cancelAddition}
              ></Button>
              </ButtonGroup>
        </div>
    </body>
  );
}