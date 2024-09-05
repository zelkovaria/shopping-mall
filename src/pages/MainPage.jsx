import BannerList from '../layout/BannerList';
import ProductList from '../layout/ProductList';

const MainPage = () => {
  return (
    <main className="mw">
      <h2>메인</h2>
      <BannerList />
      <ProductList />
    </main>
  );
};

export default MainPage;
