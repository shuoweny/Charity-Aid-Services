/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
} from "@aws-amplify/ui-react/internal";
import { isObjEmpty } from "../utils/generalUtils";
import {
  Button,
  Flex,
  Heading,
  View,
} from "@aws-amplify/ui-react";
import MyIcon from "../ui-components/MyIcon";
import { useNavigate } from "react-router-dom";
import { SelectDepot } from "./";
export default function SideBarAdmin(props) {
  const { overrides, ...rest } = props;
  const [sessionStorage, setSessionStorage] = React.useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    setSessionStorage(() => {
      const ss = {
        depots: JSON.parse(window.sessionStorage.getItem("depots")),
      }
      return ss;
    });
  }, [])

  return (
    <View
      width="266px"
      height="762px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SideBarAdmin")}
      {...rest}
    >
      <Flex
        gap="32px"
        direction="column"
        width="266px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="32px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32137765803")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="626px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 32137765804")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="188px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 415")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              level="3"
              children="Depot"
              {...getOverrideProps(overrides, "Heading")}
            ></Heading>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 41637783764")}
            >
              <SelectDepot selectedDepot={props.curDepot} setSelectedDepot={props.setCurDepot} />
            </Flex>
          </Flex>
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 414")}
          >
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765809")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="dashboard"
                {...getOverrideProps(overrides, "MyIcon37765810")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="Dashboard"
                onClick={() => navigate("/depot/dashboard")}
                {...getOverrideProps(overrides, "Button37765811")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765812")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="warehouse"
                {...getOverrideProps(overrides, "MyIcon37765813")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={isObjEmpty(props.curDepot)}
                variation="default"
                children="Stock"
                onClick={() => navigate("/depot/stock")}
                {...getOverrideProps(overrides, "Button37765814")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765815")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="send"
                {...getOverrideProps(overrides, "MyIcon37765816")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={isObjEmpty(props.curDepot)}
                variation="default"
                children="Requisitions"
                onClick={() => navigate("/depot/requisitions")}
                {...getOverrideProps(overrides, "Button37765817")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765818")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="donation"
                {...getOverrideProps(overrides, "MyIcon37765819")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={isObjEmpty(props.curDepot)}
                variation="default"
                children="Donations"
                onClick={() => navigate("/depot/donations")}
                {...getOverrideProps(overrides, "Button37765820")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765821")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="recipient"
                {...getOverrideProps(overrides, "MyIcon37765822")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={isObjEmpty(props.curDepot)}
                variation="default"
                children="Recipients"
                onClick={() => navigate("/depot/recipients")}
                {...getOverrideProps(overrides, "Button37765823")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 32137765824")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="donor"
                {...getOverrideProps(overrides, "MyIcon37765825")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={isObjEmpty(props.curDepot)}
                variation="default"
                children="Donors"
                onClick={() => navigate("/depot/donors")}
                {...getOverrideProps(overrides, "Button37765826")}
              ></Button>
            </Flex>
          </Flex>
          <Flex
            gap="-1px"
            direction="row"
            width="161px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 324")}
          ></Flex>
          <Flex
            gap="-1px"
            direction="row"
            width="161px"
            height="34px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 417")}
          ></Flex>
          <Flex 
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 414")}
          >
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 323")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="info"
                {...getOverrideProps(overrides, "MyIcon38084217")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="About Us"
                onClick={() => navigate("/AboutUs")}
                {...getOverrideProps(overrides, "Button38084218")}
              ></Button>
            </Flex>
            <Flex
              gap="-1px"
              direction="row"
              width="161px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 41638274904")}
            >
              <MyIcon
                width="24px"
                height="24px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="logOut"
                {...getOverrideProps(overrides, "MyIcon38274905")}
              ></MyIcon>
              <Button
                width="193px"
                height="48px"
                border="1px SOLID rgba(0,0,0,0)"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="default"
                children="Log Out"
                onClick={() => {
                  props.setIsAdmin(false);
                  props.setCurDepot({});
                  navigate("/");
                }} // todo change curDepot
                {...getOverrideProps(overrides, "Button38274906")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}  