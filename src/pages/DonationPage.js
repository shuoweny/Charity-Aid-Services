import '@aws-amplify/ui-react/styles.css';
import '../App.css';


import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchDonations, fetchItems, fetchDonors, fetchCategories } from "../utils/apiUtils";
import { Text, View } from "@aws-amplify/ui-react";
import {DonationsTable, FullscreenOverlay, Adddonation} from "../components";
export default function DonationPage(props) {
  const { overrides, ...rest } = props;
  // add donation form
  const [form, setForm] = React.useState(<></>);
  const [formVis, setFormVis] = React.useState(false);

  const [donations, setDonations] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [donors, setDonors] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  /*
  const popoutStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "164px",
    height: "208px",
    position: "absolute",
    padding: "0px 0px 0px 0px",
    backgroundColor: "rgba(245,245,245,1)"
  };
  */

  React.useEffect(() => {
    fetchDonations(setDonations);
    fetchItems(setItems);
    fetchDonors(setDonors);
    fetchCategories(setCategories);
  }, []);


  React.useEffect(() => {
    window.sessionStorage.setItem("donations", JSON.stringify(donations));
  }, [donations]);

  React.useEffect(() => {
    window.sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  React.useEffect(() => {
    window.sessionStorage.setItem("donors", JSON.stringify(donors));
  }, [donors]);

  React.useEffect(() => {
    window.sessionStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const renderForm = (type, action, id) => {
    setFormVis(true);

    var render = <Adddonation action={action} id={id} setFormVis={setFormVis} 
    items={items} donors={donors} fetchDonations={() => fetchDonations(setDonations)}
    />;
    setForm(render);
  }

  const renderTable = () => {
    var render = (<DonationsTable
          width="976px" height="500px" top="134px" left="297px" padding="0px 0px 0px 0px"
          display="block" gap="unset" alignItems="unset" justifyContent="unset"
          marginTop= "50" items={items} categories={categories} 
          donors={donors} donations={donations} renderForm={renderForm}
          overflow="hidden" position="absolute"
          {...getOverrideProps(overrides, "DonationsTable")}
        ></DonationsTable>)
    return render;
  };


  return (
    <>
      <FullscreenOverlay show={formVis}>
        {form}
      </FullscreenOverlay>
      <View
        width="1062px"
        height="762px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="266px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "backg")}
      ></View>
      <Text
                fontSize="40px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="52.08000183105469px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="47px"
        left="297px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Donations"
        {...getOverrideProps(overrides, "Donations37874592")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="976px"
        height="486px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="180px"
        left="297px"
        {...getOverrideProps(overrides, "Transaction History")}
      >
        <View
          width="976px"
          height="486px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Card backg")}
        ></View>
      </View>      
      {renderTable()}
    </>
    
  );
}