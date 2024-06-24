import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import { fetchRecipients } from "../utils/apiUtils";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {RecipientTableHeader, RecipientTableOne} from "../components";
import { useNavigate } from "react-router-dom";


// let recipients = [
//   {
//     ID: 1000000, 
//     name: "John Write", 
//     message: "I need to request some aid items for a family in need."
//   }, 
//   {
//     ID: 1000001, 
//     name: "Anna Wang", 
//     message: "I need to request some blankets."
//   }
// ]
// export { recipients };

export default function RecipientTable(props) {
  const { overrides, ...rest } = props;
  const [recipientData, setResipientData] = useState([]);
  React.useEffect(() => {
    fetchRecipients(setResipientData);
  }, []);
  const [tableData, setTableData] = useState([]);

  const Button = styled.button`
    font: 400 13px Inter;
    background-color: rgba(4,125,149,1);
    width: 120px;
    padding: 10px 0px 10px;
    color: white;
    border-radius: 0px;
    outline: 0;
    border: 0;   
    margin: 0% 85%;
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
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `addRecipientPage`; 
    navigate(path);
  }
  useEffect(() => {
    if (props.recipients == null) return;
    var allLines = [];
  console.log("donor data", props.recipients);

    [].concat(props.recipients).sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1).forEach(d => {
      var line = {};
      if(d.partner == null){
        line.partner = "Not Have";
      }
      else{
        line.partner = "Have";
      }
      line.name = d.name;
      line.Address = d.previousAddress;
      // line.nationality = d.nationality;
      line.age = d.age;
      line.familyCount = d.familyCount;
      
      allLines.push(line);
      console.log("allLines", allLines);

    });
    allLines.sort((a, b) => {
      if (a.name != null && b.name != null) return (a.name).localeCompare(b.name);
      else return 0;
    });
    setTableData(allLines);
  }, [props]);
  return (
    <View
      width="976px"
      height="186px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      top="0px"
      {...getOverrideProps(overrides, "Donationstable")}
      {...rest}
    >
      <Button
        className="popupButton"
        width="unset"
        height="unset"
        position="absolute"
        size="small"
        isDisabled={false}
        variation="primary"
        top="10px"
        onClick={routeChange}
        {...getOverrideProps(overrides, "Button")}
      >Add Recipient</Button>
      <RecipientTableHeader
        className="DonorTableHeader"
        width="976px"
        height="28px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12%"
        bottom="52.69%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "donor table header")}
      ></RecipientTableHeader>
      <div className="scrollTable"
        style={{top: "18%", left: "0px", position: "absolute", height: "400px", }}>
        {
            tableData.map(data => 
            <RecipientTableOne
                width="976px"
                height="49px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="relative"
                top="0%"
                bottom="38.89%"
                left="0%"
                right="0%"
                padding="0px 0px 0px 0px"
                data={data}
                {...getOverrideProps(overrides, "donations table one39064663")} key={data.id}
            ></RecipientTableOne>
          )
        }
        </div>
    </View>
  )
}
