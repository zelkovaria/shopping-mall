import style from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={`${style.Header} mw`}>
      <h1>
        <a href="/">
          <img className={style.logoImg} src="/img/logo.svg" alt="로고" />
        </a>
      </h1>
      <nav>
        <div className={style.gnb}>
          <a href="#">SHOP</a>
          <a href="#">BLOG</a>
          <a href="#">OUT STORY</a>
        </div>
        <div className={style.person}>
          <a href="#">
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a href="#">
            <i className="fa-solid fa-cart-shopping" />
          </a>
          <a href="#">
            <i className="fa-solid fa-user" />
          </a>
        </div>
      </nav>
      <button className={style.btn}>
        <i className="fa-solid fa-bars" />
      </button>
    </header>
  );
};

export default Header;
