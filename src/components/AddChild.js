/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useEffect, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField } from "@aws-amplify/ui-react";
import AddIdDoc from "./AddIdDoc";
export default function AddChild(props) {
  const { overrides, ...rest } = props;
  const [childIDs, setChildIDs] = useState([]);

  const addChildID = () => {
    setChildIDs(s => [...s, {type: "", documentID: "", expiry: "", image: null, imageLink: ""}]);
  };

  useEffect(() => {
  }, []);

  useEffect(() => {
    props.setData(cis => {
      var newCis = [...cis];
      newCis[props.idx].idDocuments = childIDs;
      return newCis;
    })
  }, [childIDs]);

  return (
    <Flex
      direction="column" justifyContent="center" alignItems="center" alignContent="center"
    >
      <Flex
        gap="75px"
        direction="row"
        width="433px"
        height="unset"
        alignContent="center"
        justifyContent="center"
        position="relative"
        borderRadius="45px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AddChild")}
        {...rest}
      >
        <TextField
          width="168px"
          height="unset"
          label="Child's Name*"
          placeholder="Enter…"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={props.data[props.idx].name}
          onChange={e => props.setData(cis => {
            var newCis = [...cis];
            newCis[props.idx].name = e.target.value;
            return newCis;
          })}
          {...getOverrideProps(overrides, "TextField39034805")}
        ></TextField>
        <TextField
          width="168px"
          height="unset"
          label="Child's Age*"
          placeholder="Enter…"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={props.data[props.idx].age}
          onChange={e => props.setData(cis => {
            var newCis = [...cis];
            newCis[props.idx].age = e.target.value;
            return newCis;
          })}
          {...getOverrideProps(overrides, "TextField39034812")}
        ></TextField>
        <TextField
          width="168px"
          height="unset"
          label="Child's Nationality*"
          placeholder="Enter…"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={props.data[props.idx].nationality}
          onChange={e => props.setData(cis => {
            var newCis = [...cis];
            newCis[props.idx].nationality = e.target.value;
            return newCis;
          })}
          {...getOverrideProps(overrides, "TextField39034812")}
        ></TextField>
      </Flex>
      {
        [...Array(childIDs.length).keys()].map(idx => 
          <AddIdDoc idx={idx} data={childIDs} setData={setChildIDs} />
        )
      }
    </Flex>
  );
}
