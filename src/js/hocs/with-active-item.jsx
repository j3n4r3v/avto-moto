import React, { useState } from 'react';

const withActiveItem = (Component) => {
    const WithActiveItem = (props) => {
        const [activeItem, SetActiveItem] = useState(0);

        const handleActiveItemChange = (i) => {
            SetActiveItem(i);
        }

            return <Component
                {...props}
                activeItem={activeItem}
                onActiveItemChange={handleActiveItemChange}
            />;
    }

    WithActiveItem.propTypes = {};

    return WithActiveItem;
};

export default withActiveItem;