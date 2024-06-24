/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RecipientpageProps } from "./Recipientpage";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1002OverridesProps = {
    Frame1002?: PrimitiveOverrideProps<ViewProps>;
    recipient_page?: RecipientpageProps;
} & EscapeHatchProps;
export declare type Frame1002Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame1002OverridesProps | undefined | null;
}>;
export default function Frame1002(props: Frame1002Props): React.ReactElement;
