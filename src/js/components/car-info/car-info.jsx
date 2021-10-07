import React from 'react';

import './car-info.scss';

import { carDetails } from '../../types/types';
import { getNumberWithSpaces } from '../../utils/utils';

import { ReactComponent as Gas } from '../../../img/icon/gas.svg';
import { ReactComponent as Transmission } from '../../../img/icon/transmission.svg';
import { ReactComponent as HorsePower } from '../../../img/icon/horse-power.svg';
import { ReactComponent as Capacity } from '../../../img/icon/capacity.svg';

const CarInfo = (props) => {
    const { carInfo } = props;
    const { model, price, oldPrice, transmissionLow, horsePowerLow, engineVolumeLow, engineTypeLow} = carInfo;

    return <>
        <div className="car-card__car-info car-info">
            <h2 className="car-info__title">{model}</h2>
            <ul className="car-info__list">
                <li className="car-info__item">

                    <Gas width="22" height="22" />

                    <p className="car-info__text">
                        {engineTypeLow}
                    </p>
                </li>
                <li className="car-info__item">

                    <Transmission width="23" height="22" />

                    <p className="car-info__text">
                        {transmissionLow}
                    </p>
                </li>
                <li className="car-info__item">

                    <HorsePower width="30" height="21" />

                    <p className="car-info__text">
                        {horsePowerLow} л.с.
                    </p>
                </li>
                <li className="car-info__item">
                    
                    <Capacity width="30" height="22" />

                    <p className="car-info__text">
                        {engineVolumeLow} л.
                    </p>
                </li>
            </ul>
            <p className="car-info__price">
                <span> {getNumberWithSpaces(price)} &#8381;</span>
                <span className="car-info__old-price"> {getNumberWithSpaces(oldPrice)} &#8381;</span>
            </p>
            <div className="car-info__links">
                <a href="/" className="car-info__link car-info__link--buy">
                    Оставить заявку
                </a>
                <a href="/" className="car-info__link car-info__link--credit">
                    В кредит от 11 000 &#8381;
                </a>
            </div>
        </div>
    </>;
};

CarInfo.propTypes = {
    carInfo: carDetails,
};

export default CarInfo;
