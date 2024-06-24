/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1010OverridesProps = {
    Frame1010?: PrimitiveOverrideProps<ViewProps>;
    recipient_page?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type Frame1010Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame1010OverridesProps | undefined | null;
}>;
export default function Frame1010(props: Frame1010Props): React.ReactElement;
