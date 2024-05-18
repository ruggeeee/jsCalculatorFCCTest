import React from 'react';

const Display = ({ value }) => {
    return <div id="display">{value}</div>; // Ensure `value` is a string or number
};

export default Display;