import React from 'react';
import { Link } from 'react-router-dom';

import { reviewStars } from '../utils/const';

import { reviewsDetails } from '../types/types';
import Popup from './popup';

import withName from '../hocs/with-name';
import withRating from '../hocs/with-rating';
import withText from '../hocs/with-text';

import { ReactComponent as Plus } from '../../img/icon/plus.svg';
import { ReactComponent as Minus } from '../../img/icon/minus.svg';
import { ReactComponent as Star } from '../../img/icon/star.svg';

import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment/locale/ru';
moment.locale(`ru`);



const PopupWrapped = withName(withRating(withText(Popup)));

const ReviewsBlock = (props) => {
    const { reviews, isActive, onActivePopupChange } = props;
    return <>
        <ul className="car-card__reviews-list">
            {reviews.map((review, i) => {
                const { author, dignity, limitations, comment, rating, date } = review;

                return <li key={review+i} className="car-card__reviews-item">
                    <blockquote className="car-card__reviews-article review">
                        <h3 className="review__author">{author}</h3>
                        <ul className="review__list">
                            <li className="review__item">
                                <p className="review__title">

                                    <Plus  className="review__icon" width="8" height="8" />

                                    Достоинства
                                </p>
                                <p className="review__text">
                                    {dignity}
                                </p>
                            </li>
                            <li className="review__item">
                                <p className="review__title">

                                    <Minus className="review__icon review__icon--minus" width="7" height="2" />

                                    Недостатки
                                </p>
                                <p className="review__text">
                                    {limitations}
                                </p>
                            </li>
                            <li className="review__item">
                                <p className="review__comment-title">
                                    Комментарий
                                </p>
                                <p className="review__text-comment">
                                    {comment}
                                </p>
                            </li>
                        </ul>
                        <div className="review__rating">
                            <ul className="review__stars-list">
                                {reviewStars.map((star, i) => {
                                    return <li key={star+i} className={`review__stars-item ${(star <= rating)
                                        ? `review__stars-item--fill`
                                        : ``}`}>
                                        
                                        <Star className="review__star-icon" width="17" height="16" />

                                    </li>;
                                })}
                            </ul>
                            <p className="review__rating-advice">Советует</p>
                        </div>
                        <div className="review__reply">
                            <p className="review__date">{moment(date).fromNow()}</p>
                            <Link to="#" className="review__button-reply">Ответить</Link>
                        </div>
                    </blockquote>
                </li>;
            })}
        </ul>
        <button className="car-card__review-button" type="button" onClick={(evt) => {
            evt.preventDefault();
            onActivePopupChange();
        }}>
            Оставить отзыв
        </button>
        {isActive && <PopupWrapped onActivePopupChange={onActivePopupChange} />}
    </>;
};

ReviewsBlock.propTypes = {
    reviews: PropTypes.arrayOf(reviewsDetails),
    isActive: PropTypes.bool,
    onActivePopupChange: PropTypes.func.isRequired,
};

export default ReviewsBlock;
