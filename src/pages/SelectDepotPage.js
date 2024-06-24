import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
import { Flex } from "@aws-amplify/ui-react";

import loginImage from "../login.jpg";
import avatar from "../user-avatar.png";
import { useNavigate } from "react-router-dom";
import SelectDepot from "../components/SelectDepot";
export default function LoginPage(props) {
  const { overrides, ...rest } = props;
  const [chooseDepot, setChooseDepot] = React.useState({});
  const navigate = useNavigate();
  const buttonAboutUs = () => navigate("/AboutUs");
  return (
    <View
      width="1328px"
      height="762px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "LoginPagedepot")}
      {...rest}
    >
      <Image
        src = {loginImage}
        width="679px"
        height="762px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "joel-muniz-A4Ax1ApccfA-unsplash"
        )}
      ></Image>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="109px"
        left="718px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome to Aid Management System"
        {...getOverrideProps(overrides, "Welcome to Aid Management System")}
      ></Text>
      <Text
                fontSize="24px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="307px"
        left="811px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please Select your depot position"
        {...getOverrideProps(overrides, "Please Select your depot position")}
      ></Text>
      <Flex
        gap="0"
        direction="column"
        width="180px"
        height="34px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="50%"
        bottom="45.54%"
        left="67.62%"
        right="18.83%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SelectDepot")}
      >
        <SelectDepot selectedDepot={chooseDepot} setSelectedDepot={setChooseDepot} />
      </Flex>
      <Button
        width="294.8px"
        height="82.06px"
        position="absolute"
        top="492px"
        left="838px"
        size="large"
        isDisabled={!chooseDepot.id}
        variation="primary"
        children="Confirm"
        onClick={() => {
          props.setCurDepot(chooseDepot);
          navigate("/depot");
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Button
                fontSize="30px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="38.727272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="relative"
        top="90%"
        left="70%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="About Us"
        
        border= "2px solid transparent"
        onClick={() => {
          buttonAboutUs();
        }}
        {...getOverrideProps(overrides, "Frame 417")}
      ></Button>
      <Image
        src={avatar}
        width="96px"
        height="108px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="173px"
        left="945px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "user-avatar 1")}
      ></Image>
    </View>
  );
}
