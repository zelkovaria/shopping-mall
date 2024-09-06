import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../css/DetailPage.module.css';
import TabStyle from '../layout/TabStyle';
import Similar from '../layout/Similar';

const DetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState(null);

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

  useEffect(() => {
    getproductsDetail();
  }, [id]);
  console.log(products);

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
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <TabStyle />
      <Similar info={products?.category} />
    </div>
  );
};

export default DetailPage;
