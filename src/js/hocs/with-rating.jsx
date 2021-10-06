import React, { useState } from 'react';

const withRating = (Component) => {
    const WithRating = (props) => {

        const [data, setData] = useState({
            rating: ``,
        });

        const _handleRatingChange = (evt) => {
            setData({
                ...data,
                rating: evt.target.value,
            });
        }

            const { rating } = data;

            return <Component
                {...props}
                rating={rating}
                onRatingChange={_handleRatingChange}
            />;
    }

    WithRating.propTypes = {};

    return WithRating;
};

export default withRating;