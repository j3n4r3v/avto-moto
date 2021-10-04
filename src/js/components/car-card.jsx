import React from 'react';
import PropTypes from 'prop-types';

import CarInfo from './car-info';
import CarSlider from './car-slider';
import Tabs from './tabs';
import Tab from './tab';
import DetailsBlock from './details-block';
import ReviewsBlock from './reviews-block';
import ContactsBlock from './contacts-block';

import { connect } from 'react-redux';

import { getActiveCar } from '../store/cars/selector';
import { getReviews } from '../store/reviews/selector';

import { reviewsDetails, carDetails} from '../types/types';

const TabNames = {
    DETAILS: `Характеристики`,
    REVIEWS: `Отзывы`,
    CONTACTS: `Контакты`,
};

const CarCard = (props) => {
    const { carInfo, reviews } = props;

    return <>
        <section className="car-card">
            <div className="car-card__wrapper">

                <CarSlider carInfo={carInfo} />

                <CarInfo carInfo={carInfo} />

            </div>

            <Tabs>
                <Tab title={TabNames.DETAILS}>
                    <DetailsBlock carInfo={carInfo} />
                </Tab>
                <Tab title={TabNames.REVIEWS}>
                    <ReviewsBlock reviews={reviews} />
                </Tab>
                <Tab title={TabNames.CONTACTS}>
                    <ContactsBlock />
                </Tab>
            </Tabs>

        </section>
    </>;
};

CarCard.propTypes = {
    carInfo: carDetails,
    reviews: PropTypes.arrayOf(reviewsDetails)
};

const mapStateToProps = (state) => ({
    carInfo: getActiveCar(state),
    reviews: getReviews(state),
});

export default connect(mapStateToProps)(CarCard);