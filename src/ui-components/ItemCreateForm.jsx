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
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Item } from "../models";
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
export default function ItemCreateForm(props) {
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
    name: "",
    categoryId: "",
    size: "",
    expiry: "",
    brand: "",
    amountPerCount: "",
    mainIngredients: [],
    allergens: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [categoryId, setCategoryId] = React.useState(initialValues.categoryId);
  const [size, setSize] = React.useState(initialValues.size);
  const [expiry, setExpiry] = React.useState(initialValues.expiry);
  const [brand, setBrand] = React.useState(initialValues.brand);
  const [amountPerCount, setAmountPerCount] = React.useState(
    initialValues.amountPerCount
  );
  const [mainIngredients, setMainIngredients] = React.useState(
    initialValues.mainIngredients
  );
  const [allergens, setAllergens] = React.useState(initialValues.allergens);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setCategoryId(initialValues.categoryId);
    setSize(initialValues.size);
    setExpiry(initialValues.expiry);
    setBrand(initialValues.brand);
    setAmountPerCount(initialValues.amountPerCount);
    setMainIngredients(initialValues.mainIngredients);
    setCurrentMainIngredientsValue("");
    setAllergens(initialValues.allergens);
    setCurrentAllergensValue("");
    setErrors({});
  };
  const [currentMainIngredientsValue, setCurrentMainIngredientsValue] =
    React.useState("");
  const mainIngredientsRef = React.createRef();
  const [currentAllergensValue, setCurrentAllergensValue] = React.useState("");
  const allergensRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    categoryId: [{ type: "Required" }],
    size: [],
    expiry: [],
    brand: [],
    amountPerCount: [],
    mainIngredients: [],
    allergens: [],
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
          name,
          categoryId,
          size,
          expiry,
          brand,
          amountPerCount,
          mainIngredients,
          allergens,
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
          await DataStore.save(new Item(modelFields));
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
      {...getOverrideProps(overrides, "ItemCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              categoryId,
              size,
              expiry,
              brand,
              amountPerCount,
              mainIngredients,
              allergens,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Category id"
        isRequired={true}
        isReadOnly={false}
        value={categoryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              categoryId: value,
              size,
              expiry,
              brand,
              amountPerCount,
              mainIngredients,
              allergens,
            };
            const result = onChange(modelFields);
            value = result?.categoryId ?? value;
          }
          if (errors.categoryId?.hasError) {
            runValidationTasks("categoryId", value);
          }
          setCategoryId(value);
        }}
        onBlur={() => runValidationTasks("categoryId", categoryId)}
        errorMessage={errors.categoryId?.errorMessage}
        hasError={errors.categoryId?.hasError}
        {...getOverrideProps(overrides, "categoryId")}
      ></TextField>
      <TextField
        label="Size"
        isRequired={false}
        isReadOnly={false}
        value={size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              categoryId,
              size: value,
              expiry,
              brand,
              amountPerCount,
              mainIngredients,
              allergens,
            };
            const result = onChange(modelFields);
            value = result?.size ?? value;
          }
          if (errors.size?.hasError) {
            runValidationTasks("size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("size", size)}
        errorMessage={errors.size?.errorMessage}
        hasError={errors.size?.hasError}
        {...getOverrideProps(overrides, "size")}
      ></TextField>
      <TextField
        label="Expiry"
        isRequired={false}
        isReadOnly={false}
        value={expiry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              categoryId,
              size,
              expiry: value,
              brand,
              amountPerCount,
              mainIngredients,
              allergens,
            };
            const result = onChange(modelFields);
            value = result?.expiry ?? value;
          }
          if (errors.expiry?.hasError) {
            runValidationTasks("expiry", value);
          }
          setExpiry(value);
        }}
        onBlur={() => runValidationTasks("expiry", expiry)}
        errorMessage={errors.expiry?.errorMessage}
        hasError={errors.expiry?.hasError}
        {...getOverrideProps(overrides, "expiry")}
      ></TextField>
      <TextField
        label="Brand"
        isRequired={false}
        isReadOnly={false}
        value={brand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              categoryId,
              size,
              expiry,
              brand: value,
              amountPerCount,
              mainIngredients,
              allergens,
            };
            const result = onChange(modelFields);
            value = result?.brand ?? value;
          }
          if (errors.brand?.hasError) {
            runValidationTasks("brand", value);
          }
          setBrand(value);
        }}
        onBlur={() => runValidationTasks("brand", brand)}
        errorMessage={errors.brand?.errorMessage}
        hasError={errors.brand?.hasError}
        {...getOverrideProps(overrides, "brand")}
      ></TextField>
      <TextField
        label="Amount per count"
        isRequired={false}
        isReadOnly={false}
        value={amountPerCount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              categoryId,
              size,
              expiry,
              brand,
              amountPerCount: value,
              mainIngredients,
              allergens,
            };
            const result = onChange(modelFields);
            value = result?.amountPerCount ?? value;
          }
          if (errors.amountPerCount?.hasError) {
            runValidationTasks("amountPerCount", value);
          }
          setAmountPerCount(value);
        }}
        onBlur={() => runValidationTasks("amountPerCount", amountPerCount)}
        errorMessage={errors.amountPerCount?.errorMessage}
        hasError={errors.amountPerCount?.hasError}
        {...getOverrideProps(overrides, "amountPerCount")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              categoryId,
              size,
              expiry,
              brand,
              amountPerCount,
              mainIngredients: values,
              allergens,
            };
            const result = onChange(modelFields);
            values = result?.mainIngredients ?? values;
          }
          setMainIngredients(values);
          setCurrentMainIngredientsValue("");
        }}
        currentFieldValue={currentMainIngredientsValue}
        label={"Main ingredients"}
        items={mainIngredients}
        hasError={errors?.mainIngredients?.hasError}
        errorMessage={errors?.mainIngredients?.errorMessage}
        setFieldValue={setCurrentMainIngredientsValue}
        inputFieldRef={mainIngredientsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Main ingredients"
          isRequired={false}
          isReadOnly={false}
          value={currentMainIngredientsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.mainIngredients?.hasError) {
              runValidationTasks("mainIngredients", value);
            }
            setCurrentMainIngredientsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("mainIngredients", currentMainIngredientsValue)
          }
          errorMessage={errors.mainIngredients?.errorMessage}
          hasError={errors.mainIngredients?.hasError}
          ref={mainIngredientsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "mainIngredients")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              categoryId,
              size,
              expiry,
              brand,
              amountPerCount,
              mainIngredients,
              allergens: values,
            };
            const result = onChange(modelFields);
            values = result?.allergens ?? values;
          }
          setAllergens(values);
          setCurrentAllergensValue("");
        }}
        currentFieldValue={currentAllergensValue}
        label={"Allergens"}
        items={allergens}
        hasError={errors?.allergens?.hasError}
        errorMessage={errors?.allergens?.errorMessage}
        setFieldValue={setCurrentAllergensValue}
        inputFieldRef={allergensRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Allergens"
          isRequired={false}
          isReadOnly={false}
          value={currentAllergensValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.allergens?.hasError) {
              runValidationTasks("allergens", value);
            }
            setCurrentAllergensValue(value);
          }}
          onBlur={() => runValidationTasks("allergens", currentAllergensValue)}
          errorMessage={errors.allergens?.errorMessage}
          hasError={errors.allergens?.hasError}
          ref={allergensRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "allergens")}
        ></TextField>
      </ArrayField>
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
