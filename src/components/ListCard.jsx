import React from 'react';
import style from '../css/ListCard.module.css';
const ListCard = () => {
  return (
    <li className={style.ListCard}>
      <div>
        <div className={style.cardImg}>
          <img src="/img/image1.jpg" alt="상품이미지" />
        </div>
        <div className={style.cardInfo}>
          <p>상품명</p>
          <p>가격</p>
        </div>
        <span className={style.discount}>5%</span>
      </div>
    </li>
  );
};

export default ListCard;
