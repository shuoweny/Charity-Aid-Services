/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Donation } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DonationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    donorID: "",
    itemID: "",
    quantity: "",
  };
  const [donorID, setDonorID] = React.useState(initialValues.donorID);
  const [itemID, setItemID] = React.useState(initialValues.itemID);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDonorID(initialValues.donorID);
    setItemID(initialValues.itemID);
    setQuantity(initialValues.quantity);
    setErrors({});
  };
  const validations = {
    donorID: [{ type: "Required" }],
    itemID: [],
    quantity: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          donorID,
          itemID,
          quantity,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Donation(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DonationCreateForm")}
      {...rest}
    >
      <TextField
        label="Donor id"
        isRequired={true}
        isReadOnly={false}
        value={donorID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              donorID: value,
              itemID,
              quantity,
            };
            const result = onChange(modelFields);
            value = result?.donorID ?? value;
          }
          if (errors.donorID?.hasError) {
            runValidationTasks("donorID", value);
          }
          setDonorID(value);
        }}
        onBlur={() => runValidationTasks("donorID", donorID)}
        errorMessage={errors.donorID?.errorMessage}
        hasError={errors.donorID?.hasError}
        {...getOverrideProps(overrides, "donorID")}
      ></TextField>
      <TextField
        label="Item id"
        isRequired={false}
        isReadOnly={false}
        value={itemID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              donorID,
              itemID: value,
              quantity,
            };
            const result = onChange(modelFields);
            value = result?.itemID ?? value;
          }
          if (errors.itemID?.hasError) {
            runValidationTasks("itemID", value);
          }
          setItemID(value);
        }}
        onBlur={() => runValidationTasks("itemID", itemID)}
        errorMessage={errors.itemID?.errorMessage}
        hasError={errors.itemID?.hasError}
        {...getOverrideProps(overrides, "itemID")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              donorID,
              itemID,
              quantity: value,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
