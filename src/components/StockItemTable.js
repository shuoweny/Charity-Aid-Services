/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useEffect, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { StockPageSubNav, StockHeaderBarItems, ItemOne } from "./";
import { View } from "@aws-amplify/ui-react";
export default function StockItemTable(props) {
  const { overrides, ...rest } = props;
  const [otherDepot, setOtherDepot] = useState({});
  const [stockHere, setStockHere] = useState([]);
  const [stockOther, setStockOther] = useState([]);
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    if (props.curDepot == null || Object.keys(props.curDepot).length === 0) return;
    if (props.stock == null) return;
    setStockHere(props.stock.filter(s => s.depotID == props.curDepot.id).sort((a, b) => a.itemId < b.itemId));
  }, [props.curDepot, props.stock]);

  useEffect(() => {
    if (otherDepot == null || otherDepot.length === 0) return;
    if (props.stock == null) return;
    setStockOther(props.stock.filter(s => s.depotID == otherDepot.id).sort((a, b) => a.itemId < b.itemId));
  }, [otherDepot, props.stock]);

  useEffect(() => {
    if (props.items == null || props.categories == null) return;
    var allLines = [];
    var itemCountHere = {}
    var itemCountOther = {}
    stockHere.forEach(sh => {
      itemCountHere[sh.itemID] = [sh.quantity, sh];
    })
    stockOther.forEach(so => {
      itemCountOther[so.itemID] = so.quantity;
    })
    props.items.forEach(i => {
      var line = {};
      var category = props.categories.filter(c => c.id==i.categoryId)[0];

      line.depotID = props.curDepot.id;
      line.itemID = i.id;
      line.itemName = i.name;
      line.categoryObj = category;
      line.itemCategory = category != null ? category.name : "itemCategory";

      line.quantHere = itemCountHere[i.id] == null ? 0 : itemCountHere[i.id][0];
      line.quantOther = otherDepot.id == null ? "—" : itemCountOther[i.id] == null ? 0 : itemCountOther[i.id];

      line.stock = itemCountHere[i.id] == null ? "" : itemCountHere[i.id][1];

      line.amountPerCount = i.amountPerCount;
      line.size = i.size;
      line.expiry = i.expiry;
      line.brand = i.brand;
      line.ingredients = i.mainIngredients;
      line.allergens = i.allergens;

      allLines.push(line);
    });
    allLines.sort((a, b) => {
      if (a.itemName != null && b.itemName != null) return (a.itemName).localeCompare(b.itemName);
      else return 0;
    });
    setTableData(allLines);
  }, [stockHere, stockOther, props.items, props.categories]);

  // useEffect(() => console.log("props.stock", props.stock), [props.stock]);
  // useEffect(() => console.log("stockHere", stockHere), [stockHere]);
  // useEffect(() => console.log("stockOther", stockOther), [stockOther]);
  // useEffect(() => console.log("tableData", tableData), [tableData]);

  // console.log(props);
  return (
    <View
      width="1062px" height="614px" display="block" gap="unset" alignItems="unset"
      justifyContent="unset" overflow="scroll" position="relative" padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StockItemPage")}
      {...rest}
    >
      <StockPageSubNav
        width="1000px" height="64px" display="block" gap="unset" alignItems="unset" view="Items"
        justifyContent="unset" position="absolute" padding="0px 0px 0px 0px" top="1px" left="31px"
        setView={props.setView}
        {...getOverrideProps(overrides, "StockPageSubNav")}
      ></StockPageSubNav>
      <div style={{top: "102px", left: "31px", position: "absolute", height: "400px", overflowY: "scroll", overflowX: "hidden", backgroundColor: "white", borderRadius: "0px 0px 20px 20px"}}>
        {
          tableData.map(d => 
            <ItemOne fetchStocks={props.fetchStocks}
              width="1001px" height="62px" display="block" gap="unset" alignItems="unset"
              justifyContent="unset" position="relative" renderForm={props.renderForm}
              border="1px SOLID rgba(174,179,183,1)" padding="0px 0px 0px 0px" data={d}
              {...getOverrideProps(overrides, "ItemOne36783640")} key={tableData.itemId}
            ></ItemOne>
          )
        }
      </div>
      <StockHeaderBarItems
        width="1001px"
        height="62px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="41px"
        left="31px"
        border="1px SOLID rgba(174,179,183,1)"
        padding="0px 0px 0px 0px"
        otherDepot={otherDepot} setOtherDepot={setOtherDepot}
        {...getOverrideProps(overrides, "StockHeaderBarItems")}
      ></StockHeaderBarItems>
    </View>
  );
}
