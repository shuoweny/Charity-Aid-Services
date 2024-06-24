/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeadingProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { RecipientTableProps } from "./RecipientTable";
import { SideBarProps } from "./SideBar";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipientpageOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    Recipientpage?: PrimitiveOverrideProps<ViewProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    recipientTable?: RecipientTableProps;
    SideBar?: SideBarProps;
    "Group 13212"?: PrimitiveOverrideProps<ViewProps>;
    "Group 231"?: PrimitiveOverrideProps<ViewProps>;
    "Log out"?: PrimitiveOverrideProps<TextProps>;
    "user 1"?: PrimitiveOverrideProps<ViewProps>;
    Vector38124339?: PrimitiveOverrideProps<IconProps>;
    Vector38124340?: PrimitiveOverrideProps<IconProps>;
    Vector38124341?: PrimitiveOverrideProps<IconProps>;
    pageSelectionBox?: PrimitiveOverrideProps<ViewProps>;
    pageSelection?: PrimitiveOverrideProps<ViewProps>;
    MyIcon38155314?: MyIconProps;
    MyIcon38155315?: MyIconProps;
    deleteButton36943746?: PrimitiveOverrideProps<ViewProps>;
    deleteButton36943744?: PrimitiveOverrideProps<ViewProps>;
    "Delete recipient"?: PrimitiveOverrideProps<TextProps>;
    addButton36943747?: PrimitiveOverrideProps<ViewProps>;
    addButton36943748?: PrimitiveOverrideProps<ViewProps>;
    "Add recipient"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RecipientpageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RecipientpageOverridesProps | undefined | null;
}>;
export default function Recipientpage(props: RecipientpageProps): React.ReactElement;
