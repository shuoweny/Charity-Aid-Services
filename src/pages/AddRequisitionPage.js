/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchRecipients, createRequisition } from "../utils/apiUtils";
import {useState, useEffect} from "react";
import AddKitItem from "../components/AddKitItem";
import {
  Button,
  Flex,
  Heading,
  SelectField,
  Text,
  TextField,
  Autocomplete,
  Divider
  
} from "@aws-amplify/ui-react";
import SelectDepot from "../components/SelectDepot";
import { AddChild } from "../ui-components";
import { useNavigate } from "react-router-dom";
import { SelectKit } from "../components";

export default function AddRecipientPage(props) {
  const { overrides, ...rest } = props;
  const [recipients, setRecipients] = React.useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [chooseDepot, setChooseDepot] = React.useState({});
  const [fulfill, setFulfill] = useState(false);
  const [note, setNote] = useState("");
  const [items, setItems] = useState([]);
  const [kits, setKits] = useState([]);
  const [addMode, setAddMode] = useState(null);

  const handleAddItem = () => {
    setAddMode("item");
    setItems(i => [...i, {item: "{}", quantity: "0"}])
  };

  const handleAddKit = () => {
    setAddMode("kit");
    setKits(i => [...i, {kit: "{}", quantity: "0"}])
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };  
  
    const handleChange = (event) => {
      setFulfill(event.target.value === "false" ? false : true);
    };
 
  React.useEffect(() => {
    fetchRecipients(setRecipients);
  }, []);
  
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Search for matching recipients
    const matchingRecipients = recipients.filter((recipient) =>
      recipient.name.toLowerCase().includes(value.toLowerCase())
    );

    // Create options array for TextField
    const matchingOptions = matchingRecipients.map((recipient) => ({
      label: recipient.name,
      value: recipient.id,
    }));

    setOptions(matchingOptions);
  };
  const handleInputClear = () => {
    setInputValue('');
    setOptions([]);
  };
  const handleOptionSelect = (option) => {
    setInputValue(option.label);
    setSelectedRecipient(option.value);
  };
  let navigate = useNavigate(); 
  const cancelAddition = () =>{ 
    navigate(-1);
  }
  const submitKit = async () => {
    var data = {
      recipientID: selectedRecipient,
      depotID: chooseDepot.id,
      fulfilled: fulfill,
      kits: [],
      kitQuantity: [],
      items: [],
      itemQuantity: [],
      notes: note,
    };
    console.log("kits", kits);
    items.forEach(ki => {
      if (ki.item !== undefined && ki.quantity!=0) {
        // TODO validate no dup item
        data.items.push(JSON.parse(ki.item).id);
        data.itemQuantity.push(parseInt(ki.quantity));
      }
    });
    kits.forEach(ki => {
      // TODO validate no dup item
      if (ki.kit !== undefined && ki.quantity!=0) {
        data.kits.push(JSON.parse(ki.kit).id);
        data.kitQuantity.push(parseInt(ki.quantity));
      }
    });
    console.log("data", data);
    if(data.recipientID!=null && data.depotID!={} && ((data.items!=[] && data.itemQuantity!=0) || (data.kits!=[] && data.kitQuantity!=0))){
      createRequisition(data);
      await new Promise(r => setTimeout(r, 1000));
      alert('Add Successful!');
      navigate(-1);
    }
    else{
      alert('Add Fail! Please input valid recipient name, depot and status.');
    }
    
    
  };
  return (
    
    <Flex
      gap="-1px"
      direction="column"
      width="983px"
      height="615px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      
      {...getOverrideProps(overrides, "AddRecipientPage")}
      {...rest}
    >
      <Heading
        width="1000px"
        height="56px"
        shrink="0"
        level="1"
        {...getOverrideProps(overrides, "Heading")}
      >Add Requisition</Heading>
      <Flex
        gap="-1px"
        direction="column"
        width="983px"
        height="auto"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="45px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Frame 1011")}
      >
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
          padding="0px 17px 0px 17px"
          {...getOverrideProps(overrides, "frame39034862")}
        >
         
         <div>
      <h2>Recipients*</h2>
      <Autocomplete
        id="recipient-autocomplete"
        options={options}
        value={inputValue}
        onChange={handleInputChange}
        onClear={handleInputClear}
        onSelect={handleOptionSelect}
      />
    </div>

    <div>
      <h2>Select Depot*</h2>
      <SelectDepot selectedDepot={chooseDepot} setSelectedDepot={setChooseDepot} />
    </div>
    <div>
      <h2>Select status*</h2>
      <SelectField value={fulfill} onChange={handleChange}>
      <option value={false}>Unfulfilled</option>
      <option value={true}>Fulfilled</option>
    </SelectField>
    </div>
         
        </Flex>
        <Flex
          gap="37px"
          direction="column"
          width="983px"
          height="55px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="45px"
          padding="0px 0px 0px 0px"
          
          {...getOverrideProps(overrides, "frame39034863")}
        >
          <h2>Select items and kits</h2>
        </Flex>
        <div style={{ height: "85px", overflowY: "scroll", width: "983px"}}>
        {addMode === "item" &&
        [...Array(items.length).keys()].map((idx) => (
          <AddKitItem kitItems={items} idx={idx} setKitItems={setItems} />
        ))}
      {addMode === "kit" &&
        [...Array(kits.length).keys()].map((idx) => (
          <SelectKit kitItems={kits} idx={idx} setKitItems={setKits} />
        ))}
          
          </div>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            {...getOverrideProps(overrides, "Frame 41137133634")}
          >
            {/* <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children=""
              {...getOverrideProps(overrides, "Info37133635")}
            ></Text> */}
            <Button
              width="330px" height="unset" shrink="0" size="default"
              isDisabled={false} variation="default" children="Add Item"
              onClick={handleAddItem}
              {...getOverrideProps(overrides, "Button37133636")}
            ></Button>
            <Button
              width="330px" height="unset" shrink="0" size="default"
              isDisabled={false} variation="default" children="Add Kit"
              onClick={handleAddKit}
              {...getOverrideProps(overrides, "Button37133636")}
            ></Button>
            </Flex>
            
          
          
   
          <Flex
            gap="8px"
            direction="column"
            width="203px"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "TextField39034961")}
          >
           {/* <div style={{ display: 'flex', alignItems: 'center' }}>
         <SelectKit selectedKit={chooseKit} onChange={setChooseKit} />
         <TextField
            width="203px"
            height="unset"
            label="Quantity*"
            placeholder="Enter…"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            type="number"
            value={kitQuantity}
            onChange={e => setKitQuantity(e.target.value)}
            {...getOverrideProps(overrides, "TextField39034947")}
          ></TextField>
      </div>   */}
          </Flex>
        {/* </Flex> */}
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
          {...getOverrideProps(overrides, "frame39034878")}
        >
           <div>
        <TextField
        label="Note"
        value={note}
        onChange={handleNoteChange}
        placeholder="Enter your note"
        />
        </div>
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
            onClick={()=>submitKit()}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
   
  );
}