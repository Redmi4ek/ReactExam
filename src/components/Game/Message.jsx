import React from 'react';

function Message({ message }) {
  return <p className={`text-center text-lg font-medium mt-2 ${
    message.includes("Поздравляю")
      ? "text-green-500"
      : message.includes("больше")
      ? "text-yellow-500"
      : "text-red-500"
  }`}
>{message}</p>;
}

export default Message;
