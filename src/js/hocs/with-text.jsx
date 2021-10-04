import React, { PureComponent } from 'react';
import { ValidStatus } from '../utils/const';

const withText = (Component) => {
    class WithText extends PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                comment: ``,
                dignity: ``,
                limitations: ``,
                validComment: ValidStatus.VALID,
            };

            this._handleCommentInput = this._handleCommentInput.bind(this);
            this._handleDignityInput = this._handleDignityInput.bind(this);
            this._handleLimitationsInput = this._handleLimitationsInput.bind(this);
            this._handleValidCommentCheck = this._handleValidCommentCheck.bind(this);
        }

        _handleCommentInput(evt) {
            this.setState({
                comment: evt.target.value,
            });
            if (evt.target.value) {
                this.setState({
                    validComment: ValidStatus.VALID
                });
            } else {
                this.setState({
                    validComment: ValidStatus.INVALID,
                });
            }
        }

        _handleDignityInput(evt) {
            this.setState({
                dignity: evt.target.value,
            });
        }

        _handleLimitationsInput(evt) {
            this.setState({
                limitations: evt.target.value,
            });
        }

        _handleValidCommentCheck(status) {
            this.setState({
                validComment: status
            });
        }

        render() {
            const { comment, dignity, limitations, validComment } = this.state;

            return <Component
                {...this.props}
                comment={comment}
                dignity={dignity}
                limitations={limitations}
                validComment={validComment}
                onCommentInput={this._handleCommentInput}
                onDignityInput={this._handleDignityInput}
                onLimitationsInput={this._handleLimitationsInput}
                onValidCommentCheck={this._handleValidCommentCheck}
            />;
        }
    }

    WithText.propTypes = {};

    return WithText;
};

export default withText;