import React, { useState } from 'react';
import { SLIDE_STEP } from '../utils/const';

const withActiveSlide = (Component) => {
    const WithActiveSlide = (props) => {
        const [activeSlide, SetActiveSlide] = useState(0);


        const handleLeftArrowClick = () => {
            SetActiveSlide(activeSlide - SLIDE_STEP);
        }

        const handleRightArrowClick = () => {
            SetActiveSlide(activeSlide + SLIDE_STEP);
        }

            return <Component
                {...props}
                activeSlide={activeSlide}
                onLeftArrowClick={handleLeftArrowClick}
                onRightArrowClick={handleRightArrowClick}
            />;

    }

    WithActiveSlide.propTypes = {};

    return WithActiveSlide;
};

export default withActiveSlide;