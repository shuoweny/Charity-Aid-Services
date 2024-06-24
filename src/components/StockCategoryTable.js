/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { StockPageSubNav, StockHeaderBarCategories, CategoryOne } from "./";
import { View } from "@aws-amplify/ui-react";
export default function StockCategoryTable(props) {
  const { overrides, ...rest } = props;
  const [otherDepot, setOtherDepot] = useState({});
  const [stockHere, setStockHere] = useState([]);
  const [stockOther, setStockOther] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [sessionStorage, setSessionStorage] = useState({});
  useEffect(() => {
    setSessionStorage({
      items: JSON.parse(window.sessionStorage.getItem("items")),
      categories: JSON.parse(window.sessionStorage.getItem("categories"))
    });
  }, []);

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
    if (props.items == null) return;
    var categCountHere = {};
    var categCountOther = {};
    var allLines = [];

    props.items.forEach(i => {
      // console.log(i.categoryId);
      stockHere.forEach(sh => {
        if (i.id == sh.itemID) {
          if (categCountHere[i.categoryId] == null) categCountHere[i.categoryId] = sh.quantity;
          else categCountHere[i.categoryId] += sh.quantity;
        }
      });

      stockOther.forEach(sh => {
        if (i.id == sh.itemID) {
          if (categCountOther[i.categoryId] == null) categCountOther[i.categoryId] = sh.quantity;
          else categCountOther[i.categoryId] += sh.quantity;
        }
      });
    });

    props.categories.forEach(c => {
      var line = {};
      line.categoryID = c.id;
      line.categoryName = c.name;
      if (categCountHere[c.id] == null) categCountHere[c.id] = 0;
      if (categCountOther[c.id] == null) categCountOther[c.id] = 0;
      line.statusHere =
        categCountHere[c.id] < c.stockLevels[0] ? "Low" :
        categCountHere[c.id] < c.stockLevels[1] ? "Medium" :
        categCountHere[c.id] < c.stockLevels[2] ? "High" :
        "Excess";
      line.statusOther = otherDepot.id == null ? "—" : 
        categCountOther[c.id] < c.stockLevels[0] ? "Low" :
        categCountOther[c.id] < c.stockLevels[1] ? "Medium" :
        categCountOther[c.id] < c.stockLevels[2] ? "High" :
        "Excess";

      line.type = c.type;
      line.stockLevels = c.stockLevels;

      allLines.push(line);
    });
    allLines.sort((a, b) => {
      if (a.categoryName != null && b.categoryName != null) return (a.categoryName).localeCompare(b.categoryName);
      else return 0;
    });
    setTableData(allLines);
  }, [props, stockHere, stockOther]);

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
      {...getOverrideProps(overrides, "StockCategoryPage")}
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
        view="Categories"
        setView={props.setView}
        {...getOverrideProps(overrides, "StockPageSubNav")}
      ></StockPageSubNav>

      <div style={{top: "102px", left: "30px", position: "absolute", height: "400px", overflowY: "scroll", overflowX: "hidden", backgroundColor: "white", borderRadius: "0px 0px 20px 20px"}}>
        {
          tableData.map(data => 
            <CategoryOne
              width="1002px" height="62px" display="block" gap="99px" alignItems="unset"
              justifyContent="unset" position="relative" renderForm={props.renderForm}
              border="1px SOLID rgba(174,179,183,1)" padding="0px 0px 0px 0px" data={data}
              {...getOverrideProps(overrides, "CategoryOne37365285")} key={data.categoryID}
            ></CategoryOne>
          )
        }
      </div>

      <StockHeaderBarCategories
        width="1002px"
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
        {...getOverrideProps(overrides, "StockHeaderBarCategories")}
      ></StockHeaderBarCategories>
    </View>
  );
}
