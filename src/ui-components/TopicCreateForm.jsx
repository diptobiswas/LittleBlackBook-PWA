/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Topic } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TopicCreateForm(props) {
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
    Name: "",
    Icon: "",
    Colour: undefined,
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Icon, setIcon] = React.useState(initialValues.Icon);
  const [Colour, setColour] = React.useState(initialValues.Colour);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setIcon(initialValues.Icon);
    setColour(initialValues.Colour);
    setErrors({});
  };
  const validations = {
    Name: [],
    Icon: [{ type: "URL" }],
    Colour: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
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
          Name,
          Icon,
          Colour,
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
          await DataStore.save(new Topic(modelFields));
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
      {...getOverrideProps(overrides, "TopicCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Icon,
              Colour,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Icon"
        isRequired={false}
        isReadOnly={false}
        value={Icon}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Icon: value,
              Colour,
            };
            const result = onChange(modelFields);
            value = result?.Icon ?? value;
          }
          if (errors.Icon?.hasError) {
            runValidationTasks("Icon", value);
          }
          setIcon(value);
        }}
        onBlur={() => runValidationTasks("Icon", Icon)}
        errorMessage={errors.Icon?.errorMessage}
        hasError={errors.Icon?.hasError}
        {...getOverrideProps(overrides, "Icon")}
      ></TextField>
      <SelectField
        label="Colour"
        placeholder="Please select an option"
        isDisabled={false}
        value={Colour}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Icon,
              Colour: value,
            };
            const result = onChange(modelFields);
            value = result?.Colour ?? value;
          }
          if (errors.Colour?.hasError) {
            runValidationTasks("Colour", value);
          }
          setColour(value);
        }}
        onBlur={() => runValidationTasks("Colour", Colour)}
        errorMessage={errors.Colour?.errorMessage}
        hasError={errors.Colour?.hasError}
        {...getOverrideProps(overrides, "Colour")}
      >
        <option
          children="Red"
          value="RED"
          {...getOverrideProps(overrides, "Colouroption0")}
        ></option>
        <option
          children="Blue"
          value="BLUE"
          {...getOverrideProps(overrides, "Colouroption1")}
        ></option>
        <option
          children="Black"
          value="BLACK"
          {...getOverrideProps(overrides, "Colouroption2")}
        ></option>
        <option
          children="Yellow"
          value="YELLOW"
          {...getOverrideProps(overrides, "Colouroption3")}
        ></option>
        <option
          children="Greeen"
          value="GREEEN"
          {...getOverrideProps(overrides, "Colouroption4")}
        ></option>
        <option
          children="Purple"
          value="PURPLE"
          {...getOverrideProps(overrides, "Colouroption5")}
        ></option>
      </SelectField>
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
