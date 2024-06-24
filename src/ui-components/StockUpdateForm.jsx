/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Stock } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function StockUpdateForm(props) {
  const {
    id: idProp,
    stock: stockModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    itemID: "",
    depotID: "",
    quantity: "",
  };
  const [itemID, setItemID] = React.useState(initialValues.itemID);
  const [depotID, setDepotID] = React.useState(initialValues.depotID);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = stockRecord
      ? { ...initialValues, ...stockRecord }
      : initialValues;
    setItemID(cleanValues.itemID);
    setDepotID(cleanValues.depotID);
    setQuantity(cleanValues.quantity);
    setErrors({});
  };
  const [stockRecord, setStockRecord] = React.useState(stockModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Stock, idProp)
        : stockModelProp;
      setStockRecord(record);
    };
    queryData();
  }, [idProp, stockModelProp]);
  React.useEffect(resetStateValues, [stockRecord]);
  const validations = {
    itemID: [{ type: "Required" }],
    depotID: [{ type: "Required" }],
    quantity: [{ type: "Required" }],
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
          itemID,
          depotID,
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
          await DataStore.save(
            Stock.copyOf(stockRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "StockUpdateForm")}
      {...rest}
    >
      <TextField
        label="Item id"
        isRequired={true}
        isReadOnly={false}
        value={itemID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemID: value,
              depotID,
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
        label="Depot id"
        isRequired={true}
        isReadOnly={false}
        value={depotID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              itemID,
              depotID: value,
              quantity,
            };
            const result = onChange(modelFields);
            value = result?.depotID ?? value;
          }
          if (errors.depotID?.hasError) {
            runValidationTasks("depotID", value);
          }
          setDepotID(value);
        }}
        onBlur={() => runValidationTasks("depotID", depotID)}
        errorMessage={errors.depotID?.errorMessage}
        hasError={errors.depotID?.hasError}
        {...getOverrideProps(overrides, "depotID")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={true}
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
              itemID,
              depotID,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || stockModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || stockModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
