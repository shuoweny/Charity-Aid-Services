import { SelectField } from "@aws-amplify/ui-react";
import React, { useEffect, useState } from 'react';

export default function SelectDepot(props) {
  const [sessionStorage, setSessionStorage] = useState({});
  useEffect(() => {
    setSessionStorage({
      depots: JSON.parse(window.sessionStorage.getItem("depots"))
    });
  }, []);

  return <SelectField
    width="131px"
    height="unset"
    shrink="0"
    size="small"
    backgroundColor="white"
    isDisabled={false}
    labelHidden={true}
    variation="default"
    onChange={e => { props.setSelectedDepot(
      () => e.target.value === "" ? {} : JSON.parse(e.target.value));
    }}
  >
    <option key={"noDepot"} value={"{}"}>Select…</option>
    {(sessionStorage.depots == null) ? <></> : sessionStorage.depots.map(d => {
      return <option key={d.name} value={JSON.stringify(d)}>{d.name}</option>
    })}
  </SelectField>;
};