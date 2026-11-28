import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const totalCount = useSelector((state) =>
        state.items.reduce((sum, item) => sum + item.quantity, 0)
    );

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
                    <li className="navmenu-item"><Link to="/">Головна</Link></li>
                    <li className="navmenu-item"><Link to="/catalog">Каталог</Link></li>
                    <li className="navmenu-item">
                        <Link to="/cart">
                            Кошик{totalCount > 0 ? ` (${totalCount})` : ''}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;