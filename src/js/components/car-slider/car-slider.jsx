import React from 'react';
import PropTypes from 'prop-types';

import './car-slider.scss';

import { carDetails } from '../../types/types';

import { ReactComponent as ArrowRight } from '../../../img/icon/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../img/icon/arrow-left.svg';

const CarSlider = (props) => {
    const { carInfo, activeSlide, onLeftArrowClick, onRightArrowClick } = props;
    const { photos, photosPreview, newModel } = carInfo;

    return <>
        <div className="car-card__slider slider">
            <ul className="slider__list">
                {photos.map((photo, i) => {
                    return <li key={photo+i} className={`slider__item ${(i === activeSlide) ? `slider__item--active` : ``}`}>
                        <img className="slider__image" src={photo} width="600" height="375" alt="Фото автомобиля"/>
                        {(newModel) && <p className="slider__text">New model</p>}
                    </li>;
                })}
            </ul>
            <div className="slider__controls">
                <button type="button" className="slider__button" onClick={onLeftArrowClick} disabled={activeSlide === 0}>

                    <ArrowLeft width="19" height="13" />

                    <span className="visually-hidden">Слайдер влево</span>
                </button>
                <ul className="slider__img-list">
                    {photosPreview.map((photo, index) => {
                        return <li key={photo+index} className={`slider__img-item ${(index === activeSlide)
                            ? `slider__img-item--active`
                            : ``}`}>
                            <img className="slider__img" src={photo} width="128" height="80" alt="Мини фото автомобиля"></img>
                        </li>;
                    })}
                </ul>
                <button type="button" className="slider__button" onClick={onRightArrowClick} disabled={activeSlide === photos.length - 1}>

                    <ArrowRight width="19" height="13" />

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
