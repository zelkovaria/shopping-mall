import React, { useCallback, useEffect, useState } from 'react';
import ListCard from '../components/ListCard';
import style from '../css/ShopPage.module.css';
import { useSearchParams } from 'react-router-dom';

const SORT_OPTIONS = {
  latest: '',
  lowPrice: 'price',
  highPrice: '-price',
  discount: '-discount',
};
const SORT_LABELS = {
  latest: '최신순',
  lowPrice: '낮은가격순',
  highPrice: '높은가격순',
  discount: '높은할인율',
};

const ShopPage = ({ products, getProducts }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => {
    return parseInt(searchParams.get('page') || '1', 10);
  });
  const [sortType, setSortType] = useState(
    () => searchParams.get('sort') || 'latest'
  );

  const loadProducts = useCallback(() => {
    getProducts(1, currentPage * 8, SORT_OPTIONS[sortType]);
    setSearchParams({ page: currentPage.toString(), sort: sortType });
  }, [currentPage, setSearchParams, sortType]);

  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleSort = (key) => {
    setSortType(key);
    setCurrentPage(1);
  };

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <main className={`${style.ShopPage} mw`}>
      <h2>shop page</h2>
      <nav>
        {Object.keys(SORT_OPTIONS).map((key) => (
          <button
            key={key}
            onClick={() => {
              handleSort(key);
            }}
            className={sortType === key ? style.active : ''}
          >
            {SORT_LABELS[key]}
          </button>
        ))}
      </nav>
      <ul className={style.listCon}>
        {products.map((item) => (
          <ListCard key={item.id} item={item} />
        ))}
      </ul>
      <button onClick={loadMore}>상품 더 불러오기</button>
    </main>
  );
};

export default ShopPage;
