import { useEffect, useState } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import OurPage from './pages/OurPage';

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      // let url = `http://localhost:8000/products`;
      let url = `http://localhost:8000/products?_page=1&_per_page=6&category=new`;
      let res = await fetch(url);
      let data = await res.json();

      // setProducts(data);
      setProducts(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage products={products} />} />
        <Route path="/shop" element={<ShopPage products={products} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/our" element={<OurPage />}>
          <Route path="ceo" element={'ceo'} />
          <Route path="history" element={'history'} />
          <Route path="org" element={'org'} />
        </Route>
        <Route path="/search" element="검색페이지" />
        <Route path="/cart" element="장바구니" />
        <Route path="/mypage" element="마이페이지" />
        <Route
          path="*"
          element={
            <section
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              내용 없음
            </section>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
