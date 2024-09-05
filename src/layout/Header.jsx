const Header = () => {
  return (
    <header>
      <h1>
        <a href="/">
          <img src="/img/logo.svg" alt="로고" />
        </a>
      </h1>
      <nav>
        <div>
          <a href="#">SHOP</a>
          <a href="#">BLOG</a>
          <a href="#">OUT STORY</a>
        </div>
        <div>
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
      <button>
        <i className="fa-solid fa-bars" />
      </button>
    </header>
  );
};

export default Header;
