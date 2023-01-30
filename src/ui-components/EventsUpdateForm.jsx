/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Events } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EventsUpdateForm(props) {
  const {
    id: idProp,
    events,
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
    Address: "",
    Day: "",
    Month: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [Day, setDay] = React.useState(initialValues.Day);
  const [Month, setMonth] = React.useState(initialValues.Month);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventsRecord
      ? { ...initialValues, ...eventsRecord }
      : initialValues;
    setName(cleanValues.Name);
    setAddress(cleanValues.Address);
    setDay(cleanValues.Day);
    setMonth(cleanValues.Month);
    setErrors({});
  };
  const [eventsRecord, setEventsRecord] = React.useState(events);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Events, idProp) : events;
      setEventsRecord(record);
    };
    queryData();
  }, [idProp, events]);
  React.useEffect(resetStateValues, [eventsRecord]);
  const validations = {
    Name: [],
    Address: [],
    Day: [],
    Month: [],
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
          Address,
          Day,
          Month,
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
            Events.copyOf(eventsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EventsUpdateForm")}
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
              Address,
              Day,
              Month,
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
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={Address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address: value,
              Day,
              Month,
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
      <TextField
        label="Day"
        isRequired={false}
        isReadOnly={false}
        value={Day}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Day: value,
              Month,
            };
            const result = onChange(modelFields);
            value = result?.Day ?? value;
          }
          if (errors.Day?.hasError) {
            runValidationTasks("Day", value);
          }
          setDay(value);
        }}
        onBlur={() => runValidationTasks("Day", Day)}
        errorMessage={errors.Day?.errorMessage}
        hasError={errors.Day?.hasError}
        {...getOverrideProps(overrides, "Day")}
      ></TextField>
      <TextField
        label="Month"
        isRequired={false}
        isReadOnly={false}
        value={Month}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Day,
              Month: value,
            };
            const result = onChange(modelFields);
            value = result?.Month ?? value;
          }
          if (errors.Month?.hasError) {
            runValidationTasks("Month", value);
          }
          setMonth(value);
        }}
        onBlur={() => runValidationTasks("Month", Month)}
        errorMessage={errors.Month?.errorMessage}
        hasError={errors.Month?.hasError}
        {...getOverrideProps(overrides, "Month")}
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
          isDisabled={!(idProp || events)}
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
              !(idProp || events) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
