/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipientTableOverridesProps = {
    "1000000"?: PrimitiveOverrideProps<TextProps>;
    RecipientTable?: PrimitiveOverrideProps<ViewProps>;
    recipientTable?: PrimitiveOverrideProps<IconProps>;
    headerRow36924558?: PrimitiveOverrideProps<ViewProps>;
    background36924555?: PrimitiveOverrideProps<ViewProps>;
    IDcell36924561?: PrimitiveOverrideProps<ViewProps>;
    nameCell36924564?: PrimitiveOverrideProps<ViewProps>;
    "John White"?: PrimitiveOverrideProps<TextProps>;
    addressCell36924567?: PrimitiveOverrideProps<ViewProps>;
    Address36924566?: PrimitiveOverrideProps<TextProps>;
    headerRow36924568?: PrimitiveOverrideProps<ViewProps>;
    background36924569?: PrimitiveOverrideProps<ViewProps>;
    IDcell36924570?: PrimitiveOverrideProps<ViewProps>;
    ID?: PrimitiveOverrideProps<TextProps>;
    nameCell36924573?: PrimitiveOverrideProps<ViewProps>;
    "Volunteer Name"?: PrimitiveOverrideProps<TextProps>;
    addressCell36924576?: PrimitiveOverrideProps<ViewProps>;
    Address36924578?: PrimitiveOverrideProps<TextProps>;
    "lucide:check-circle-2"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type RecipientTableProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: RecipientTableOverridesProps | undefined | null;
}>;
export default function RecipientTable(props: RecipientTableProps): React.ReactElement;
