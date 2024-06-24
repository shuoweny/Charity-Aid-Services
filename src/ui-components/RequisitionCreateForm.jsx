/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Requisition } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function RequisitionCreateForm(props) {
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
    recipientID: "",
    depotID: "",
    fulfilled: false,
    kits: [],
    kitQuantity: [],
    items: [],
    itemQuantity: [],
    notes: "",
  };
  const [recipientID, setRecipientID] = React.useState(
    initialValues.recipientID
  );
  const [depotID, setDepotID] = React.useState(initialValues.depotID);
  const [fulfilled, setFulfilled] = React.useState(initialValues.fulfilled);
  const [kits, setKits] = React.useState(initialValues.kits);
  const [kitQuantity, setKitQuantity] = React.useState(
    initialValues.kitQuantity
  );
  const [items, setItems] = React.useState(initialValues.items);
  const [itemQuantity, setItemQuantity] = React.useState(
    initialValues.itemQuantity
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRecipientID(initialValues.recipientID);
    setDepotID(initialValues.depotID);
    setFulfilled(initialValues.fulfilled);
    setKits(initialValues.kits);
    setCurrentKitsValue("");
    setKitQuantity(initialValues.kitQuantity);
    setCurrentKitQuantityValue("");
    setItems(initialValues.items);
    setCurrentItemsValue("");
    setItemQuantity(initialValues.itemQuantity);
    setCurrentItemQuantityValue("");
    setNotes(initialValues.notes);
    setErrors({});
  };
  const [currentKitsValue, setCurrentKitsValue] = React.useState("");
  const kitsRef = React.createRef();
  const [currentKitQuantityValue, setCurrentKitQuantityValue] =
    React.useState("");
  const kitQuantityRef = React.createRef();
  const [currentItemsValue, setCurrentItemsValue] = React.useState("");
  const itemsRef = React.createRef();
  const [currentItemQuantityValue, setCurrentItemQuantityValue] =
    React.useState("");
  const itemQuantityRef = React.createRef();
  const validations = {
    recipientID: [{ type: "Required" }],
    depotID: [{ type: "Required" }],
    fulfilled: [{ type: "Required" }],
    kits: [],
    kitQuantity: [],
    items: [],
    itemQuantity: [],
    notes: [],
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
          recipientID,
          depotID,
          fulfilled,
          kits,
          kitQuantity,
          items,
          itemQuantity,
          notes,
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
          await DataStore.save(new Requisition(modelFields));
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
      {...getOverrideProps(overrides, "RequisitionCreateForm")}
      {...rest}
    >
      <TextField
        label="Recipient id"
        isRequired={true}
        isReadOnly={false}
        value={recipientID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipientID: value,
              depotID,
              fulfilled,
              kits,
              kitQuantity,
              items,
              itemQuantity,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.recipientID ?? value;
          }
          if (errors.recipientID?.hasError) {
            runValidationTasks("recipientID", value);
          }
          setRecipientID(value);
        }}
        onBlur={() => runValidationTasks("recipientID", recipientID)}
        errorMessage={errors.recipientID?.errorMessage}
        hasError={errors.recipientID?.hasError}
        {...getOverrideProps(overrides, "recipientID")}
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
              recipientID,
              depotID: value,
              fulfilled,
              kits,
              kitQuantity,
              items,
              itemQuantity,
              notes,
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
      <SwitchField
        label="Fulfilled"
        defaultChecked={false}
        isDisabled={false}
        isChecked={fulfilled}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              recipientID,
              depotID,
              fulfilled: value,
              kits,
              kitQuantity,
              items,
              itemQuantity,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.fulfilled ?? value;
          }
          if (errors.fulfilled?.hasError) {
            runValidationTasks("fulfilled", value);
          }
          setFulfilled(value);
        }}
        onBlur={() => runValidationTasks("fulfilled", fulfilled)}
        errorMessage={errors.fulfilled?.errorMessage}
        hasError={errors.fulfilled?.hasError}
        {...getOverrideProps(overrides, "fulfilled")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              recipientID,
              depotID,
              fulfilled,
              kits: values,
              kitQuantity,
              items,
              itemQuantity,
              notes,
            };
            const result = onChange(modelFields);
            values = result?.kits ?? values;
          }
          setKits(values);
          setCurrentKitsValue("");
        }}
        currentFieldValue={currentKitsValue}
        label={"Kits"}
        items={kits}
        hasError={errors?.kits?.hasError}
        errorMessage={errors?.kits?.errorMessage}
        setFieldValue={setCurrentKitsValue}
        inputFieldRef={kitsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Kits"
          isRequired={false}
          isReadOnly={false}
          value={currentKitsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.kits?.hasError) {
              runValidationTasks("kits", value);
            }
            setCurrentKitsValue(value);
          }}
          onBlur={() => runValidationTasks("kits", currentKitsValue)}
          errorMessage={errors.kits?.errorMessage}
          hasError={errors.kits?.hasError}
          ref={kitsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "kits")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              recipientID,
              depotID,
              fulfilled,
              kits,
              kitQuantity: values,
              items,
              itemQuantity,
              notes,
            };
            const result = onChange(modelFields);
            values = result?.kitQuantity ?? values;
          }
          setKitQuantity(values);
          setCurrentKitQuantityValue("");
        }}
        currentFieldValue={currentKitQuantityValue}
        label={"Kit quantity"}
        items={kitQuantity}
        hasError={errors?.kitQuantity?.hasError}
        errorMessage={errors?.kitQuantity?.errorMessage}
        setFieldValue={setCurrentKitQuantityValue}
        inputFieldRef={kitQuantityRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Kit quantity"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentKitQuantityValue}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (errors.kitQuantity?.hasError) {
              runValidationTasks("kitQuantity", value);
            }
            setCurrentKitQuantityValue(value);
          }}
          onBlur={() =>
            runValidationTasks("kitQuantity", currentKitQuantityValue)
          }
          errorMessage={errors.kitQuantity?.errorMessage}
          hasError={errors.kitQuantity?.hasError}
          ref={kitQuantityRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "kitQuantity")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              recipientID,
              depotID,
              fulfilled,
              kits,
              kitQuantity,
              items: values,
              itemQuantity,
              notes,
            };
            const result = onChange(modelFields);
            values = result?.items ?? values;
          }
          setItems(values);
          setCurrentItemsValue("");
        }}
        currentFieldValue={currentItemsValue}
        label={"Items"}
        items={items}
        hasError={errors?.items?.hasError}
        errorMessage={errors?.items?.errorMessage}
        setFieldValue={setCurrentItemsValue}
        inputFieldRef={itemsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Items"
          isRequired={false}
          isReadOnly={false}
          value={currentItemsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.items?.hasError) {
              runValidationTasks("items", value);
            }
            setCurrentItemsValue(value);
          }}
          onBlur={() => runValidationTasks("items", currentItemsValue)}
          errorMessage={errors.items?.errorMessage}
          hasError={errors.items?.hasError}
          ref={itemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "items")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              recipientID,
              depotID,
              fulfilled,
              kits,
              kitQuantity,
              items,
              itemQuantity: values,
              notes,
            };
            const result = onChange(modelFields);
            values = result?.itemQuantity ?? values;
          }
          setItemQuantity(values);
          setCurrentItemQuantityValue("");
        }}
        currentFieldValue={currentItemQuantityValue}
        label={"Item quantity"}
        items={itemQuantity}
        hasError={errors?.itemQuantity?.hasError}
        errorMessage={errors?.itemQuantity?.errorMessage}
        setFieldValue={setCurrentItemQuantityValue}
        inputFieldRef={itemQuantityRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Item quantity"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentItemQuantityValue}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (errors.itemQuantity?.hasError) {
              runValidationTasks("itemQuantity", value);
            }
            setCurrentItemQuantityValue(value);
          }}
          onBlur={() =>
            runValidationTasks("itemQuantity", currentItemQuantityValue)
          }
          errorMessage={errors.itemQuantity?.errorMessage}
          hasError={errors.itemQuantity?.hasError}
          ref={itemQuantityRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "itemQuantity")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipientID,
              depotID,
              fulfilled,
              kits,
              kitQuantity,
              items,
              itemQuantity,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
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
