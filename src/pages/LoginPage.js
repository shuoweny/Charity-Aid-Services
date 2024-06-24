import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View } from "@aws-amplify/ui-react";
import loginImage from "../login.jpg";
import avatar from "../user-avatar.png";
import { useNavigate } from "react-router-dom";
export default function LoginPage(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  const buttonAdmin = () => {
    props.setIsAdmin(true);
    navigate("/depot/dashboard");
  }
  const buttonEmployee = () => navigate("/login/selectDepot");
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
      {...getOverrideProps(overrides, "LoginPage")}
      {...rest}
    >
      <Image
        src={loginImage} 
        width="679px" 
        height="762px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="reletive"
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
        top="296px"
        left="804px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please choose your role to login"
        {...getOverrideProps(overrides, "Please choose your role to login")}
      ></Text>
      <Button
        width="294.8px"
        height="82.06px"
        position="absolute"
        top="381px"
        left="839px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Admin"
        onClick={() => {
          buttonAdmin();
        }}
        {...getOverrideProps(overrides, "ButtonAdmin")}
      ></Button>
      <Button
        width="294.8px"
        height="82.06px"
        position="absolute"
        top="521px"
        left="839px"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Employee or Volunteer"
        onClick={() => {
          buttonEmployee();
        }}
        {...getOverrideProps(overrides, "ButtonEmployee")}
      ></Button>
      <Button
                fontSize="30px"
        fontWeight="400"
        width="unset"
        height="unset"
        position="absolute"
        top="90%"
        left="70%"
        color="rgba(4,125,149,1)"
        lineHeight="38.727272033691406px"
        border= "2px solid transparent"
        children="About Us"
        onClick={() => {
          buttonAboutUs();
        }}
        {...getOverrideProps(overrides, "Frame 417")}
      ></Button>
      <Image
      src = {avatar}
        width="96px"
        height="108px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="168px"
        left="935px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "user-avatar 1")}
      ></Image>
      
    </View>
  );
}
