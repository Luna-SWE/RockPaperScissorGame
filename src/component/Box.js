import React from 'react';

const Box = ({ title, item }) => {
  console.log(item);

  return (
    <div className='box'>
      <h1>{title}</h1>
      <img src={item && item.img} alt='rockpaperscissors' />
      <h2>Win</h2>
    </div>
  );
};

export default Box;
