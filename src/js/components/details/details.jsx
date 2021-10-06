import React from 'react';
import { carDetails } from '../../types/types';

import './details.scss';

const Details = (props) => {
    const { carInfo } = props;
    const { transmission, horsePower, engineType, engineVolume, driveUnit, cylindersNumber, maxTorque } = carInfo;

    return <ul className="car-card__details details">
        <li className="details__item">
            <p className="details__name">Трансмиссия</p>
            <p className="details__value">{transmission}</p>
        </li>
        <li className="details__item">
            <p className="details__name">Мощность двигателя, л.с.</p>
            <p className="details__value">{horsePower}</p>
        </li>
        <li className="details__item">
            <p className="details__name">Тип двигателя</p>
            <p className="details__value">{engineType}</p>
        </li>
        <li className="details__item">
            <p className="details__name">Привод</p>
            <p className="details__value">{driveUnit}</p>
        </li>
        <li className="details__item">
            <p className="details__name">Объем двигателя, л.</p>
            <p className="details__value">{engineVolume}</p>
        </li>
        <li className="details__item">
            <p className="details__name">Макс. крутящий момент</p>
            <p className="details__value">{maxTorque}</p>
        </li>
        <li className="details__item">
            <p className="details__name">Количество цилиндров</p>
            <p className="details__value">{cylindersNumber}</p>
        </li>
    </ul>;
};

Details.propTypes = {
    carInfo: carDetails,
};

export default Details;