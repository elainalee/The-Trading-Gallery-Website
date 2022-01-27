import React from 'react';
import './CustomButton.css';

const STYLES = [
    'primary',
    'outline',
    'link',
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
    fontSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    if (checkButtonStyle === 'link') {
        return (
            <button
              className={checkButtonStyle}
              onClick={onClick}
              disabled={disabled}
              type={type}
              style={({ marginTop, marginLeft, fontSize })}
            >
                {children}
            </button>
        );
    }

    const checkDisabled = disabled ? 'disabled' : '';

    return (
        <button
          className={`customButton ${checkButtonStyle} ${buttonSize} ${buttonDetail} ${color} ${checkDisabled}`}
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