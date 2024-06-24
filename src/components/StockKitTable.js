/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { StockPageSubNav, StockHeaderBarKits, KitOne } from "./";
import { View } from "@aws-amplify/ui-react";
export default function StockKitTable(props) {
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
    if (props.items == null || props.kits == null) return;
    var allLines = [];
    props.kits.forEach(k => {
      var line = {...k};

      line.kitID = k.id;
      line.kitName = k.name;
      line.quantHere = 0;
      line.quantOther = otherDepot.id == null ? "—" : 0;

      var quantHere = Number.MAX_SAFE_INTEGER;
      var quantOther = Number.MAX_SAFE_INTEGER;
      for (var i=0; i<k.itemIDs.length; i++) {
        stockHere.forEach(sh => {
          if (sh.itemID == k.itemIDs[i]) {
            quantHere = Math.min(quantHere, Math.floor(sh.quantity / k.itemQuantities[i]));
          }
        });
        stockOther.forEach(so => {
          if (so.itemID == k.itemIDs[i]) {
            quantOther = Math.min(quantOther, Math.floor(so.quantity / k.itemQuantities[i]));
          }
        });
      }
      if (quantHere == Number.MAX_SAFE_INTEGER) quantHere = 0;
      if (quantOther == Number.MAX_SAFE_INTEGER) quantOther = 0;

      line.quantHere = quantHere;
      if (line.quantOther != "—") line.quantOther = quantOther;

      // console.log(line);

      allLines.push(line);
    });
    allLines.sort((a, b) => {
      if (a.kitName != null && b.kitName != null) return (a.kitName).localeCompare(b.kitName);
      else return 0;
    });
    setTableData(allLines);
  }, [stockHere, stockOther, props]); 

  // useEffect(() => console.log("props.stock", props.stock), [props.stock]);
  // useEffect(() => console.log("stockHere", stockHere), [stockHere]);
  // useEffect(() => console.log("stockOther", stockOther), [stockOther]);
  // useEffect(() => console.log("tableData", tableData), [tableData]);

  return (
    <View
      width="1062px"
      height="614px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StockKitPage")}
      {...rest}
    >
      <StockPageSubNav
        width="1000px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="31px"
        padding="0px 0px 0px 0px"
        view="Kits"
        setView={props.setView}
        {...getOverrideProps(overrides, "StockPageSubNav")}
      ></StockPageSubNav>
      <StockHeaderBarKits
        width="1001px"
        height="62px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="41px"
        left="30px"
        border="1px SOLID rgba(174,179,183,1)"
        padding="0px 0px 0px 0px"
        otherDepot={otherDepot} setOtherDepot={setOtherDepot}
        {...getOverrideProps(overrides, "StockHeaderBarKits")}
      ></StockHeaderBarKits>
      <div style={{top: "102px", left: "30px", position: "absolute", height: "400px", overflowY: "scroll", overflowX: "hidden", backgroundColor: "white", borderRadius: "0px 0px 20px 20px"}}>
        {
          tableData.map(data => 
            <KitOne
              width="1001px" height="62px" display="block" gap="unset" alignItems="unset"
              justifyContent="unset" position="relative" renderForm={props.renderForm}
              border="1px SOLID rgba(174,179,183,1)" padding="0px 0px 0px 0px" data={data}
              {...getOverrideProps(overrides, "KitOne")}
            ></KitOne>
          )
        }
      </div>
    </View>
  );
}
