/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import '../App.css';

import * as React from "react";
import {useState, useEffect} from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Donationstableheader from "./Donationstableheader";
import Donationstableone from "./Donationstableone";
import { View, SearchField, SelectField, Button} from "@aws-amplify/ui-react";
export default function Donationstable(props) {
  const { overrides, ...rest } = props;
  const [searchType, setSearchType] = useState('Item');
  const [searchInput, setSearchInput] = React.useState("");
  const [tableData, setTableData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setDisplayData(tableData);
    setSearchInput("");
  }, [tableData])

  useEffect(() => {
    if (props.items == null || props.categories == null || props.donors == null || props.donations == null) return;
    var allLines = [];
  

    [].concat(props.donations).sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1).forEach(d => {
      var line = {};
      var item = props.items.filter(i => i.id == d.itemID)[0];
      if (item == null) {
        setTableData([]);
        return;
      }

      var category = props.categories.filter(c => c.id == item.categoryId)[0];

      var donor = props.donors.filter(aDonor => aDonor.id == d.donorID)[0];
      if (donor == null){
        setTableData([]);
        return;
      }
      
      line.id = d.id;
      line.updatedAt = d.updatedAt.slice(0, 10);
      line.itemName = item.name;
      line.category = category != null ? category.name : "itemCategory";
  
      line.quantity = d.quantity;
      line.donor = donor.donorName;

      allLines.push(line);
    });
    allLines.sort((b, a) => {
      if (a.updatedAt != null && b.updatedAt != null) return (a.updatedAt).localeCompare(b.updatedAt);
      else return 0;
    });
    setTableData(allLines);
  }, [props.items, props.categories, props.donors, props.donations]);

  const findDonations = async (input, field) => {
    if (input.length > 0) {
      if (props.items == null || props.categories == null || props.donors == null || props.donations == null) return;

      if (field == "Item") {
        setDisplayData(tableData.filter(t => t.itemName.toLowerCase().includes(input.toLowerCase())))
      }
      if (field == "Donor") {
        setDisplayData(tableData.filter(t => t.donor.toLowerCase().includes(input.toLowerCase())))
      }
      if (field == "Date") {
        setDisplayData(tableData.filter(t => t.updatedAt.toLowerCase().includes(input.toLowerCase())))
      }
      if (field == "Category") {
        setDisplayData(tableData.filter(t => t.category.toLowerCase().includes(input.toLowerCase())))
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

  useEffect(() => {findDonations(searchInput, searchType)}, [searchInput, searchType]);
  
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
        right="0%"
        isDisabled={false}
        variation="primary"
        onClick={() => props.renderForm("KITS", "Add")}
      >Add donation</Button>
      <SearchField
        width="240px"
        height="unset"
        placeholder={"Search by " + searchType}
        position="absolute"
        top="0%"
        bottom="82.26%"
        left="12.65%"
        right="68.55%"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        onChange={handleSearchChange}
        value={searchInput}
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <SelectField
        width="110px"
        height="20px"
        position="absolute"
        top="0%"
        bottom="82.26%"
        left="0.51%"
        right="90.37%"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        value={searchType} onChange={searchTypeChange}
        {...getOverrideProps(overrides, "SelectField")}
      >
        <option value="Item">Item</option>
        <option value="Category">Category</option>
        <option value="Donor">Donor</option>
        <option value="Date">Date</option>
      </SelectField>
      <Donationstableheader
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
        {...getOverrideProps(overrides, "donations table header")}
      ></Donationstableheader>
      <div className="scrollTable"
        style={{top: "18%", left: "0px", position: "absolute", height: "400px", }}>
        {
            displayData.map(data => 
            <Donationstableone
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
            ></Donationstableone>
          )
        }
        </div>
    </View>
  );
}
