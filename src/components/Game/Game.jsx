import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GuessForm from './GuessForm';
import Message from './Message';
import NumberDisplay from './NumberDisplay';
import { resetGame } from '../../redux/GameSlice';

function Game() {
  const dispatch = useDispatch();
  const guesses = useSelector(state => state.game.guesses);
  const message = useSelector(state => state.game.message);

  return (
    <div className="container mx-auto p-4 bg-gray-900 rounded-lg shadow-md" >
      <h1 className="text-3xl font-bold text-white text-center mb-4">Угадай число от 1 до 100</h1>
      <Message message={message} />
      <GuessForm />
      <h2 className='text-xl font-semibold text-white mt-4 mb-2'>Предыдущие попытки:</h2>
      <ul className="list-disc list-inside text-white">
        {guesses.map((guess, index) => (
          <NumberDisplay key={index} number={guess} />
        ))}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => dispatch(resetGame())}>Начать заново</button>
    </div>
  );
}

export default Game;
