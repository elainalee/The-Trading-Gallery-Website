import React from 'react';
import './Button.css';

const STYLES = [
    'btn--primary',
    'btn--outline',
];

const SIZES = [
    'btn--medium',
    'btn--large',
    'btn--navbar',
];

const COLORS = [
    'black',
];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    color,
    marginLeft,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const thisColorName = COLORS.includes(color) ? color : COLORS[0];

    return (
        <button
          className={`btn--primary ${checkButtonStyle} ${checkButtonSize} ${thisColorName}`}
          onClick={onClick}
          type={type}
          style={({ marginLeft })}
        >
            {children}
        </button>
    );
};
