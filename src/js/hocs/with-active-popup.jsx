import React, { useState } from 'react';

const withActivePopup = (Component) => {
    const WithActivePopup = (props) => {
        const [isActive, SetisActive] = useState(false);

        const handleActivePopupChange = () => {
            SetisActive(!isActive);
        }

        return <Component
            {...props}
            isActive={isActive}
            onActivePopupChange={handleActivePopupChange}
        />;
    }

    WithActivePopup.propTypes = {};

    return WithActivePopup;
};

export default withActivePopup;