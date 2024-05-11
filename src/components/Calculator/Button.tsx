import React from 'react';

interface ButtonProps {
  buttonType: 'digit' | 'operator' | 'equals' | 'clear' | 'delete';
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ buttonType, onClick, children }: ButtonProps) {
  return (
    <button className={`button ${buttonType}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
