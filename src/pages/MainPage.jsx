import BannerList from '../layout/BannerList';
import ProductList from '../layout/ProductList';

const MainPage = ({ products }) => {
  return (
    <main className="mw">
      <h2>메인</h2>
      <BannerList />
      <ProductList products={products} />
    </main>
  );
};

export default MainPage;
