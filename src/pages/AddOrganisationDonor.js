/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, TextField } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { donors } from "../components/DonorTable";
import { AddIdDoc } from "../components";
import { createDonor } from "../utils/apiUtils";

export default function AddDonorPageOrganisation(props) {
  const { overrides, ...rest } = props;
  const [donorName, setDonorName] = useState("");
  const [donorPrincipleName, setPrincipleName] = useState("");
  const [donorPrincipleNum, setPrincipleNum] = useState("");
  const [ABN, setABN] = useState("");
  const [donorNationality, setDonorNationality] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhoneNum, setDonorPhoneNum] = useState('');
  const [donorMail, setDonorMail] = useState('');
  const [donorCommunication, setDonorCommunication] = useState('');
  
  const handleMailChange = (event) => {
    setDonorMail(event.target.value);
  };  
  const handlePNChange = (event) => {
    setPrincipleNum(event.target.value);
  };  
  const handleNameChange = (event) => {
    setDonorName(event.target.value);
  };  
  const handleABNChange = (event) => {
    setABN(event.target.value);
  };  
  const handlePrincipleChange = (event) => {
    setPrincipleName(event.target.value);
  };   
  const handleEmailChange = (event) => {
    setDonorEmail(event.target.value);
  }; 
  const handlePhoneNumChange = (event) => {
    setDonorPhoneNum(event.target.value);
  }; 

  const submitOrDonor = async () => {
    var data = {
      isOrganisation: true,
      email: donorEmail,
      phone: donorPhoneNum,
      preferredContactMode: 'null',
      nationality: 'null',
      mailingAddress: donorMail,
      organisationName: donorName,
      principalContactNam: donorPrincipleName,
      ABN: ABN
    };
    
    if(data.OrganisationName!='' && data.ABN!='' && data.mailingAddress!='' && data.phone!='' && data.principalContactNam!='' && data.email!=''){
      console.log("data", data);
      createDonor(data);
      await new Promise(r => setTimeout(r, 1000));
      alert('Add Successful!');
      navigate(-2);
    }
    else{
      alert('Add Fail! Please input valid email, phone, preferredContactMode and nationality.');
    }
    
    
  };

  let navigate = useNavigate();
  const cancelAddition = () => navigate(-1);
  const [donorIDs, setDonorIDs] = useState([]);

  const addDonorID = () => {
    setDonorIDs(s => [...s, {type: "", documentID: "", expiry: "", image: null, imageLink: ""}]);
  };

  return (
    <body>
      <div style={{marginTop: `${3}%`}}>
        <Heading
        width="1000px"
        height="56px"
        shrink="0"
        level="1"
        {...getOverrideProps(overrides, "Heading")}
        >Add Organisation Donor</Heading>
      </div>
      <Flex
        gap="-1.0172940492630005px"
        direction="column"
        width="1000px"
        height="550px"
        justifyContent="center"
        alignItems="center"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AddDonorPageOrganisation")}
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
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45.77823257446289px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(250,250,250,1)"
          {...getOverrideProps(overrides, "Frame 1011")}
        >
          <Flex
            gap="60px"
            direction="row"
            width="983px"
            height="89px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="45px"
            padding="0px 17px 0px 17px"
            {...getOverrideProps(overrides, "frame39034862")}
          >
            <TextField
              width="522px"
              height="unset"
              label="Organisation Name*"
              placeholder="Enter…"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              onChange={handleNameChange}
              {...getOverrideProps(overrides, "TextField39034880")}
            ></TextField>
            <TextField
              width="291px"
              height="unset"
              label="Organisation Contact Number*"
              placeholder="Enter…"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              onChange={handlePhoneNumChange}
              {...getOverrideProps(overrides, "TextField39034887")}
            ></TextField>
          </Flex>
          <Flex
            gap="50px"
            direction="row"
            width="983px"
            height="89px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="45px"
            padding="0px 10px 0px 10px"
            {...getOverrideProps(overrides, "frame39034862")}
          >
            <TextField
              width="200px"
              height="unset"
              label="Contact Priciple Name*"
              placeholder="Enter…"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              onChange={handlePrincipleChange}
              {...getOverrideProps(overrides, "TextField39034880")}
            ></TextField>
            <TextField
              width="250px"
              height="unset"
              label="Contact Priciple Contact Number*"
              placeholder="Enter…"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              onChange={handlePNChange}
              {...getOverrideProps(overrides, "TextField39034887")}
            ></TextField>
            <TextField
              width="320px"
              height="unset"
              label="Email Address*"
              placeholder="Enter…"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              onChange={handleEmailChange}
              {...getOverrideProps(overrides, "TextField39034887")}
            ></TextField>
          </Flex>
          <Flex
            gap="60px"
            direction="row"
            width="983px"
            height="89px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="45px"
            padding="0px 17px 0px 17px"
            {...getOverrideProps(overrides, "frame39374889")}
          >
            <TextField
              width="537px"
              height="unset"
              label="Organisation Address*"
              placeholder="Enter…"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              onChange={handleMailChange}
              {...getOverrideProps(overrides, "TextField39034894")}
            ></TextField>
            <TextField
              width="279px"
              height="unset"
              label="Australia Business Number*"
              placeholder="Enter…"
              shrink="0"
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              onChange={handleABNChange}
              {...getOverrideProps(overrides, "TextField39374890")}
            ></TextField>
          </Flex>
          <Flex direction={"column"} style={{overflowY: "scroll"}} height="125px" display={donorIDs.length > 0 ? "flex" : "none"}>
            {
              [...Array(donorIDs.length).keys()].map(idx => 
                <AddIdDoc idx={idx} data={donorIDs} setData={setDonorIDs} />
              )
            }
          </Flex>
          { donorIDs.length >= 3 ? <></>
          : <Button
              width="200px"
              height="45px"
              borderRadius="39.67446720600128px"
              label="Supporting Document*"
              shrink="0"
              children="Add ID Document"
              size="default"
              isDisabled={false}
              labelHidden={false}
              onClick={addDonorID}
              variation="primary"
              {...getOverrideProps(overrides, "SelectField40306228")}
            ></Button>
          }
          <Flex
            gap="75px"
            direction="row"
            width="983px"
            height="89px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="45px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "frame39035013")}
          >
            <Button
              width="unset"
              height="unset"
              borderRadius="39px"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="default"
              children="Cancel"
              {...getOverrideProps(overrides, "Button39035019")}
              onClick={cancelAddition}
            ></Button>
            <Button
              width="unset"
              height="unset"
              borderRadius="38px"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="primary"
              children="Submit"
              {...getOverrideProps(overrides, "Button39035023")}
              onClick={submitOrDonor}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </body>
  );
}