// components/Circles.js
import React from 'react';

const Circles = () => {
  return (
    <div className="area">
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, index) => (
          <li
            key={index}
            className={`circle${index + 1} p-1 h-6 w-8`} // Apply the custom class
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Circles;
