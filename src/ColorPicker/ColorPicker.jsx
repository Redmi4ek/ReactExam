import React from 'react';
import { ChromePicker } from 'react-color';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, addToHistory  } from '../redux/action';

function ColorPicker() {
    const dispatch = useDispatch();
    const color = useSelector((state) => state.color.color); // Select only color property

    const handleChangeComplete = (color) => {
        dispatch(setColor(color.hex));
        dispatch(addToHistory(color.hex)); // Dispatch addToHistory
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <ChromePicker className="w-64" color={color} onChangeComplete={handleChangeComplete} />
            <div className="bg-[#f0f0f0] rounded-lg p-4 shadow-md" style={{ backgroundColor: color, padding: '20px' }}>
                Selected Color: {color}
            </div>
        </div>
    );
}
  
export default ColorPicker;
  
