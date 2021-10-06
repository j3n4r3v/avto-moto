import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CarInfo from './car-info';
import CarSlider from './car-slider';
import Tabs from './tabs';
import Tab from './tab';
import DetailsBlock from './details-block';
import ReviewsBlock from './reviews-block';
import ContactsBlock from './contacts-block';

import { getActiveCar } from '../store/cars/selector';
import { getReviews } from '../store/reviews/selector';

import { reviewsDetails, carDetails } from '../types/types';

import withActivePopup from '../hocs/with-active-popup';
import withActiveSlide from '../hocs/with-active-slide';
import withActiveItem from '../hocs/with-active-item';

import { TabName } from '../utils/const'

const TabsWrapped = withActiveItem(Tabs);
const CarSliderWrapped = withActiveSlide(CarSlider);
const ReviewsBlockWrapped = withActivePopup(ReviewsBlock);

const CarCard = (props) => {
    const { carInfo, reviews } = props;

    return <>
        <section className="car-card">
            <div className="car-card__wrapper">

                <CarSliderWrapped carInfo={carInfo} />

                <CarInfo carInfo={carInfo} />

            </div>

            <TabsWrapped>
                <Tab title={TabName.DETAILS}>
                    <DetailsBlock carInfo={carInfo} />
                </Tab>
                <Tab title={TabName.REVIEWS}>
                    <ReviewsBlockWrapped reviews={reviews} />
                </Tab>
                <Tab title={TabName.CONTACTS}>
                    <ContactsBlock />
                </Tab>
            </TabsWrapped>

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