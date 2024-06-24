import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, ButtonGroup, Heading, View, Text } from "@aws-amplify/ui-react";
import { RecipientTable,  SideBar} from "../components";
import { MyIcon } from "../ui-components";
import { useNavigate } from "react-router-dom";
import { pageCount, setPageCount } from "../components/RecipientTable";
import { fetchRecipients } from "../utils/apiUtils";

function RecipientPage(props) {
  const { overrides, ...rest } = props;
  const [pageCount, setPageCount] = React.useState(9);
  const [recipients, setRecipients] = React.useState([]);

  React.useEffect(() => {
    fetchRecipients(setRecipients);
  }, []);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `addRecipientPage`; 
    navigate(path);
  }

  // const nextPage = () => {
  //   setPageCount(oldPgCnt => oldPgCnt + 9);
  // }

  // const previousPage = () => {
  //   setPageCount(oldPgCnt => oldPgCnt - 9);
  // }

  return (
    <body>
      {/* <div style={{marginTop: `${3}%`}}>
      <Heading level={1}>Recipients</Heading>
      </div> */}
      <View
        width="1062px"
        height="762px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="266px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "backg")}
      ></View>
      <Text
                fontSize="40px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="52.08000183105469px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="47px"
        left="297px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Recipients"
        {...getOverrideProps(overrides, "Donors37874592")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="976px"
        height="486px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="180px"
        left="297px"
        {...getOverrideProps(overrides, "Transaction History")}
      >
        <View
          width="976px"
          height="486px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="24px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Card backg")}
        ></View>
      </View>      
      {/* <Button
          width="unset" height="unset" shrink="0" size="default"
          isDisabled={false} variation="primary" children="Add Recipient"
          {...getOverrideProps(overrides, "Button")}
          onClick={routeChange}
      ></Button> */}
      {/* <div style={{paddingTop: `${1}%`, paddingBottom: `${1}%`}}>
        <RecipientTable pageCount={pageCount}>
        </RecipientTable>
      </div>
        <ButtonGroup justifyContent="center">
          <Button
            width="unset" height="unset" shrink="0" size="default"
            isDisabled={false} variation="default" children="Previous Page"
            {...getOverrideProps(overrides, "Button")}
            onClick={previousPage}
          ></Button>
          <Button
            width="unset" height="unset" shrink="0" size="default"
            isDisabled={false} variation="default" children="Next Page"
            {...getOverrideProps(overrides, "Button")}
            onClick={nextPage}
          ></Button>
        </ButtonGroup> */}
       <RecipientTable
        width="976px" height="500px" top="134px" left="297px" padding="0px 0px 0px 0px"
        display="block" gap="unset" alignItems="unset" justifyContent="unset"
        marginTop= "50"
        recipients={recipients}
        overflow="hidden" position="absolute"
        {...getOverrideProps(overrides, "DonationsTable")}
        >
          
        </RecipientTable>
    </body>
  );
}

export default RecipientPage;