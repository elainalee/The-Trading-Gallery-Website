import React from 'react';
import './CustomButton.css';

const STYLES = [
    'primary',
    'outline',
    'square',
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
    marginRight,
    marginTop,
    marginBottom,
    fontSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkDisabled = disabled ? 'disabled' : '';

    return (
        <button
          className={`customButton ${checkButtonStyle} ${buttonSize} ${buttonDetail} ${color} ${checkDisabled}`}
          onClick={onClick}
          disabled={disabled}
          type={type}
          style={({ marginTop, marginRight, marginBottom, marginLeft })}
        >
            {children}
        </button>
    );
};

export default CustomButton;