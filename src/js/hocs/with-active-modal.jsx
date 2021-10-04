import React, { PureComponent } from 'react';

const withActiveModal = (Component) => {
    class WithActiveModal extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                isActive: false,
            };
            this.handleActiveModalChange = this.handleActiveModalChange.bind(this);
        }

        handleActiveModalChange() {
            this.setState({
                isActive: !this.state.isActive,
            });
        }

        render() {
            const { isActive } = this.state;

            return <Component
                {...this.props}
                isActive={isActive}
                onActiveModalChange={this.handleActiveModalChange}
            />;
        }
    }

    WithActiveModal.propTypes = {};

    return WithActiveModal;
};

export default withActiveModal;