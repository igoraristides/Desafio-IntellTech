import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import makeAnimated from "react-select/animated";

import { Container, Label, Error } from "./styles";

const Select = ({
  label,
  name,
  options,
  placeholder,
  className,
  fullWidth,
  getOptionValue,
  ...rest
}) => {
  const selectRef = useRef(null);

  const animatedComponents = makeAnimated();

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    if (selectRef.current)
      registerField({
        name: fieldName,
        ref: selectRef.current,
        getValue: (ref) => {
          if (!ref.state.value) {
            return "";
          }
          return getOptionValue
            ? getOptionValue(ref.state.value)
            : ref.state.value.value;
        },
      });
  }, [fieldName, getOptionValue, registerField]);

  const selectProps = {
    ref: selectRef,
    instanceId: fieldName,
    classNamePrefix: "react-select",
    options,
    placeholder,
    components: animatedComponents,
    ...rest,
  };

  const customStyles = {
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        color: isSelected ? "white" : "#000",
        cursor: "pointer",
      };
    },
    control: (styles) => ({
      ...styles,
      height: 50,
      boxShadow: 0,
      borderColor: "#e5e4e6",
      " :hover": {
        ...styles[":active"],
        borderColor: "#9163AE",
      },
      borderRadius: 7,
      cursor: "pointer",
    }),
    placeholder: (styles) => ({ ...styles, color: "#CCCCCC" }),
    input: (styles) => {
      return {
        ...styles,
        color: "#d5c4e7",
      };
    },
  };

  return (
    <Container
      className={`root-select ${className}`}
      fullWidth={fullWidth}
      error={!!error}
    >
      {label && <Label htmlFor={fieldName}>{label}</Label>}
      <ReactSelect
        styles={customStyles}
        {...selectProps}
        getOptionValue={getOptionValue}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: "#d5c4e7",
            primary: "#9163AE",
          },
        })}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
};

Select.defaultProps = {
  options: [],
  className: "",
  placeholder: "Selecione...",
  fullWidth: true,
};

Select.propTypes = {
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default Select;
