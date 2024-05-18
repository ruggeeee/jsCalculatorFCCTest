import { UPDATE_DISPLAY, CLEAR_DISPLAY } from "./actionsTypes";

export const updateDisplay = value => ({
    type: UPDATE_DISPLAY,
    payload: value
});

// export const clearDisplay = () => ({
//     type: CLEAR_DISPLAY,
//     payload: '0'
// });

export const addDigit = digit => ({ type: 'ADD_DIGIT', digit });
export const addOperator = operator => ({
    type: 'ADD_OPERATOR',
    payload: { operator }
});
export const addDecimal = () => ({ type: 'ADD_DECIMAL' });
export const clearDisplay = () => ({ type: 'CLEAR' });
export const evaluateExpression = () => ({ type: 'EVALUATE' });