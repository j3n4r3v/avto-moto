import React, { PureComponent } from 'react';

const withActivePopup = (Component) => {
    class WithActivePopup extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                isActive: false,
            };
            this.handleActivePopupChange = this.handleActivePopupChange.bind(this);
        }

        handleActivePopupChange() {
            this.setState({
                isActive: !this.state.isActive,
            });
        }

        render() {
            const { isActive } = this.state;

            return <Component
                {...this.props}
                isActive={isActive}
                onActivePopupChange={this.handleActivePopupChange}
            />;
        }
    }

    WithActivePopup.propTypes = {};

    return WithActivePopup;
};

export default withActivePopup;