import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../css/DetailPage.module.css';
import TabStyle from '../layout/TabStyle';
import Similar from '../layout/Similar';

const DetailPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [count, setCount] = useState(1);

  const getproductsDetail = async () => {
    try {
      let url = `http://localhost:8000/products/${id}`;
      let res = await fetch(url);
      let data = await res.json();

      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const increment = () => {
    count < 10 ? setCount((prev) => prev + 1) : alert('최대 수량은 10개입니다');
  };
  const decrement = () => {
    count >= 1 ? setCount((prev) => prev - 1) : alert('최소 수량은 1개입니다');
  };

  useEffect(() => {
    getproductsDetail();
  }, [id]);
  /**
   * @Todo products null로 초반에 뜨는거 디버깅으로 순서 확인
   */

  return (
    <div className={`${style.DetailPage} mw`}>
      <h2>Detail Page</h2>
      <div className={style.productCon}>
        <div className={style.imgCon}>
          <img src={`/img/${products?.img}`} alt={products?.title} />
        </div>
        <div className={style.pInfo}>
          <p>
            상품명: {products?.title} / {products?.category}
          </p>
          <p>가격 정보: {Number(products?.price).toLocaleString()}원</p>
          <p>할인률: {products?.discount}</p>
          <div className={style.count}>
            {count === 1 ? (
              <button disabled>-</button>
            ) : (
              <button onClick={decrement}>-</button>
            )}
            <span>{count}</span>
            {count === 10 ? (
              <button disabled>+</button>
            ) : (
              <button onClick={increment}>+</button>
            )}
          </div>
        </div>
      </div>
      <TabStyle />
      <Similar info={products?.category} />
    </div>
  );
};

export default DetailPage;
