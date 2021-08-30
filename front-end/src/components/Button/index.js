import React from "react";

import PropTypes from "prop-types";

import { Container } from "./styles";

const Button = ({
  label,
  Icon,
  iconPosition,
  iconSize,
  justifyContent,
  height,

  ...rest
}) => {
  return (
    <div
      styles={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        justifyContent={justifyContent}
        iconPosition={iconPosition}
        iconSize={iconSize}
        height={height}
        {...rest}
      >
        <div className="buttonIcon">
          {Icon && iconPosition === "left" && <Icon />}
          {label}
          {Icon && iconPosition === "right" && <Icon />}
        </div>
      </Container>
    </div>
  );
};

Button.defaultProps = {
  type: "button",
  fullWidth: false,
  Icon: null,
  label: "",
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  Icon: PropTypes.element,
};

export default Button;
