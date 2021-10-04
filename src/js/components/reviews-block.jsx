import React from 'react';
import { Link } from 'react-router-dom';

import { reviewsDetails } from '../types/types';
import Popup from './popup';

import withName from '../hocs/with-name';
import withRating from '../hocs/with-rating';
import withText from '../hocs/with-text';

import PropTypes from 'prop-types';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const reviewStars = [1, 2, 3, 4, 5];

const PopupWrapped = withName(withRating(withText(Popup)));

const ReviewsBlock = (props) => {
    const { reviews, isActive, onActivePopupChange } = props;
    return <>
        <ul className="car-card__reviews-list">
            {reviews.map((review, i) => {
                const { author, dignity, limitations, comment, rating, date } = review;
                return <li key={i} className="car-card__reviews-item">
                    <blockquote className="car-card__reviews-article review">
                        <h3 className="review__author">{author}</h3>
                        <ul className="review__list">
                            <li className="review__item">
                                <p className="review__title">
                                    <svg className="review__icon" width="8" height="8" viewBox="0 0 8 8">
                                        <use xlinkHref="#plus"></use>
                                    </svg>
                                    Достоинства
                                </p>
                                <p className="review__text">
                                    {dignity}
                                </p>
                            </li>
                            <li className="review__item">
                                <p className="review__title">
                                    <svg className="review__icon review__icon--minus" width="7" height="2" viewBox="0 0 7 2" >
                                        <use xlinkHref="#minus"></use>
                                    </svg>
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
                                    return <li key={i} className={`review__stars-item ${(star <= rating)
                                        ? `review__stars-item--fill`
                                        : ``}`}>
                                        <svg className="review__star-icon" width="17" height="16" viewBox="0 0 17 16">
                                            <use xlinkHref="#star"></use>
                                        </svg>
                                    </li>;
                                })}
                            </ul>
                            <p className="review__rating-advice">Советует</p>
                        </div>
                        <div className="review__reply">
                            <p className="review__date">{dayjs(date).fromNow()}</p>
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
    isActive: PropTypes.bool.isRequired,
    onActivePopupChange: PropTypes.func.isRequired,
};

export default ReviewsBlock;
