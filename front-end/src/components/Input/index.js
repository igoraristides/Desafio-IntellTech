import React, { useRef, useEffect } from "react";

import { useField } from "@unform/core";
import PropTypes from "prop-types";
import { Container, Label, Field } from "./styles";

const Input = ({
  type,
  label,
  name,
  colorLabel,
  fullWidth,
  noBorder,
  variant,
  ...rest
}) => {
  const inputRef = useRef(null);

  // defaultValue
  const { fieldName, registerField, error, defaultValue = "" } = useField(name);

  useEffect(() => {
    if (inputRef.current && !rest.value)
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: "value",
      });
  }, [fieldName, registerField, rest.value]);

  return (
    <Container fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={fieldName} color={colorLabel}>
          {label}
        </Label>
      )}
      <Field
        ref={inputRef}
        type={type}
        id={fieldName}
        name={fieldName}
        error={!!error}
        variant={variant}
      />
    </Container>
  );
};

Input.defaultProps = {
  type: "text",
  label: "",
  colorLabel: "#FFFFFF",
  noBorder: false,
  variant: "",
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  colorLabel: PropTypes.string,
  noBorder: PropTypes.bool,
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Input;
