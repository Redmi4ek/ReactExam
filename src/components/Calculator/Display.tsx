import React from 'react';

interface DisplayProps {
  currentOperand: string;
  previousOperand: string;
  operation: string | null;
}

function Display({ currentOperand, previousOperand, operation }: DisplayProps) {
  return (
    <div className="display">
      <div className="previous-operand">{previousOperand} {operation}</div>
      <div className="current-operand">{currentOperand}</div>
    </div>
  );
}

export default Display;
