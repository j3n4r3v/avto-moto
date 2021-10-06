import React, { useState } from 'react';

const withActivePopup = (Component) => {
    const WithActivePopup = (props) => {
        const [data, SetData] = useState(false);

        const handleActivePopupChange = () => {
            SetData(!data);
        }

        return <Component
            {...props}
            isActive={data}
            onActivePopupChange={handleActivePopupChange}
        />;
    }

    WithActivePopup.propTypes = {};

    return WithActivePopup;
};

export default withActivePopup;