/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type VolumeUpOverridesProps = {
    VolumeUp?: PrimitiveOverrideProps<ViewProps>;
    "Group Copy"?: PrimitiveOverrideProps<ViewProps>;
    Path37993979?: PrimitiveOverrideProps<IconProps>;
    Path37993980?: PrimitiveOverrideProps<IconProps>;
    Path37993981?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type VolumeUpProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: VolumeUpOverridesProps | undefined | null;
}>;
export default function VolumeUp(props: VolumeUpProps): React.ReactElement;
