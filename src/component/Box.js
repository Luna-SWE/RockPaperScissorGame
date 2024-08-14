import React from 'react';

const Box = ({ title, item, result }) => {
  return (
    <div className='box'>
      <h1>{title}</h1>
      <img
        src={
          item
            ? item.img
            : 'https://cdn-icons-png.flaticon.com/512/6028/6028784.png'
        }
        alt='rockpaperscissors'
        width={300}
      />
      <h2>
        <img
          src={
            result
              ? result
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Lw10HDOyIeeojw12Tn6zzJ_eEY_1WRNMs3vLig3TsKtEJCgVuSKgsszLjLDKDo_tWDQ&usqp=CAU'
          }
          alt=''
        />
      </h2>
    </div>
  );
};

export default Box;
