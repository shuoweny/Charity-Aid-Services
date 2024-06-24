/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useEffect } from "react";
import { Storage } from 'aws-amplify';
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Heading,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createRecipient } from "../utils/apiUtils";
import { AddIdDoc, AddChild } from "../components";

export default function AddRecipientPage(props) {
  const { overrides, ...rest } = props;

  // 说不定可以放component里面，外面就留个recipientInfo = useState({})
  const [recipientName, setRecipientName] = useState("");
  const [age, setAge] = useState("");
  const [prevAddress, setPrevAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [selfIDs, setSelfIDs] = useState([]);
  const [hasPartner, setHasPartner] = useState(false);

  // 说不定可以放component里面，外面就留个partnerInfo = useState({})
  const [partnerName, setPartnerName] = useState("");
  const [partnerAge, setPartnerAge] = useState("");
  const [partnerNationality, setPartnerNationality] = useState("");
  const [partnerIDs, setPartnerIDs] = useState([]);

  const [childrenInfo, setChildrenInfo] = useState([]); // 单独的index在AddChild component里面改

  const addSelfID = () => {
    setSelfIDs(s => [...s, {type: "", documentID: "", expiry: "", image: null, imageLink: ""}]);
  };
  const addPartnerID = () => {
    setPartnerIDs(s => [...s, {type: "", documentID: "", expiry: "", image: null, imageLink: ""}]);
  };

  useEffect(() => {
  }, []);

  useEffect(() => {console.log("hasPartner", hasPartner)}, [hasPartner]);

  let navigate = useNavigate(); 
  const cancelAddition = () =>{ 
    navigate(-1);
  };

  const addRecipient = async () => {
    // if (recipientName == "") return;
    // if (prevAddress == NaN) return;
    // if (parseInt(age) == NaN) return;
    
    const data = {
      name: recipientName,
      previousAddress: prevAddress,
      age: parseInt(age),
      nationality: nationality,
      idDocuments: selfIDs,
      familyCount: 0, //3,
      partner: !hasPartner ? null : {
        name: partnerName, age: partnerAge, nationality: partnerNationality, idDocuments: partnerIDs
      },
      children: childrenInfo
    }
    if(data.name!='' && data.previousAddress!='' && data.age!=NaN && data.nationality!=''&& data.familyCount!=NaN){
      // console.log("data",data);
      createRecipient(data);
      await new Promise(r => setTimeout(r, 1000));
      alert('Add Successful!');
      navigate(-1);
    }
    else{
      // console.log("NO?",data);
      alert('Add Fail! Please input valid recipient name, previousAddress, age, nationality and select the child number.');
    }
    
    // let currentID = recipients[recipients.length-1].ID + 1;
    // let currentRecipient = {ID: currentID, name: recipientName, message: recipientMessage};
    // recipients.push(currentRecipient);
    // navigate(-1);
  }

  const [childrenNum, setChildrenNum] = useState(0);

  useEffect(() => {
    console.log(childrenNum);
    var newChildrenInfo = childrenInfo.slice();
    if (childrenInfo.length < childrenNum) {
      for (var i=0; i<childrenNum-childrenInfo.length; i++) {
        newChildrenInfo.push({name: "", age: "", nationality: "", idDocuments: []});
      }
    } else {
      for (var i=0; i<childrenInfo.length-childrenNum; i++) {
        newChildrenInfo.pop();
      }
    }
    setChildrenInfo(newChildrenInfo);
  }, [childrenNum]);

  useEffect(() => {console.log(childrenInfo)}, [childrenInfo]);

  return (
    <body>
       <div style={{marginTop: `${3}%`}}>
        <Heading
        width="1000px"
        height="56px"
        shrink="0"
        level="1"
        {...getOverrideProps(overrides, "Heading")}
        >Add Recipient</Heading>
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
        gap="-1px"
        direction="column"
        width="983px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="45px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Frame 1011")}
      >
        
        <Flex
          gap="35px"
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
            width="168px"
            height="unset"
            label="Name*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField39034880")}
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
          ></TextField>
          <TextField
            width="168px"
            height="unset"
            label="Age*"
            type="number"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={age} onChange={e => setAge(e.target.value)}
            {...getOverrideProps(overrides, "TextField39034887")}
          ></TextField>
          <TextField
            width="300px"
            height="unset"
            label="Previous Address*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={prevAddress} onChange={e => setPrevAddress(e.target.value)}
            {...getOverrideProps(overrides, "TextField39034894")}
          ></TextField>
          <TextField // TODO 好看的选择国家（好像来不及）
            width="100px"
            height="unset"
            label="Nationality*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={nationality} onChange={e => setNationality(e.target.value)}
            {...getOverrideProps(overrides, "SelectField39035206")}
          ></TextField>
        </Flex>
        <Flex direction={"column"} style={{overflowY: "scroll"}} height="100px" display={selfIDs.length > 0 ? "flex" : "none"}>
        {
          [...Array(selfIDs.length).keys()].map(idx => 
            <AddIdDoc idx={idx} data={selfIDs} setData={setSelfIDs} />
          )
        }
        </Flex>
        {selfIDs.length >= 3 ? <></>
        :
          <Button
            width="unset"
            height="unset"
            borderRadius="38px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Add ID Document"
            {...getOverrideProps(overrides, "Button39035023")}
            onClick={() => addSelfID()}
          ></Button>
        }
        <Flex
          gap="35px"
          direction="row"
          width="983px"
          height="89px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "frame39034878")}
        >
          <SelectField label="Has partner?" value={hasPartner} onChange={e => setHasPartner(e.target.value == "true")}>
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </SelectField>
          {
            !hasPartner ? <></>
          :<>
          <TextField
            width="240px"
            height="unset"
            label="Partner Name*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={partnerName} onChange={e => setPartnerName(e.target.value)}
            {...getOverrideProps(overrides, "TextField39034994")}
          ></TextField>
          <TextField
            width="80px"
            height="unset"
            label="Partner Age*"
            placeholder="Enter…"
            shrink="0"
            type="number"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={partnerAge} onChange={e => setPartnerAge(e.target.value)}
            {...getOverrideProps(overrides, "TextField39035001")}
          ></TextField>
          <TextField
            width="169px"
            height="unset"
            label="Partner Nationality*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={partnerNationality} onChange={e => setPartnerNationality(e.target.value)}
            {...getOverrideProps(overrides, "TextField39035001")}
          ></TextField>
          </>}
        </Flex>
        {
          [...Array(partnerIDs.length).keys()].map(idx => 
            <AddIdDoc idx={idx} data={partnerIDs} setData={setPartnerIDs} />
          )
        }
        <SelectField
          width="235px"
          height="unset"
          label="Number of children*"
          placeholder="Enter…"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          id="childrenNum"
          {...getOverrideProps(overrides, "SelectField39035239")}
          onChange={(e) => setChildrenNum(parseInt(e.target.value))}
        >
          { [...Array(21).keys()].map(j =>
            <option value={j}>{j}</option>
          )}
        </SelectField>
        <Flex direction={"column"} style={{overflowY: "scroll"}} height="100px" width="100%" display={childrenInfo.length > 0 ? "flex" : "none"}>
          {[...Array(childrenInfo.length).keys()].map(idx => 
            <AddChild
              idx={idx} data={childrenInfo} setData={setChildrenInfo}
              display="flex" gap="75px" direction="row" width="433px" height="unset" justifyContent="center"
              alignItems="center" shrink="0" position="relative" borderRadius="45px" padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "AddChild")}
            ></AddChild> 
          )}
        </Flex>
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
            onClick={addRecipient}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
    </body>
  );
}