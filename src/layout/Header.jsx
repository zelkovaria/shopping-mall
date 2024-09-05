import { Link } from 'react-router-dom';
import style from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={`${style.Header} mw`}>
      <h1>
        <Link to="/">
          <img className={style.logoImg} src="/img/logo.svg" alt="로고" />
        </Link>
      </h1>
      <nav>
        <div className={style.gnb}>
          <Link to="/shop">SHOP</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/our">OUT STORY</Link>
        </div>
        <div className={style.person}>
          <Link to="/search">
            <i className="fa-solid fa-magnifying-glass" />
          </Link>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping" />
          </Link>
          <Link to="/mypage">
            <i className="fa-solid fa-user" />
          </Link>
        </div>
      </nav>
      <button className={style.btn}>
        <i className="fa-solid fa-bars" />
      </button>
    </header>
  );
};

export default Header;
