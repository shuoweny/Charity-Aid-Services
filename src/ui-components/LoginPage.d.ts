/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoginPageOverridesProps = {
    LoginPage?: PrimitiveOverrideProps<ViewProps>;
    "joel-muniz-A4Ax1ApccfA-unsplash (1) 1"?: PrimitiveOverrideProps<ImageProps>;
    "Welcome to Aid Management System"?: PrimitiveOverrideProps<TextProps>;
    "Please choose your role to login"?: PrimitiveOverrideProps<TextProps>;
    Button36953582?: PrimitiveOverrideProps<ButtonProps>;
    Button36953583?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 417"?: PrimitiveOverrideProps<ViewProps>;
    "user-avatar 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type LoginPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginPageOverridesProps | undefined | null;
}>;
export default function LoginPage(props: LoginPageProps): React.ReactElement;
