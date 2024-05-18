import React from 'react';
import Button from './button';

const Keypad = () => {
    const buttons = [
        { id: 'clear', label: 'AC' },
        { id: 'divide', label: '/' },
        { id: 'multiply', label: '*' },
        { id: 'seven', label: '7' },
        { id: 'eight', label: '8' },
        { id: 'nine', label: '9' },
        { id: 'subtract', label: '-' },
        { id: 'four', label: '4' },
        { id: 'five', label: '5' },
        { id: 'six', label: '6' },
        { id: 'add', label: '+' },
        { id: 'one', label: '1' },
        { id: 'two', label: '2' },
        { id: 'three', label: '3' },
        { id: 'zero', label: '0' },
        { id: 'decimal', label: '.' },
        { id: 'equals', label: '=' }
    ];

    return (
        <div className="keypad">
            {buttons.map(button => (
                <Button key={button.id} id={button.id} label={button.label} />
            ))}
        </div>
    );
};

export default Keypad;
