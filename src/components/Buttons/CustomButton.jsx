import React from 'react';
import './CustomButton.css';

const STYLES = [
    'primary',
    'outline',
    'link',
];

const SIZES = [
    'medium',
    'large',
    'navbar',
    'signin',
];

const BUTTON_DETAILS = [
    'login',
    'signup',
    'resetpw',
    'userprofile',
    'updateprofile',
];

const COLORS = [
    'black',
];

export const CustomButton = ({
    children,
    type,
    disabled,
    onClick,
    buttonStyle,
    buttonSize,
    buttonDetail,
    color,
    marginLeft,
    marginTop,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    if (checkButtonStyle === 'link') {
        return (
            <button
              className={checkButtonStyle}
              onClick={onClick}
              disabled={disabled}
              type={type}
              style={({ marginTop, marginLeft })}
            >
                {children}
            </button>
        );
    }

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonDetailedSize = BUTTON_DETAILS.includes(buttonDetail) ? buttonDetail : '';

    const checkDisabled = disabled ? 'disabled' : '';

    const thisColorName = COLORS.includes(color) ? color : COLORS[0];

    return (
        <button
          className={`customButton ${checkButtonStyle} ${checkButtonSize} ${checkButtonDetailedSize} ${thisColorName} ${checkDisabled}`}
          onClick={onClick}
          disabled={disabled}
          type={type}
          style={({ marginTop, marginLeft })}
        >
            {children}
        </button>
    );
};

export default CustomButton;