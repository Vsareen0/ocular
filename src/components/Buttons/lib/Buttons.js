import React from "react";
import PropTypes from "prop-types";
import "../../../styles/button.css";

/**
 * Primary UI component for user interaction
 */
export default Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary ? "ocular-button--primary" : "ocular-button--secondary";
  return (
    <button
      type="button"
      className={["ocular-button", `ocular-button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
