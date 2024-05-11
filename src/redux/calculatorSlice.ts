import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorState, CalculatorActionTypes, CalculatorAction } from '../components/types/CalculatorTypes';



const initialState: CalculatorState = {
  currentOperand: '0',  // Начальное значение - '0', а не пустая строка
  previousOperand: '',
  operation: null,
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addDigit(state, action: PayloadAction<string>) {
      const digit = action.payload;
      if (state.currentOperand === '0' && digit === '0') return state; // Избегаем ведущих нулей
      if (state.currentOperand === '0' && digit !== '.') { 
        state.currentOperand = digit; // Заменяем '0' на первую цифру
      } else if (digit === '.' && state.currentOperand.includes('.')) return state; // Избегаем нескольких точек
      else {
        state.currentOperand = state.currentOperand + digit; // Добавляем цифру
      }
    },

    chooseOperation(state, action: PayloadAction<string>) {
        if (state.currentOperand === '') return state;
        if (state.previousOperand !== '') {
          // Вместо вызова evaluate(state) напрямую, вызываем его как экшен
          state.currentOperand = state.currentOperand; //  Сохраняем текущий операнд перед вычислением
          dispatch(evaluate()); // Диспатчим evaluate как экшен
        } else {
          state.operation = action.payload;
          state.previousOperand = state.currentOperand;
          state.currentOperand = '';
        }
      },
      

    clear() {
      return initialState; // Сбрасываем состояние в начальное
    },

    deleteDigit(state) {
      state.currentOperand = state.currentOperand.slice(0, -1); // Удаляем последнюю цифру
      if (state.currentOperand === '') state.currentOperand = '0'; // Если пусто, возвращаем '0'
    },

    evaluate(state) {
        const prev = parseFloat(state.previousOperand);
        const current = parseFloat(state.currentOperand);
        if (isNaN(prev) || isNaN(current)) return; // Обработка ошибок: просто выходим, если не числа
  
        switch (state.operation) {
          case '+':
            state.currentOperand = (prev + current).toString(); // Изменяем состояние напрямую
            break;
          case '-':
            state.currentOperand = (prev - current).toString();
            break;
          case '*':
            state.currentOperand = (prev * current).toString();
            break;
          case '÷':
            if (current === 0) {
              state.currentOperand = 'Error'; // Обработка деления на ноль
            } else {
              state.currentOperand = (prev / current).toString();
            }
            break;
        }
        state.operation = null; // Сбрасываем операцию
        state.previousOperand = ''; // Очищаем предыдущий операнд
      },
    },
  });

// Вспомогательная функция для вычислений (можно вынести в отдельный файл)

export const { addDigit, chooseOperation, clear, deleteDigit, evaluate } = calculatorSlice.actions;
export default calculatorSlice.reducer;


