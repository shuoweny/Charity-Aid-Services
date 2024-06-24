/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function SortIcon(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="11px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 11, height: 20 }}
      paths={[
        {
          d: "M19.899 0.707107C20.2896 0.316583 20.2896 -0.316583 19.899 -0.707107L13.5351 -7.07107C13.1445 -7.46159 12.5114 -7.46159 12.1209 -7.07107C11.7303 -6.68054 11.7303 -6.04738 12.1209 -5.65685L17.7777 0L12.1209 5.65685C11.7303 6.04738 11.7303 6.68054 12.1209 7.07107C12.5114 7.46159 13.1445 7.46159 13.5351 7.07107L19.899 0.707107ZM19.1919 -1L0 -1L0 1L19.1919 1L19.1919 -1Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 2,
          style: { transform: "translate(100%, 0%)" },
        },
        {
          d: "M-0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L5.65685 7.07107C6.04738 7.46159 6.68054 7.46159 7.07107 7.07107C7.46159 6.68054 7.46159 6.04738 7.07107 5.65685L1.41421 0L7.07107 -5.65685C7.46159 -6.04738 7.46159 -6.68054 7.07107 -7.07107C6.68054 -7.46159 6.04738 -7.46159 5.65685 -7.07107L-0.707107 -0.707107ZM0 1L19.3939 1L19.3939 -1L0 -1L0 1Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 2,
          style: { transform: "translate(0%, 3.03%)" },
        },
      ]}
      {...getOverrideProps(overrides, "SortIcon")}
      {...rest}
    ></Icon>
  );
}
