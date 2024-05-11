import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeGuess } from '../../redux/GameSlice';

function GuessForm() {
  const dispatch = useDispatch();
  const [guess, setGuess] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(makeGuess(parseInt(guess, 10)));
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input className="w-2/3 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300" type="number" value={guess} onChange={e => setGuess(e.target.value)} />
      <button className="w-1/3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-md" type="submit">Угадать</button>
    </form>
  );
}

export default GuessForm;
