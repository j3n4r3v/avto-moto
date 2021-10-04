import React, { PureComponent } from 'react';
import { SLIDE_STEP } from '../utils/const';

const withActiveSlide = (Component) => {
    class WithActiveSlide extends PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                activeSlide: 0,
            };

            this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
            this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
        }

        handleLeftArrowClick() {
            this.setState({
                activeSlide: this.state.activeSlide - SLIDE_STEP,
            });
        }

        handleRightArrowClick() {
            this.setState({
                activeSlide: this.state.activeSlide + SLIDE_STEP,
            });
        }

        render() {
            const { activeSlide } = this.state;

            return <Component
                {...this.props}
                activeSlide={activeSlide}
                onLeftArrowClick={this.handleLeftArrowClick}
                onRightArrowClick={this.handleRightArrowClick}
            />;
        }
    }

    WithActiveSlide.propTypes = {};

    return WithActiveSlide;
};

export default withActiveSlide;