/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Heading,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { donors } from "../components/DonorTable";
import { AddIdDoc } from "../components";
import { createDonor } from "../utils/apiUtils";


export default function DonorOption(props) {
  const { overrides, ...rest } = props;
  const [donorIDs, setDonorIDs] = useState([]);
  const [donorName, setDonorName] = useState('');
  const [donorAge, setDonorAge] = useState('');
  const [donorNationality, setDonorNationality] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhoneNum, setDonorPhoneNum] = useState('');
  const [donorExpir, setDonorExpir] = useState('');
  const [donorMail, setDonorMail] = useState('');
  const [donorCommunication, setDonorCommunication] = useState('');
  
  const handleMailChange = (event) => {
    setDonorMail(event.target.value);
  };  
  const handleNameChange = (event) => {
    setDonorName(event.target.value);
  };  
  const handleAgeChange = (event) => {
    setDonorAge(event.target.value);
  };  
  const handleNationalityChange = (event) => {
    setDonorNationality(event.target.value);
  };  
  const handleEmailChange = (event) => {
    setDonorEmail(event.target.value);
  }; 
  const handlePhoneNumChange = (event) => {
    setDonorPhoneNum(event.target.value);
  }; 
  const handleExpirChange = (event) => {
    setDonorExpir(event.target.value);
  }; 
  const handleCommunicationChange = (event) => {
    setDonorCommunication(event.target.value);
  }; 
  

  const addDonorID = () => {
    setDonorIDs(s => [...s, {type: "", documentID: "", expiry: "", image: null, imageLink: ""}]);
  };

  let navigate = useNavigate();
  const cancelAddition = () => {
    navigate(-1);
  }

  const submitInDonor = async () => {
    var data = {
      isOrganisation: false,
      email: donorEmail,
      phone: donorPhoneNum,
      preferredContactMode: donorCommunication,
      nationality: donorNationality,
      donorName: donorName,
      mailingAddress: donorMail
    };
   
    // createDonor(data);
    if(data.email!='' && data.phone!='' && data.preferredContactMode!='' && data.nationality!=''){
      // console.log("data", data);
      createDonor(data);
      await new Promise(r => setTimeout(r, 1000));
      alert('Add Successful!');
      navigate(-2);
    }
    else{
      alert('Add Fail! Please input valid email, phone, preferredContactMode and nationality.');
    }
    
    
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
        >Add Individual Donor</Heading>
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
        alignItems="center"
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
            borderRadius="39.67446720600128px"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034880")}
            onChange={handleNameChange}
          ></TextField>
          <TextField
            width="111px"
            height="unset"
            borderRadius="39.67446720600128px"
            label="Age*"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            onChange={handleAgeChange}
            {...getOverrideProps(overrides, "TextField39034887")}
          ></TextField>
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
            onChange={handleNationalityChange}
            {...getOverrideProps(overrides, "TextField40305790")}
          ></TextField>
        </Flex>
        <TextField
            width="90%"
            height="unset"
            borderRadius="39.67446720600128px"
            label="Mailing Address*"
            placeholder="Enter…"
            gap="8.138352394104004px"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            onChange={handleMailChange}
            {...getOverrideProps(overrides, "TextField40304546")}
          ></TextField>
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
            onChange={handlePhoneNumChange}
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
            onChange={handleEmailChange}
            variation="default"

            {...getOverrideProps(overrides, "TextField39374890")}
          ></TextField>
          <SelectField
            width="225px"
            height="90px"
            borderRadius="39.67446720600128px"
            label="Preferred communication*"
            shrink="0"
            placeholder="Placeholder"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            onChange={handleCommunicationChange}
            {...getOverrideProps(overrides, "SelectField40305111")}
          >
            <option value="Phone">Phone</option>
            <option value="Email">Email</option>
            <option value="Mail">Mail</option>

          </SelectField>
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
            onClick={cancelAddition}
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
            onClick={submitInDonor}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
    </body>
  );
}