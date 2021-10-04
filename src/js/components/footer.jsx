import React from 'react';

const Footer = () => {
    return <>
        <footer className="page-footer">
            <nav className="page-footer__footer-nav footer-nav">
                <ul className="footer-nav__list">
                    <li className="footer-nav__item">
                        <a href="#"className="footer-nav__link">
                            <span className="footer-nav__text">Корпоративным клиентам</span>
                        </a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#" className="footer-nav__link">
                            <span className="footer-nav__text">Клиентам</span>
                        </a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#" className="footer-nav__link">
                            <span className="footer-nav__text">Аренда авто</span>
                        </a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#" className="footer-nav__link">
                            <span className="footer-nav__text">Каршеринг</span>
                        </a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#" className="footer-nav__link">
                            <span className="footer-nav__text">Как продать авто</span>
                        </a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#" className="footer-nav__link">
                            <span className="footer-nav__text">Trade-in</span>
                        </a>
                    </li>
                    <li className="footer-nav__item">
                        <a href="#" className="footer-nav__link">
                            <span className="footer-nav__text">Test-drive</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    </>;
};

export default Footer;