import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/type.ts'; // Импортируем RootState
import { addDigit, chooseOperation, clear, deleteDigit, evaluate } from '../../redux/calculatorSlice.ts'; // Импортируем экшены
import Display from './Display.tsx';
import Button from './Button.tsx';
import './calculator.css';
/// type , array object ,data model RootState, onClick props

function Calculator() {
  const dispatch = useDispatch();
  const { currentOperand, previousOperand, operation } = useSelector((state: RootState) => state.calculator);

  const handleDigitClick = (digit: string) => {
    dispatch(addDigit(digit));
  };

  const handleOperationClick = (operation: string) => {
    dispatch(chooseOperation(operation));
  };

  const handleClearClick = () => {
    dispatch(clear());
  };

  const handleDeleteClick = () => {
    dispatch(deleteDigit());
  };

  const handleEqualClick = () => {
    dispatch(evaluate());
  };

  return (
    <div className="calculator">
    <Display currentOperand={currentOperand} previousOperand={previousOperand} operation={operation} />

    <Button buttonType="clear" onClick={() => dispatch(clear())}>AC</Button>
    <Button buttonType="delete" onClick={() => dispatch(deleteDigit())}>DEL</Button>
    <Button buttonType="operator" onClick={() => handleOperationClick('÷')}>÷</Button>

    <Button buttonType="digit" onClick={() => handleDigitClick('1')}>1</Button>
    <Button buttonType="digit" onClick={() => handleDigitClick('2')}>2</Button>
    <Button buttonType="digit" onClick={() => handleDigitClick('3')}>3</Button>
    <Button buttonType="operator" onClick={() => handleOperationClick('*')}>*</Button>

    <Button buttonType="digit" onClick={() => handleDigitClick('4')}>4</Button>
    <Button buttonType="digit" onClick={() => handleDigitClick('5')}>5</Button>
    <Button buttonType="digit" onClick={() => handleDigitClick('6')}>6</Button>
    <Button buttonType="operator" onClick={() => handleOperationClick('+')}>+</Button>

    <Button buttonType="digit" onClick={() => handleDigitClick('7')}>7</Button>
    <Button buttonType="digit" onClick={() => handleDigitClick('8')}>8</Button>
    <Button buttonType="digit" onClick={() => handleDigitClick('9')}>9</Button>
    <Button buttonType="operator" onClick={() => handleOperationClick('-')}>-</Button>

    <Button buttonType="digit" onClick={() => handleDigitClick('.')}>.</Button>
    <Button buttonType="digit" onClick={() => handleDigitClick('0')}>0</Button>
    <Button buttonType="equals" className="double" onClick={handleEqualClick}>=</Button>
  </div>
);

}

export default Calculator;
