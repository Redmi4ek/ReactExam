import React from 'react';
import { useSelector } from 'react-redux';

function ColorDisplay() {
  const color = useSelector(state => state.color.color); // Select only color property

  return (
    <div className="bg-[#f0f0f0] rounded-lg p-4 shadow-md text-center"
    style={{ backgroundColor: color, padding: '20px', textAlign: 'center' }}>
      <h2 className="text-2xl font-semibold">Selected Color</h2>
      <p>{color}</p>
    </div>
  );
}

export default ColorDisplay;