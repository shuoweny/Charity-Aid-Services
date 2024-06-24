import { SelectField } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react';

export default function SelectItem(props) {
  const [sessionStorage, setSessionStorage] = useState({});
  useEffect(() => {
    setSessionStorage({
      items: JSON.parse(window.sessionStorage.getItem("items"))
    });
  }, []);

  return <SelectField
    width="180px"
    height="unset"
    shrink="0"
    size="large"
    isDisabled={false}
    labelHidden={false}
    variation="default"
    label="Select Items*"
    onChange={e => { props.onChange(
      () => e.target.value === "" ? {} : JSON.parse(e.target.value));
    }}
  >
    <option key={"noItem"} value={"{}"}>Select…</option>
    {(sessionStorage.items == null) ? <></> : sessionStorage.items.map(c => {
      return <option key={c.name} value={JSON.stringify(c)}>{c.name}</option>
    })}
  </SelectField>;
};