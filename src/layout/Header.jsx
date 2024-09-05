import { Link } from 'react-router-dom';
import style from '../css/Header.module.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    const newIsMobile = window.innerWidth < 800;
    setIsMobile(newIsMobile);
    if (!newIsMobile) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`${style.Header} mw`}>
      <h1>
        <Link to="/">
          <img className={style.logoImg} src="/img/logo.svg" alt="로고" />
        </Link>
      </h1>
      <nav className={`${isMenuOpen ? style.on : ''}`}>
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
      <button className={style.btn} onClick={toggleMenu}>
        <i className="fa-solid fa-bars" />
      </button>
    </header>
  );
};

export default Header;
