import { useEffect, useState } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import MainPage from './pages/MainPage';

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
      <MainPage products={products} />
      <Footer />
    </div>
  );
}

export default App;
