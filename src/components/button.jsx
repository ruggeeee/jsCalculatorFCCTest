import React from 'react';

const Button = ({ label, onClick, id }) => {
    return (
        <button id={id} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
