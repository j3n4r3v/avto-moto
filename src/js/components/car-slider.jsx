import React from 'react';
import PropTypes from 'prop-types';

import { carDetails } from '../types/types';

const CarSlider = (props) => {
    const { carInfo, activeSlide, onLeftArrowClick, onRightArrowClick } = props;
    const { photos, photosPreview, newModel } = carInfo;

    return <>
        <div className="car-card__slider slider">
            <ul className="slider__list">
                {photos.map((photo, i) => {
                    return <li key={i} className={`slider__item ${(i === activeSlide)
                        ? `slider__item--active`
                        : ``}`}>
                        <img className="slider__image" src={photo} width="600" height="375" alt="Фото автомобиля"/>
                        {(newModel) && <p className="slider__text">New model</p>}
                    </li>;
                })}
            </ul>
            <div className="slider__controls">
                <button type="button" className="slider__button" onClick={onLeftArrowClick} disabled={activeSlide === 0}>
                    <svg width="19" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128" stroke="#48494D" />
                    </svg>
                    <span className="visually-hidden">Слайдер влево</span>
                </button>
                <ul className="slider__img-list">
                    {photosPreview.map((photo, i) => {
                        return <li key={i} className={`slider__img-item ${(i === activeSlide)
                            ? `slider__img-item--active`
                            : ``}`}>
                            <img className="slider__img" src={photo} width="128" height="80" alt="Мини фото автомобиля"/>
                        </li>;
                    })}
                </ul>
                <button type="button" className="slider__button" onClick={onRightArrowClick} disabled={activeSlide === photos.length - 1}>
                    <svg width="19" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D" />
                    </svg>
                    <span className="visually-hidden">Слайдер враво</span>
                </button>
            </div>
        </div>
    </>;
};

CarSlider.propTypes = {
    carInfo: carDetails,
    activeSlide: PropTypes.number.isRequired,
    onLeftArrowClick: PropTypes.func.isRequired,
    onRightArrowClick: PropTypes.func.isRequired,
};

export default CarSlider;
