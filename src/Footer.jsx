function Footer() {
    return (
        <footer className="footer">
            {/* Верхня частина футера з колонками */}
            <div className="footer-top">
                <div className="footer-brand">
                    <h3>Optimeter</h3>
                    <p>
                        Сучасні системи розумного обліку води, газу та електроенергії. 
                        Автоматична передача показників без зайвих турбот.
                    </p>
                </div>

                <div className="footer-nav">
                    <h4>Розділи</h4>
                    <ul>
                        <li><a href="#home">Головна</a></li>
                        <li><a href="#catalog">Каталог</a></li>
                        <li><a href="#cart">Кошик</a></li>
                    </ul>
                </div>

                <div className="footer-contacts">
                    <h4>Контакти</h4>
                    <p>м. Львів, вул. Степана Бандери, 30</p>
                    <p>Email: support@optimeter.ua</p>
                    <p>Тел: +38 (xxx) xxx-xx-xx</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 Optimeter IoT Systems. Усі права захищено.</p>
            </div>
        </footer>
    );
}

export default Footer;