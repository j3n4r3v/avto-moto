import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './car-card.scss';

import CarInfo from '../car-info/car-info';
import CarSlider from '../car-slider/car-slider';
import Tabs from '../tabs/tabs';
import Tab from '../tab/tab';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

import { getActiveCar } from '../../store/cars/selector';
import { getReviews } from '../../store/reviews/selector';

import { reviewsDetails, carDetails } from '../../types/types';

import withActivePopup from '../../hocs/with-active-popup';
import withActiveSlide from '../../hocs/with-active-slide';
import withActiveItem from '../../hocs/with-active-item';

import { TabName } from '../../utils/const'

const TabsWrapped = withActiveItem(Tabs);
const CarSliderWrapped = withActiveSlide(CarSlider);
const ReviewsWrapped = withActivePopup(Reviews);

const CarCard = (props) => {
    const { carInfo, reviews } = props;

    return <>
        <main className="main">
            <div className="main__wrapper">
                <h1 className="visually-hidden">Карточка автомобиля</h1>

        <section className="car-card">
            <div className="car-card__wrapper">

                <CarSliderWrapped carInfo={carInfo} />

                <CarInfo carInfo={carInfo} />

            </div>

            <TabsWrapped>
                <Tab title={TabName.DETAILS}>
                    <Details carInfo={carInfo} />
                </Tab>
                <Tab title={TabName.REVIEWS}>
                    <ReviewsWrapped reviews={reviews} />
                </Tab>
                <Tab title={TabName.CONTACTS}>
                    <Contacts />
                </Tab>
            </TabsWrapped>

                </section>
            </div>
        </main>
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