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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Resource } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ResourceUpdateForm(props) {
  const {
    id: idProp,
    resource,
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
    Phone: "",
    Description: "",
    Website: "",
    Address: "",
    SaveStatus: false,
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Phone, setPhone] = React.useState(initialValues.Phone);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [Website, setWebsite] = React.useState(initialValues.Website);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [SaveStatus, setSaveStatus] = React.useState(initialValues.SaveStatus);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = resourceRecord
      ? { ...initialValues, ...resourceRecord }
      : initialValues;
    setName(cleanValues.Name);
    setPhone(cleanValues.Phone);
    setDescription(cleanValues.Description);
    setWebsite(cleanValues.Website);
    setAddress(cleanValues.Address);
    setSaveStatus(cleanValues.SaveStatus);
    setErrors({});
  };
  const [resourceRecord, setResourceRecord] = React.useState(resource);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Resource, idProp)
        : resource;
      setResourceRecord(record);
    };
    queryData();
  }, [idProp, resource]);
  React.useEffect(resetStateValues, [resourceRecord]);
  const validations = {
    Name: [],
    Phone: [{ type: "Phone" }],
    Description: [],
    Website: [{ type: "URL" }],
    Address: [],
    SaveStatus: [],
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
          Phone,
          Description,
          Website,
          Address,
          SaveStatus,
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
            Resource.copyOf(resourceRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ResourceUpdateForm")}
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
              Phone,
              Description,
              Website,
              Address,
              SaveStatus,
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
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Phone: value,
              Description,
              Website,
              Address,
              SaveStatus,
            };
            const result = onChange(modelFields);
            value = result?.Phone ?? value;
          }
          if (errors.Phone?.hasError) {
            runValidationTasks("Phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("Phone", Phone)}
        errorMessage={errors.Phone?.errorMessage}
        hasError={errors.Phone?.hasError}
        {...getOverrideProps(overrides, "Phone")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Phone,
              Description: value,
              Website,
              Address,
              SaveStatus,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={Website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Phone,
              Description,
              Website: value,
              Address,
              SaveStatus,
            };
            const result = onChange(modelFields);
            value = result?.Website ?? value;
          }
          if (errors.Website?.hasError) {
            runValidationTasks("Website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("Website", Website)}
        errorMessage={errors.Website?.errorMessage}
        hasError={errors.Website?.hasError}
        {...getOverrideProps(overrides, "Website")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={Address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Phone,
              Description,
              Website,
              Address: value,
              SaveStatus,
            };
            const result = onChange(modelFields);
            value = result?.Address ?? value;
          }
          if (errors.Address?.hasError) {
            runValidationTasks("Address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("Address", Address)}
        errorMessage={errors.Address?.errorMessage}
        hasError={errors.Address?.hasError}
        {...getOverrideProps(overrides, "Address")}
      ></TextField>
      <SwitchField
        label="Save status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={SaveStatus}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              Phone,
              Description,
              Website,
              Address,
              SaveStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.SaveStatus ?? value;
          }
          if (errors.SaveStatus?.hasError) {
            runValidationTasks("SaveStatus", value);
          }
          setSaveStatus(value);
        }}
        onBlur={() => runValidationTasks("SaveStatus", SaveStatus)}
        errorMessage={errors.SaveStatus?.errorMessage}
        hasError={errors.SaveStatus?.hasError}
        {...getOverrideProps(overrides, "SaveStatus")}
      ></SwitchField>
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
          isDisabled={!(idProp || resource)}
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
              !(idProp || resource) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
