/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPagedepotOverridesProps = {
    LoginPagedepot?: PrimitiveOverrideProps<ViewProps>;
    "joel-muniz-A4Ax1ApccfA-unsplash (1) 1"?: PrimitiveOverrideProps<ImageProps>;
    "Welcome to Aid Management System"?: PrimitiveOverrideProps<TextProps>;
    "Please Select your depot position"?: PrimitiveOverrideProps<TextProps>;
    SelectDepot?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 417"?: PrimitiveOverrideProps<ViewProps>;
    "user-avatar 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type LoginPagedepotProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginPagedepotOverridesProps | undefined | null;
}>;
export default function LoginPagedepot(props: LoginPagedepotProps): React.ReactElement;
