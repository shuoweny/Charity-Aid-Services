/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
import {
  StockItemTable, StockCategoryTable, StockKitTable, Overlay,
  AddEditItem, AddEditCategory, AddEditKit
} from "../components";
import {

} from "../ui-components"
import { fetchCategories, fetchItems, fetchKits, fetchStocks } from "../utils/apiUtils";
export default function StockPage(props) {
  const { overrides, ...rest } = props;
  const [view, setView] = React.useState("ITEMS");
  const [form, setForm] = React.useState(<></>);
  const [formVis, setFormVis] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [kits, setKits] = React.useState([]);
  const [stocks, setStocks] = React.useState([]);

  React.useEffect(() => {
    fetchItems(setItems);
    fetchCategories(setCategories);
    fetchKits(setKits);
    fetchStocks(setStocks);
  }, []);

  React.useEffect(() => {
    console.log("items", items[0]);
    window.sessionStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  React.useEffect(() => {
    // console.log("categories", categories);
    window.sessionStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  React.useEffect(() => {
    // console.log("kits", kits);
    window.sessionStorage.setItem("kits", JSON.stringify(kits));
  }, [kits]);

  React.useEffect(() => {
    // console.log("stocks", stocks);
    window.sessionStorage.setItem("stocks", JSON.stringify(stocks));
  }, [stocks]);

  const renderForm = (type, action, data) => {
    setFormVis(true);

    var render;
    switch (type) {
      case "ITEMS":
        render = <AddEditItem action={action} fetchItems={() => fetchItems(setItems)} data={data} setFormVis={setFormVis} />;
        break;
      case "CATEGORIES":
        render = <AddEditCategory action={action} fetchCategories={() => fetchCategories(setCategories)} data={data} setFormVis={setFormVis} />;
        break;
      case "KITS":
        render = <AddEditKit action={action} fetchKits={() => fetchKits(setKits)} data={data} setFormVis={setFormVis} />;
        break;
      default:
        render = <></>;
        setFormVis(false);
        break;
    }
    setForm(render);
  }

  React.useEffect(() => {
    if (!formVis) renderForm("");
  }, [formVis]);

  const renderTable = () => {
    var render;
    switch (view) {
      case "ITEMS":
        render = (<StockItemTable
          width="1062px" height="614px" top="148px" left="0px" padding="0px 0px 0px 0px"
          display="block" gap="unset" alignItems="unset" justifyContent="unset"
          overflow="hidden" position="absolute" renderForm={renderForm}
          setView={setView} curDepot={props.curDepot} stock={stocks}
          items={items} categories={categories} fetchStocks={() => fetchStocks(setStocks)}
          {...getOverrideProps(overrides, "StockItemPage")}
        ></StockItemTable>)
        break;

      case "CATEGORIES":
        render = (<StockCategoryTable
          width="1062px" height="614px" top="148px" left="0px" padding="0px 0px 0px 0px"
          display="block" gap="unset" alignItems="unset" justifyContent="unset"
          overflow="hidden" position="absolute" renderForm={renderForm}
          setView={setView} curDepot={props.curDepot} stock={stocks}
          items={items} categories={categories}
          {...getOverrideProps(overrides, "StockItemPage")}
        ></StockCategoryTable>)
        break;

      case "KITS":
        render = (<StockKitTable
          width="1062px" height="614px" top="148px" left="0px" padding="0px 0px 0px 0px"
          display="block" gap="unset" alignItems="unset" justifyContent="unset"
          overflow="hidden" position="absolute" renderForm={renderForm}
          setView={setView} curDepot={props.curDepot} stock={stocks}
          items={items} kits={kits}
          {...getOverrideProps(overrides, "StockItemPage")}
        ></StockKitTable>)
        break;

      default:
        render = <></>
        break;
    }
    return render;
  };

  return (
    <View
      width="1062px" height="762px" display="block" gap="unset" alignItems="unset" backgroundColor="#F5F5F5"
      justifyContent="unset" overflow="hidden" position="relative" padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StockPage")}
      {...rest}
    >
      <View
        width="1062px" height="148px" display="block" gap="unset" alignItems="unset"
        justifyContent="unset" overflow="hidden" position="relative"
        padding="0px 0px 0px 0px" backgroundColor="#F5F5F5"
        {...getOverrideProps(overrides, "StockLayout")}
        {...rest}
      >
        <Flex
          gap="200px" direction="row" width="1062px" height="148px" justifyContent="flex-start"
          alignItems="center" position="absolute" top="0%" bottom="0%" left="0%" right="0%"
          padding="0px 101px 0px 30px" {...getOverrideProps(overrides, "Frame 999")}
        >
          <Heading
            fontSize="40px" fontWeight="400" color="rgba(4,125,149,1)"
            width="unset" height="unset" justifyContent="flex-start" shrink="0" level="1"
            children="Current Stock" {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Flex gap="40px">
            <Button
              width="116px" height="unset" shrink="0" size="default" isDisabled={false}
              variation="primary" children="Add item" {...getOverrideProps(overrides, "Button37365439")}
              onClick={() => renderForm("ITEMS", "Add")}
            ></Button>
            <Button width="157px" height="unset" shrink="0" size="default" isDisabled={false}
              variation="primary" children="Add category" {...getOverrideProps(overrides, "Button37365437")}
              onClick={() => renderForm("CATEGORIES", "Add")}
            ></Button>
            <Button
              width="99px" height="unset" shrink="0" size="default" isDisabled={false}
              variation="primary" children="Add kit" {...getOverrideProps(overrides, "Button37365438")}
              onClick={() => renderForm("KITS", "Add")}
            ></Button>
          </Flex>
        </Flex>
      </View>
      <Overlay show={formVis}>
        {form}
      </Overlay>
      {renderTable()}
    </View>
  );
}
