/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import '../App.css';

import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { RequisitionTableHeader, RequisitionTableOne } from "./";
import { View, TextField, SelectField, Button } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { fetchItems, fetchKits, fetchRecipients, fetchRequisitions } from "../utils/apiUtils";
export default function Donationstable(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('Recipient');
  const [searchInput, setSearchInput] = useState("");
  const [tableData, setTableData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [requisitions, setRequisitions] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [items, setItems] = useState([]);
  const [kits, setKits] = useState([]);
  
  useEffect(() => {
    fetchRequisitions(setRequisitions);
    fetchRecipients(setRecipients);
    fetchItems(setItems);
    fetchKits(setKits);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    window.sessionStorage.setItem("kits", JSON.stringify(kits));
  }, [kits]);

  useEffect(() => {
    var allLines = [];

    requisitions.forEach(r => {
      if (r.depotID == props.curDepot.id) {
        var line = {};

        line.id = r.id;
        line._version = r._version;
        line.notes = r.notes;
  
        var curRecep = recipients.filter(rp => rp.id == r.recipientID)[0];
        if (curRecep != null) line.recipientName = curRecep.name;
   
        var itemsArr = [];
        for (var i=0; i<r.items.length; i++) {
          var curItem = items.filter(it => it.id == r.items[i])[0];
          if (curItem != null) itemsArr.push(`${curItem.name}: ${r.itemQuantity[i]}`);
          // if (curItem != null) console.log(`${curItem.name}: ${r.itemQuantity[i]}`);
        }
        line.items = itemsArr.join(", ");
  
        var kitsArr = []
        for (var i=0; i<r.kits.length; i++) {
          var curKit = kits.filter(k => k.id == r.kits[i])[0];
          if (curKit != null) kitsArr.push(`${curKit.name}: ${r.kitQuantity[i]}`);
        }
        line.kits = kitsArr.join(", ");
  
        line.fulfilled = r.fulfilled;
  
        if (itemsArr.length != 0 || kitsArr.length != 0) allLines.push(line);
      }
    });

    allLines.sort((a, b) => {
      console.log(a);
      if (!a.fulfilled && b.fulfilled) return -1;
      else if (a.fulfilled && !b.fulfilled) return 1;
      else {
        if (a.recipientName != null && b.recipientName != null) return (a.recipientName).localeCompare(b.recipientName);
        else return 0;
      }
    });

    setTableData(allLines);
  }, [requisitions, recipients, items, kits, props.curDepot]);

  useEffect(() => {
    setDisplayData(tableData);
    setSearchInput("");
  }, [tableData])

  const findRequisitions = async (input, field) => {
    if (input.length > 0) {
      if (field == "Recipient") {
        setDisplayData(tableData.filter(t => t.recipientName.toLowerCase().includes(input.toLowerCase())))
      }
    } else {
      setDisplayData(tableData);
    }
  }

  const searchTypeChange = (e) => {
    setSearchType(e.target.value);
  }
  
  
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {findRequisitions(searchInput, searchType)}, [searchInput, searchType]);

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
        right="0px"
        onClick={() => navigate("addRequisitionPage")}
      >Add requisition</Button>
      <TextField
        width="240px" height="unset" placeholder={"Search by " + searchType} position="absolute"
        top="0%" bottom="82.26%" left="13.45%" size="small" isDisabled={false} labelHidden={true} variation="quiet"
        onChange={handleSearchChange} value={searchInput}
      ></TextField>
      <SelectField
        width="115px" height="20px" position="absolute" top="0%" bottom="82.26%" left="0.51%" right="90.37%"
        isDisabled={false} labelHidden={true} variation="quiet" size="small"
        value={searchType} onChange={searchTypeChange}
      >
        <option value="Recipient">Recipient</option>
      </SelectField>
      <RequisitionTableHeader
        className="donationstableheader"
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
      ></RequisitionTableHeader>
      <div className="scrollTable"
        style={{top: "18%", left: "0px", position: "absolute", height: "400px", overflowY: "scroll" }}>
        {
            displayData.map(data => 
            <RequisitionTableOne
              key={data.id} width="976px" height="49px" display="block" gap="unset" alignItems="unset"
              justifyContent="unset" position="relative" top="0%" bottom="38.89%" left="0%"
              right="0%" padding="0px 0px 0px 0px" data={data} fetchRequisitions={fetchRequisitions}
              setRequisitions={setRequisitions}
            ></RequisitionTableOne>
          )
        }
        </div>
    </View>
  );
}
