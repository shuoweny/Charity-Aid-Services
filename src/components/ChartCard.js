import { Button, Card, Heading } from "@aws-amplify/ui-react";
import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

export default function ChartCard(props) {
  const [type, setType] = useState("pie");
  // console.log(props.process(props.data, type));

  // console.log(sessionStorage);
  return (
    <Card style={{backgroundColor: "white", borderRadius: "10px", minHeight: "200px", display: "flex", flexDirection: "column", placeContent:"center", placeItems: "center"}}>
      <Heading level={4} style={{width: "100%", textAlign: "center", position: "relative"}}>
        {props.title}
        <Button variation="primary" children={`As ${type == "pie" ? "bar" : "pie"}`}
          style={{padding: "2px 6px", position: "absolute", right: "2%"}}
          onClick={() => setType(t => {return t == "pie" ? "bar" : "pie"})}
        />
      </Heading>
      <Plot
        data={[props.process(props.data, type)]}
        layout={ {width: 300, height: 300, margin: {t: 0, r: 0, b: 0, l: 0} } }
      />
    </Card>
  );
}
