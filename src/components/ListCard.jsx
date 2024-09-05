import React from 'react';
import style from '../css/ListCard.module.css';
const ListCard = ({ item }) => {
  return (
    <li className={style.ListCard}>
      <div>
        <div className={style.cardImg}>
          <img src={`/img/${item.img}`} alt={item.title} />
        </div>
        <div className={style.cardInfo}>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </div>
        <span className={style.discount}>{item.discount}%</span>
      </div>
    </li>
  );
};

export default ListCard;
