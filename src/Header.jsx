function Header() {
    return (
        <header className="header">
            <h1 className="shopcaption">
                <div className="logo">O</div>
                <div className="brand-text">
                    <h1 className="brand-title">Optimeter</h1>
                    <small className="text-small">Магазин зчитувань показників лічильників</small>
                </div>
            </h1>
            <nav>
                <ul className="navmenu">
                    <li className="navmenu-item"><a href="">Головна</a></li>
                    <li className="navmenu-item"><a href="">Каталог</a></li>
                    <li className="navmenu-item"><a href="">Кошик</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;