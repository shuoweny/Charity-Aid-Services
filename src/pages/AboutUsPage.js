import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Image, Text, View, Link } from "@aws-amplify/ui-react";
import kidLaughImage from "../kidlaugh.jpg";
import aboutUsTopImage from "../aboutUsTop.jpg";
import carImage from "../car.png";
import heartImage from "../heart.jpg";
import teamImage from "../team.jpg";
import manImage from "../man.jpg";
import chooseFoodImage from "../chooseFood.jpg";
import foodImage from "../food.jpg";
import takeFoodImage from "../takeFood.jpg";
import manTakeImage from "../manTake.jpg";
import donateImage from "../donate.jpg";
import classImage from "../class.jpg";
import instagramImage from "../Instagram-Icon.png";
import facebookImage from "../Facebook_logo.png";
import { useNavigate } from "react-router-dom";
export default function AboutUs(props) {
  const { overrides, ...rest } = props;
  const navigate = useNavigate();
  
  const navigateToFacebook = () => {
     window.location.href = 'https://www.facebook.com/groups/501801060962611';
  };
  
  const navigateToInstagram = () => {
    window.location.href = 'https://www.instagram.com/charities_aid_foundation/?hl=en';
  }
  
  return (
    <View
      width="1328px"
      height="3025px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AboutUs")}
      {...rest}
    >
      <Button
        position="absolute"
        style={{zIndex: 999, left: 30, top: 30, background: "#fff"}}
        children="Go back"
        onClick={() => {
          if (!props.isAdmin) navigate(-1);
          else {
            props.setCurDepot({});
            navigate("/depot");
          }
        }}
      />
      <Image
        src={kidLaughImage}
        width="600px"
        height="431px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-50px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "larm-rmah-AEaTUnvneik-unsplash 1")}
      ></Image>
      <Text
                fontSize="36px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="45px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="316px"
        left="9px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="About Us"
        {...getOverrideProps(overrides, "About Us")}
      ></Text>
      <Text
                fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="580px"
        height="126px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="523px"
        left="109px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="VR1Family Charity Aid Services started off as a small not for profit organization, founded in June 2019 by a group of 5 volunteers in a garage in Mallacoota, Australia (thanks to the generous garage space that was given by the parents of a founding volunteer member)."
        {...getOverrideProps(
          overrides,
          "VR1Family Charity Aid Services started off as a small not for profit organization, founded in June 2019 by a group of 5 volunteers in a garage in Mallacoota, Australia (thanks to the generous garage space that was given by the parents of a founding volunteer member)."
        )}
      ></Text>
      {/* <Image
        src={carImage}
        width="424px"
        height="261px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="438px"
        left="771px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "1468 1")}
      ></Image> */}
      <iframe width="424" height="261" src="https://www.youtube.com/embed/SJn3CTNrc88"
        title="YouTube video player" frameborder="0" allowfullscreen
        style={{position: "absolute", top: "438px", left: "771px"}}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="456px"
        left="68px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="History"
        {...getOverrideProps(overrides, "History")}
      ></Text>
      <Image
        src={aboutUsTopImage}
        width="728px"
        height="431px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-50px"
        left="600px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "ben-white-PAiVzSmYy-c-unsplash 1")}
      ></Image>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="758px"
        left="585px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Our Goal"
        {...getOverrideProps(overrides, "Our Goal")}
      ></Text>
      <Text
                fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="25px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1144px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="825px"
        left="109px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Our focus was to provide immediate humanitarian assistance and improve the lives of people facing economic, social, and health challenges in the immediate aftermath of natural calamities in their local community. Their common belief was that every person deserved a chance to thrive irrespective of their personal circumstances. Hence, they wanted to identify communities and individuals facing the most pressing needs and provide them with the resources and support to overcome their challenges, especially in the aftermath of a natural disaster."
        {...getOverrideProps(
          overrides,
          "Our focus was to provide immediate humanitarian assistance and improve the lives of people facing economic, social, and health challenges in the immediate aftermath of natural calamities in their local community. Their common belief was that every person deserved a chance to thrive irrespective of their personal circumstances. Hence, they wanted to identify communities and individuals facing the most pressing needs and provide them with the resources and support to overcome their challenges, especially in the aftermath of a natural disaster."
        )}
      ></Text>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1239px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="The philanthropic activities"
        {...getOverrideProps(overrides, "The philanthropic activities")}
      ></Text>
      <Image
        src={heartImage}
        width="319px"
        height="192px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="972px"
        left="239px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "tim-marshall-cAtzHUz7Z8g-unsplash 1")}
      ></Image>
      <Image
        src={teamImage}
        width="345px"
        height="193px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="972px"
        left="722px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "su-nyoto-kY8m5uDIW7Y-unsplash 1")}
      ></Image>
      <Image
        src={manImage}
        width="266px"
        height="360px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1321px"
        left="38px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "claudia-raya-ClEsjummC6w-unsplash 1")}
      ></Image>
      <Image
        src={chooseFoodImage}
        width="310px"
        height="280px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1340px"
        left="358px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "joel-muniz-3k3l2brxmwQ-unsplash 1")}
      ></Image>
      <Image
        src={foodImage}
        width="214px"
        height="219px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1340px"
        left="721px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "nico-smit-NFoerQuvzrs-unsplash 1")}
      ></Image>
      <Image
        src={takeFoodImage}
        width="591px"
        height="302px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1681px"
        left="368px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "joel-muniz-BErJJL_KsjA-unsplash 1")}
      ></Image>
      <Image
        src={manTakeImage}
        width="305px"
        height="381px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1340px"
        left="988px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(
          overrides,
          "masjid-pogung-dalangan-cMyEvxr7Uzg-unsplash 1"
        )}
      ></Image>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2083px"
        left="564px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Achievement"
        {...getOverrideProps(overrides, "Achievement")}
      ></Text>
      <View
        width="271px"
        height="253px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2152px"
        left="128px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1167")}
      ></View>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2208px"
        left="147px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Service Country"
        {...getOverrideProps(overrides, "Service Country")}
      ></Text>
      <Text
                fontSize="24px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2292px"
        left="156px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Over 100 countries"
        {...getOverrideProps(overrides, "Over 100 countries")}
      ></Text>
      <View
        width="271px"
        height="253px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2152px"
        left="527px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1168")}
      ></View>
      <View
        width="271px"
        height="253px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2152px"
        left="926px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 1169")}
      ></View>
      <Text
                fontSize="24px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2292px"
        left="1022px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="global "
        {...getOverrideProps(overrides, "global")}
      ></Text>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="165px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2208px"
        left="576px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Team Size"
        {...getOverrideProps(overrides, "Team Size")}
      ></Text>
      <Text
                fontSize="24px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2292px"
        left="565px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="15,000 volunteers"
        {...getOverrideProps(overrides, "15,000 volunteers")}
      ></Text>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2208px"
        left="964px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Organization"
        {...getOverrideProps(overrides, "Organization")}
      ></Text>
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2398px"
        left="70px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Join Us"
        {...getOverrideProps(overrides, "Join Us")}
      ></Text>
      <Image
        src={facebookImage}
        width="300px"
        height="300px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2587px"
        left="320px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        style={{ cursor: 'pointer' }}
        {...getOverrideProps(overrides, "katt-yukawa-K0E6E0a0R3A-unsplash 1")}
        onClick={navigateToFacebook}
      ></Image>
      <Image
        src={instagramImage}
        width="300px"
        height="300px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2587px"
        left="780px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        style={{ cursor: 'pointer' }}
        {...getOverrideProps(overrides, "mario-heller-hXLkFpvKRys-unsplash 1")}
        onClick={navigateToInstagram}
      ></Image>
        {/* <div>
      <button onClick={navigateToFacebook}>
        <Image src={facebookImage} alt="Facebook" width="300" height="300" />
        facebook
      </button>
      <button onClick={navigateToInstagram}>
        <Image src={instagramImage} alt="Instagram" width="30" height="30" />
        instagram
      </button>
    </div> */}
      <Text
                fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="40px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2482px"
        left="128px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Follow us or Donate us to make the world better!"
        {...getOverrideProps(
          overrides,
          "Join us or Donate us to make the world better!"
        )}
      ></Text>

    </View>
  );
}