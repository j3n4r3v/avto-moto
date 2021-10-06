import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';

import { ReactComponent as Logo } from '../../../img/icon/logo.svg';
import { ReactComponent as LogoTextUp } from '../../../img/icon/logo-text-up.svg';
import { ReactComponent as LogoTextDown } from '../../../img/icon/logo-text-down.svg';

import './header.scss';

const Header = () => {
    return <>
        <header className="header">
            <div className="header__wrapper">
                <Link to={AppRoute.ROOT} className="header__logo">
                    <span className="visually-hidden">Логотип Avto-moto</span>
                    <Logo className="header__logo-icon" width="55" height="55" />

                    <p className="header__text">
                        <LogoTextUp className="header__text-logo" width="55" height="15" />
                        <LogoTextDown className="header__text-logo" width="47" height="12" />
                    </p>
                </Link>
                <nav className="header__main-nav main-nav">
                    <ul className="main-nav__list">
                        <li className="main-nav__item">
                            <Link to={AppRoute.CARS} className="main-nav__link">
                                <span className="main-nav__text">Автомобили</span>
                            </Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to={AppRoute.CONTACTS} className="main-nav__link">
                                <span className="main-nav__text">Контакты</span>
                            </Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to={AppRoute.SERVICES} className="main-nav__link">
                                <span className="main-nav__text">Услуги</span>
                            </Link>
                        </li>
                        <li className="main-nav__item">
                            <Link to={AppRoute.VACANCY} className="main-nav__link main-nav__link--active">
                                <span className="main-nav__text">Вакансии</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>;
};

export default Header;