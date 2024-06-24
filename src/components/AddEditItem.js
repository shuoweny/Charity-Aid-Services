/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useEffect, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { AddEditItemGeneral, AddEditItemFood, AddEditItemClothing } from "./";
export default function AddEditItem(props) {
  const { overrides, ...rest } = props;
  const [categType, setCategType] = useState("GENERAL");
  const [itemCateg, setItemCateg] = useState({});
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    if (itemCateg != null) setCategType(itemCateg.type);
  }, [itemCateg]);

  switch (categType) {
    case "FOOD":
      return <AddEditItemFood
        itemName={itemName} setItemName={setItemName} itemCateg={itemCateg} setItemCateg={setItemCateg}
        setFormVis={props.setFormVis} fetchItems={props.fetchItems} action={props.action} data={props.data}
      />;
    case "CLOTHING":
      return <AddEditItemClothing
      itemName={itemName} setItemName={setItemName} itemCateg={itemCateg} setItemCateg={setItemCateg}
      setFormVis={props.setFormVis} fetchItems={props.fetchItems} action={props.action} data={props.data}
    />;
    default:
      return <AddEditItemGeneral
      itemName={itemName} setItemName={setItemName} itemCateg={itemCateg} setItemCateg={setItemCateg}
      setFormVis={props.setFormVis} fetchItems={props.fetchItems} action={props.action} data={props.data}
    />;
  }
}
