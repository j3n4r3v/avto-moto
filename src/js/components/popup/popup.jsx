import React, {Fragment, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ActionCreator as ReviewCreator } from '../../store/reviews/reviews';
import { Keydown} from "../../utils/const"
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

    const topTabTrap = useRef();
    const bottomTabTrap = useRef();
    const firstFocusableElement = useRef();
    const lastFocusableElement = useRef();

    useEffect(() => {
        document.addEventListener('focusin', trapFocus)

        return () => document.removeEventListener('focusin', trapFocus)
        function trapFocus(event) {
            if (event.target === topTabTrap.current) {
                lastFocusableElement.current.focus()
            }
            if (event.target === bottomTabTrap.current) {
                firstFocusableElement.current.focus()
            }
        }
    }, [firstFocusableElement, lastFocusableElement])

   const handleEscButtonClose = (evt) => {
        const { onActivePopupChange } = props;
       if (evt.key === Keydown.ESC || evt.key === Keydown.ESCAPE) {
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
                <h2 className="popup__title">???????????????? ??????????</h2>
                    <form action="#" className="popup-form review-form" onSubmit={handleSubmit}>
                    <div className="review-form__wrapper">
                        <div className="review-form__col">
                            <ul className="review-form__left-list">
                                <li className="review-form__left-item">
                                    <span ref={topTabTrap} tabIndex="0" />
                                    {!validAuthor && <p className="review-form__text">????????????????????, ?????????????????? ????????</p>}
                                    {!author && <span className="review-form__label" htmlFor="name">*</span>}
                                    <input className="review-form__input" ref={firstFocusableElement} id="name" type="text" name="name" placeholder="??????" autoFocus
                                        onChange={(evt) => {
                                            onNameInput(evt);
                                        }}
                                    />
                                    <label className="visually-hidden" htmlFor="name">??????</label>
                                </li>
                                <li className="review-form__left-item">
                                    <input className="review-form__input" id="dignity" type="text" name="dignity" placeholder="??????????????????????"
                                        onChange={(evt) => {
                                            onDignityInput(evt);
                                        }}
                                    />
                                    <label className="visually-hidden" htmlFor="dignity">??????????????????????</label>
                                </li>
                                <li className="review-form__left-item">
                                    <input className="review-form__input" id="limitations" type="text" name="limitations" placeholder="????????????????????"
                                        onChange={(evt) => {
                                            onLimitationsInput(evt);
                                        }}
                                    />
                                    <label className="visually-hidden" htmlFor="limitations">????????????????????</label>
                                </li>
                            </ul>
                        </div>
                        <div className="review-form__col">
                            <div className="review-form__stars">
                                <p className="rating__text">?????????????? ??????????:</p>
                            <div className="review-form__group rating">
                                {stars.map((star, i) => {
                                    return <Fragment key={star + i}>
                                        <input className="rating__star" id={`star-${star}`} type="radio" name="rating" value={star}
                                            onChange={(evt) => {
                                                onRatingChange(evt);
                                            }}
                                        />
                                        <label className="rating__label" htmlFor={`star-${star}`}></label>
                                    </Fragment>;
                                })}
                                </div>
                            </div>
                            <div className="review-form__comment">
                                {!validComment && <p className="review-form__text review-form__text--textarea">????????????????????, ?????????????????? ????????</p>}
                                {!comment && <label className="review-form__label review-form__label--textarea" htmlFor="review-text">*</label>}
                                <textarea className="review-form__textarea" name="review-text" id="review-text" placeholder="??????????????????????"
                                    onChange={(evt) => {
                                        onCommentInput(evt);
                                    }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="review-form__submit">
                        <button className="review-form__button" type="submit">???????????????? ??????????</button>
                    </div>
                    <div className="review-form__close">
                        <button className="review-form__button-close" ref={lastFocusableElement} type="button" onClick={(evt) => {
                            evt.preventDefault();
                            onActivePopupChange();
                        }}>

                            <Cross className="review-form__close-icon" width="15" height="16" />

                        </button>
                    </div>
                </form>
                <span ref={bottomTabTrap} tabIndex="0"/>
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
