import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  console.log(products?.title);

  return (
    <div className="mw">
      <h2>Detail Page</h2>
    </div>
  );
};

export default DetailPage;
