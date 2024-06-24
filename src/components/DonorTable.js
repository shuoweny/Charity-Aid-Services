import * as React from "react";
import {useState, useEffect} from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View, SearchField, SelectField } from "@aws-amplify/ui-react";
import styled from "styled-components";
import {DonorTableHeader, DonorTableOne} from "../components"
import { useNavigate } from "react-router-dom";


export default function DonorTable(props) {
  const { overrides, ...rest } = props;
  const [search, setSearch] = useState('item');
  const [searchInput, setSearchInput] = useState("");
  const [donations, setDonations] = useState([]);
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

  useEffect(() => {
    if (props.donors == null) return;
    var allLines = [];
  // console.log("donor data", props);

    [].concat(props.donors).sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1).forEach(d => {
      var line = {};
      if(d.isOrganisation == true){
        line.donorName = d.organisationName;
        line.role = 'Organisation';
      }
      else{
        line.donorName = d.donorName;
        line.role = 'Individual';
      }
      line.email = d.email;
      line.mailing = d.mailingAddress;
      line.phone = d.phone;
      allLines.push(line);
      // console.log("allLines", allLines);

    });
    allLines.sort((a, b) => {
      if (a.donorName != null && b.donorName != null) return (a.donorName).localeCompare(b.donorName);
      else return 0;
    });
    setTableData(allLines);
  }, [props]);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `addDonorPage`; 
    navigate(path);
  }
  

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
      >Add Donor</Button>
      <DonorTableHeader
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
      ></DonorTableHeader>
      <div className="scrollTable"
        style={{top: "18%", left: "0px", position: "absolute", height: "400px", }}>
        {
            tableData.map(data => 
            <DonorTableOne
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
            ></DonorTableOne>
          )
        }
        </div>
    </View>
  );
}