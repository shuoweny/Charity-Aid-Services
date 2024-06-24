/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { useEffect, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import AddKitItem from "./AddKitItem";
import { createKit } from "../utils/apiUtils";
export default function AddEditKit(props) {
  const { overrides, ...rest } = props;
  const [kitName, setKitName] = useState("");
  const [kitItems, setKitItems] = useState([]);
  // useEffect(() => console.log(kitItems), [kitItems]);

  const submitKit = async () => {
    // console.log("kitName", kitName);
    // console.log("kitItems", kitItems);

    if (kitName == "" || kitItems.length == 0 || kitItems.filter(ki => {
      return ki.item == "{}" || ki.quantity == "" || ki.quantity == 0
    }).length > 0) return;

    var data = {
      name: kitName,
      itemIDs: [],
      itemQuantities: []
    };

    kitItems.forEach(ki => {
      // TODO validate no dup item
      data.itemIDs.push(JSON.parse(ki.item).id);
      data.itemQuantities.push(parseInt(ki.quantity));
    });

    console.log("data", data);

    await createKit(data);
    await new Promise(r => setTimeout(r, 2500));
    await props.fetchKits();

    props.setFormVis(false);
  };

  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddEditKit")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 41137003935")}
      >
        <Flex
          gap="12px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 60px 0px 60px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="3"
            children={`${props.action} Kit`}
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
                            fontSize="16px"
              fontWeight="800"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children=""
              {...getOverrideProps(overrides, "Info37003939")}
            ></Text>
            <TextField
              width="328px"
              height="unset"
              label="Kit Name"
              shrink="0"
              placeholder="Placeholder"
              size="large"
              value={props.action == "View" ? props.data.kitName : kitName}
              onChange={e => setKitName(e.target.value)}
              isDisabled={props.action == "View"}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "TextField")}
            ></TextField>
          </Flex>
          { props.action == "View"
          ? [...Array(props.data.itemIDs.length).keys()].map( idx => <AddKitItem view={true} data={props.data} kitItems={kitItems} idx={idx} setKitItems={setKitItems} />)
          : [...Array(kitItems.length).keys()].map( idx => <AddKitItem view={false} kitItems={kitItems} idx={idx} setKitItems={setKitItems} />)
          }
          <Divider
            width="720px" height="1px" shrink="0" size="small" orientation="horizontal"
            {...getOverrideProps(overrides, "Divider37133633")}
          ></Divider>
          {
            props.action == "View" ? <></>
          :<>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 32px 0px 32px"
              {...getOverrideProps(overrides, "Frame 41137133634")}
            >
              <Text
                                fontSize="16px"
                fontWeight="800"
                color="rgba(13,26,38,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children=""
                {...getOverrideProps(overrides, "Info37133635")}
              ></Text>
              <Button
                width="330px" height="unset" shrink="0" size="default"
                isDisabled={false} variation="default" children="Add Item"
                onClick={() => setKitItems(i => [...i, {item: "{}", quantity: "0"}])}
                {...getOverrideProps(overrides, "Button37133636")}
              ></Button>
            </Flex>
            <Divider
              width="720px"
              height="1px"
              shrink="0"
              size="small"
              orientation="horizontal"
              {...getOverrideProps(overrides, "Divider37044015")}
            ></Divider>
          </>}
          <Flex
            gap="24px" direction="row" width="unset" height="unset"
            justifyContent="center" alignItems="flex-start" shrink="0"
            alignSelf="stretch" position="relative" padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
          {
            props.action == "View"
          ?
            <Button
              width="unset" height="unset" shrink="0" size="default" isDisabled={false}
              variation="default" children="Close" onClick={() => props.setFormVis(false)}
              {...getOverrideProps(overrides, "Button")}
            ></Button>
          :
            <><Button
            width="unset" height="unset" shrink="0" size="default"
            isDisabled={false} variation="default" children="Cancel"
            {...getOverrideProps(overrides, "Button")}
            onClick={() => props.setFormVis(false)}
          ></Button>
          <Button
            width="unset" height="unset" shrink="0" size="default"
            isDisabled={false} variation="primary" children="Save kit"
            {...getOverrideProps(overrides, "Button")}
            onClick={() => submitKit()}
          ></Button></>
          }
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
