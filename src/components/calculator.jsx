import React from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { addDigit, addOperator, addDecimal, clearDisplay, evaluateExpression } from "../redux/actions";
import Display from './display';
import Button from './button'; 

function Calculator() {
    const displayValue = useSelector(state => state.display); // Accessing display value from Redux state
    const dispatch = useDispatch();
    const display = useSelector(state => state.display);

    const handleDigit = (digit) => {
        dispatch({ type: 'ADD_DIGIT', digit });
    };
    const handleOperator = operator => dispatch(addOperator(operator));
    const handleDecimal = () => dispatch(addDecimal());
    const handleClear = () => dispatch(clearDisplay());
    const handleEvaluate = () => dispatch(evaluateExpression());

    return (
        <div className="calculator">
            <Display value={displayValue} />
            <button id="zero" onClick={() => handleDigit('0')}>0</button>
    <button id="one" onClick={() => handleDigit('1')}>1</button>
    <button id="two" onClick={() => handleDigit('2')}>2</button>
    <button id="three" onClick={() => handleDigit('3')}>3</button>
    <button id="four" onClick={() => handleDigit('4')}>4</button>
    <button id="five" onClick={() => handleDigit('5')}>5</button>
    <button id="six" onClick={() => handleDigit('6')}>6</button>
    <button id="seven" onClick={() => handleDigit('7')}>7</button>
    <button id="eight" onClick={() => handleDigit('8')}>8</button>
    <button id="nine" onClick={() => handleDigit('9')}>9</button>
    <button id="add" onClick={() => dispatch(addOperator('+'))}>+</button>
    <button id="subtract" onClick={() => handleOperator('-')}>-</button>
    <button id="multiply" onClick={() => handleOperator('*')}>*</button>
    <button id="divide" onClick={() => handleOperator('/')}>/</button>
    <button id="decimal" onClick={handleDecimal}>.</button>
    <button id="clear" onClick={() => dispatch({ type: 'CLEAR' })}>AC</button>
    <button id="equals" onClick={handleEvaluate}>=</button>
        </div>
    );
}

// const mapStateToProps = state => ({
//     display: state.display
// });

// export default connect(mapStateToProps)(Calculator);

export default Calculator;