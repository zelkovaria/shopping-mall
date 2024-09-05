import React from 'react';
import ListCard from '../components/ListCard';
import style from '../css/ShopPage.module.css';

const ShopPage = ({ products }) => {
  return (
    <main className={`${style.ShopPage} mw`}>
      <h2>shop page</h2>
      <nav>
        <button>등록순</button>
        <button>낮은 가격순</button>
        <button>높은 가격순</button>
        <button>높은 할인률순</button>
      </nav>
      <ul className={style.listCon}>
        {products.map((item) => (
          <ListCard key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
};

export default ShopPage;
