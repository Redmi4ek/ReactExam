import React from 'react';
import { useSelector } from 'react-redux';

function ColorHistory() {
  const colorHistory = useSelector(state => state.colorHistory); // Assuming you've added colorHistory to your Redux state

  return (
    <div className="bg-[#f0f0f0] rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-semibold">Color History</h2>
      <ul className="list-none">
        {colorHistory && colorHistory.map((color, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full" style={{ backgroundColor: color, width: '30px', height: '30px' }} /> {color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorHistory;