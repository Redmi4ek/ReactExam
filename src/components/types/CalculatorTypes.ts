
export interface CalculatorState {
    currentOperand: string;
    previousOperand: string;
    operation: string | null;
  }
  
  export enum CalculatorActionTypes {
    ADD_DIGIT = 'calculator/addDigit',
    CHOOSE_OPERATION = 'calculator/chooseOperation',
    CLEAR = 'calculator/clear',
    DELETE_DIGIT = 'calculator/deleteDigit',
    EVALUATE = 'calculator/evaluate',
  }
  
  interface AddDigitAction {
    type: CalculatorActionTypes.ADD_DIGIT;
    payload: string;
  }
  
  interface ChooseOperationAction {
    type: CalculatorActionTypes.CHOOSE_OPERATION;
    payload: string;
  }
  
  interface ClearAction {
    type: CalculatorActionTypes.CLEAR;
  }
  
  interface DeleteDigitAction {
    type: CalculatorActionTypes.DELETE_DIGIT;
  }
  
  interface EvaluateAction {
    type: CalculatorActionTypes.EVALUATE;
  }
  
  export type CalculatorAction = 
    | AddDigitAction 
    | ChooseOperationAction 
    | ClearAction 
    | DeleteDigitAction 
    | EvaluateAction;
  