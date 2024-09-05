import React from 'react';
import style from '../css/ProductList.module.css';
import ListCard from '../components/ListCard';

const ProductList = ({ products }) => {
  return (
    <section className={style.ProductList}>
      <h2>상품 리스트</h2>
      <a href="#">전체보기</a>
      <ul className={style.listCon}>
        {products.map((item) => (
          <ListCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default ProductList;
