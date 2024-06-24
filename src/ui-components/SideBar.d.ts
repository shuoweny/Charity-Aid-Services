/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<ViewProps>;
    "Frame 32129767087"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32129767088"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 415"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32137403626"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37133769?: MyIconProps;
    Button37406848?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32137403640"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37403660?: MyIconProps;
    Button37406860?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32137403647"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37403663?: MyIconProps;
    Button37406870?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32137403654"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37403673?: MyIconProps;
    Button37406889?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32137403667"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon37403676?: MyIconProps;
    Button37406901?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 323"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38084339?: MyIconProps;
    Button38084340?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 32438275843"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 416"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32438274073"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38274074?: MyIconProps;
    Button38274075?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
