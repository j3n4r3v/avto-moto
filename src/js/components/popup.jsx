import React, {Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../styles/blocks/popup.scss';

import { ActionCreator as ReviewCreator } from '../store/reviews/reviews';

import { randomNumber, setItem } from '../utils/utils';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { ValidStatus } from '../utils/const';

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const stars = [`5`, `4`, `3`, `2`, `1`];

class Popup extends PureComponent {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEscButtonClose = this.handleEscButtonClose.bind(this);
    }

    handleEscButtonClose(evt) {
        const { onActivePopupChange } = this.props;
        if (evt.keyCode === 27) {
            onActivePopupChange();
        }
    }

    handleSubmit(evt) {
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
            onCheckValidName,
            onValidCommentCheck,
        } = this.props;

        evt.preventDefault();

        if (!validAuthor || !author) {
            onCheckValidName(ValidStatus.INVALID);
            return;
        }

        if (!validComment || !comment) {
            onValidCommentCheck(ValidStatus.INVALID);
            return;
        }

        onSubmit({
            id: randomNumber(),
            author,
            rating: Number(rating),
            comment,
            dignity,
            limitations,
            date: dayjs().fromNow(),
        });

        setItem(`author`, author);
        setItem(`rating`, Number(rating));
        setItem(`comment`, comment);
        setItem(`dignity`, dignity);
        setItem(`limitations`, limitations);
        setItem(`date`, dayjs().fromNow());

        onActivePopupChange();
    }

    componentDidMount() {
        disablePageScroll();
    }

    componentWillUnmount() {
        enablePageScroll();
    }

    render() {
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
        } = this.props;

        return <>
            <section className="popup" onKeyDown={this.handleEscButtonClose}>
                <h2 className="popup__title">Оставить отзыв</h2>
                <form action="#" className="popup-form review-form" onSubmit={this.handleSubmit}>
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
                                {stars.map((star) => {
                                    return <Fragment key={star}>
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
                            <svg className="review-form__close-icon" width="15" height="16" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.6399 15.0096L7.50482 8.86495L1.36977 15.0096L0 13.6399L6.14469 7.50482L0 1.36978L1.36977 0L7.50482 6.14469L13.6399 0.00964652L15 1.36978L8.86495 7.50482L15 13.6399L13.6399 15.0096Z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </section>
            <div className="popup__bg-layer" onClick={() => {
                onActivePopupChange();
            }}></div>
        </>;
    }
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
    onNameValidCkeck: PropTypes.func.isRequired,
    onValidCommentCheck: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit(review) {
        dispatch(ReviewCreator.addReview(review));
    },
});

export default connect(null, mapDispatchToProps)(Popup);
