import React from 'react';

const Box = ({ title, item, result }) => {
  let finalResult;
  if (title === 'Computer' && result !== 'tie' && result !== '') {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    finalResult = result === 'win' ? 'lose' : 'win';
  } else {
    // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    finalResult = result;
  }

  return (
    <div className={`box ${finalResult}`}>
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
        {finalResult ? (
          finalResult.toUpperCase()
        ) : (
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Lw10HDOyIeeojw12Tn6zzJ_eEY_1WRNMs3vLig3TsKtEJCgVuSKgsszLjLDKDo_tWDQ&usqp=CAU'
            alt='thumbs-up-down'
          />
        )}
      </h2>
    </div>
  );
};

export default Box;
