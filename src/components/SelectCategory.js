import { SelectField } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react';

export default function SelectCategory(props) {
  const [sessionStorage, setSessionStorage] = useState({});
  useEffect(() => {
    setSessionStorage({
      categories: JSON.parse(window.sessionStorage.getItem("categories"))
    });
  }, []);

  useEffect(() => {
    if (props.isDisabled) props.onChange(props.data);
  }, [props.isDisabled, props.data])

  return <SelectField
    width="180px"
    height="unset"
    shrink="0"
    size="large"
    backgroundColor="white"
    isDisabled={props.isDisabled}
    labelHidden={false}
    variation="default"
    label="Category"
    value={JSON.stringify(props.value)}
    onChange={e => { props.onChange(
      () => e.target.value === "" ? {} : JSON.parse(e.target.value));
    }}
  >
    <option key={"noCateg"} value={"{}"}>{props.isDisabled ? props.data.name : "Select…"}</option>
    {(sessionStorage.categories == null) ? <></> : sessionStorage.categories.map(c => {
      return <option key={c.name} value={JSON.stringify(c)}>{c.name}</option>
    })}
  </SelectField>;
};