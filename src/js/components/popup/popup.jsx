import React, {Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ActionCreator as ReviewCreator } from '../../store/reviews/reviews';

import { getRandomNumber, setItem } from '../../utils/utils';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { ValidStatus, stars } from '../../utils/const';

import { ReactComponent as Cross } from '../../../img/icon/cross.svg';

import './popup.scss';

const Popup = (props) => {

const {
    author,
    validAuthor,
    comment,
    validComment,
    onActivePopupChange,
    onRatingChange,
    onNameInput,
    onCommentInput,
    onDignityInput,
    onLimitationsInput,
} = props;

    useEffect(() => {
        disablePageScroll();

        return enablePageScroll;
    }, [])

    
   const handleEscButtonClose = (evt) => {
        const { onActivePopupChange } = props;
        if (evt.keyCode === 27) {
            onActivePopupChange();
        }
    }

    const handleSubmit = (evt) => {
        const {
            author,
            validAuthor,
            rating,
            comment,
            validComment,
            dignity,
            limitations,
            onSubmit,
            onActivePopupChange,
            onValidNameCheck,
            onValidCommentCheck,
        } = props;

        evt.preventDefault();

        if (!validAuthor || !author) {
            evt.preventDefault();
            onValidNameCheck(ValidStatus.INVALID);
            return;
        }

        if (!validComment || !comment) {
            evt.preventDefault();
            onValidCommentCheck(ValidStatus.INVALID);
            return;
        }

        onSubmit({
            id: getRandomNumber(),
            author,
            rating: Number(rating),
            comment,
            dignity,
            limitations,
            date: new Date().toUTCString(),
        });

        setItem(`author`, author);
        setItem(`rating`, Number(rating));
        setItem(`comment`, comment);
        setItem(`dignity`, dignity);
        setItem(`limitations`, limitations);
        setItem(`date`, new Date().toUTCString());

        onActivePopupChange();
    }

        return <>
            <section className="popup" onKeyDown={handleEscButtonClose}>
                <h2 className="popup__title">Оставить отзыв</h2>
                <form action="#" className="popup-form review-form" onSubmit={handleSubmit}>
                    <div className="review-form__wrapper">
                        <div className="review-form__col">
                            <ul className="review-form__left-list">
                                <li className="review-form__left-item">
                                    {!validAuthor && <p className="review-form__text">Пожалуйста, заполните поле</p>}
                                    {!author && <label className="review-form__label" htmlFor="name">*</label>}
                                    <input className="review-form__input" id="name" type="text" name="name" placeholder="Имя" autoFocus
                                        onChange={(evt) => {
                                            onNameInput(evt);
                                        }}
                                    />
                                </li>
                                <li className="review-form__left-item">
                                    <input className="review-form__input" id="dignity" type="text" name="dignity" placeholder="Достоинства"
                                        onChange={(evt) => {
                                            onDignityInput(evt);
                                        }}
                                    />
                                </li>
                                <li className="review-form__left-item">
                                    <input className="review-form__input" id="limitations" type="text" name="limitations" placeholder="Недостатки"
                                        onChange={(evt) => {
                                            onLimitationsInput(evt);
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="review-form__col">
                            <div className="review-form__rating rating">
                                {stars.map((star, i) => {
                                    return <Fragment key={star + i}>
                                        <input className="rating__input" id={`star-${star}`} type="radio" name="rating" value={star}
                                            onChange={(evt) => {
                                                onRatingChange(evt);
                                            }}
                                        />
                                        <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
                                    </Fragment>;
                                })}
                                <p className="rating__text">Оцените товар:</p>
                            </div>
                            <div className="review-form__comment">
                                {!validComment && <p className="review-form__text review-form__text--textarea">Пожалуйста, заполните поле</p>}
                                {!comment && <label className="review-form__label review-form__label--textarea" htmlFor="review-text">*</label>}
                                <textarea className="review-form__textarea" name="review-text" id="review-text" placeholder="Комментарий"
                                    onChange={(evt) => {
                                        onCommentInput(evt);
                                    }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="review-form__submit">
                        <button className="review-form__button" type="submit">Оставить отзыв</button>
                    </div>
                    <div className="review-form__close">
                        <button className="review-form__button-close" type="button" onClick={(evt) => {
                            evt.preventDefault();
                            onActivePopupChange();
                        }}>

                            <Cross className="review-form__close-icon" width="15" height="16" />

                        </button>
                    </div>
                </form>
            </section>
            <div className="popup__bg-layer" onClick={() => {
                onActivePopupChange();
            }}></div>
        </>;
    }

Popup.propTypes = {
    onActivePopupChange: PropTypes.func.isRequired,
    onRatingChange: PropTypes.func.isRequired,
    onNameInput: PropTypes.func.isRequired,
    onCommentInput: PropTypes.func.isRequired,
    onDignityInput: PropTypes.func.isRequired,
    onLimitationsInput: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired,
    validAuthor: PropTypes.bool.isRequired,
    dignity: PropTypes.string.isRequired,
    limitations: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    validComment: PropTypes.bool.isRequired,
    rating: PropTypes.string.isRequired,
    onValidNameCheck: PropTypes.func.isRequired,
    onValidCommentCheck: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit(review) {
        dispatch(ReviewCreator.addReview(review));
    },
});

export default connect(null, mapDispatchToProps)(Popup);
