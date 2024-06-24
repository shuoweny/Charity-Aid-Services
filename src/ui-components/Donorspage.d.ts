/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { HeadingProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { RecipientTableProps } from "./RecipientTable";
import { SideBarProps } from "./SideBar";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonorspageOverridesProps = {
    "1"?: PrimitiveOverrideProps<TextProps>;
    Donorspage?: PrimitiveOverrideProps<ViewProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    recipientTable?: RecipientTableProps;
    SideBar?: SideBarProps;
    pageSelectionBox?: PrimitiveOverrideProps<ViewProps>;
    pageSelection?: PrimitiveOverrideProps<ViewProps>;
    MyIcon38215772?: MyIconProps;
    MyIcon38215774?: MyIconProps;
    deleteButton38094013?: PrimitiveOverrideProps<ViewProps>;
    deleteButton38094014?: PrimitiveOverrideProps<ViewProps>;
    "Delete recipient"?: PrimitiveOverrideProps<TextProps>;
    addButton38094016?: PrimitiveOverrideProps<ViewProps>;
    addButton38094017?: PrimitiveOverrideProps<ViewProps>;
    "Add recipient"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DonorspageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DonorspageOverridesProps | undefined | null;
}>;
export default function Donorspage(props: DonorspageProps): React.ReactElement;
