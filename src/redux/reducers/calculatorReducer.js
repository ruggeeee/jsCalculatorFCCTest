// src/redux/reducers/calculatorReducer.js
const initialState = {
    display: '0'
};

function calculatorReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_DIGIT':
            // Prevent leading zeros
            if (state.display === '0' && action.digit === '0') {
                return state; // Do nothing if zero is added to zero
            } else if (state.display === '0' && action.digit !== '0') {
                return { ...state, display: action.digit }; // Replace initial zero
            } else {
                return { ...state, display: state.display + action.digit }; // Append digit
            }

            case 'ADD_OPERATOR':
                const { operator } = action.payload;
                let currentInput = state.display;
            
                // Regex to check if the current display ends with an operator
                const endsWithOperator = /[\+\*\-\/]$/;
                const endsWithNonMinusOperator = /[\+\*\/]$/;
            
                if (endsWithOperator.test(currentInput)) {
                    if (operator === '-' && endsWithNonMinusOperator.test(currentInput)) {
                        // Allow '-' to be appended if it follows any non-minus operator
                        currentInput += operator;
                    } else {
                        // Replace the last operator or successive operators
                        currentInput = currentInput.replace(/[\+\*\-\/]+$/, '') + operator;
                    }
                } else {
                    currentInput += operator;
                }
            
                return {
                    ...state,
                    display: currentInput
                };
            

        case 'ADD_DECIMAL':
            if (!/\.\d*$/.test(state.display)) { // Ensure only one decimal per number segment
                return { ...state, display: state.display + '.' };
            }
            return state;

        case 'CLEAR':
            return { ...state, display: '0' }; // Reset display to zero

        case 'EVALUATE':
            try {
                // Evaluate the current expression
                const result = eval(state.display).toString();
                return { ...state, display: result };
            } catch (error) {
                return { ...state, display: 'Error' }; // Handle evaluation errors
            }

        default:
            return state;
    }
}

export default calculatorReducer;
