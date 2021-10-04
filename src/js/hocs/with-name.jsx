import React, { PureComponent } from 'react';
import { ValidStatus } from '../utils/const';

const withName = (Component) => {
    class WithName extends PureComponent {
        constructor(props) {
            super(props);

            this.state = {
                author: ``,
                validAuthor: ValidStatus.VALID,
            };

            this._handleNameInput = this._handleNameInput.bind(this);
            this._handleValidNameCheck = this._handleValidNameCheck.bind(this);
        }

        _handleNameInput(evt) {
            this.setState({
                author: evt.target.value,
            });
            if (evt.target.value) {
                this.setState({
                    validAuthor: ValidStatus.VALID
                });
            } else {
                this.setState({
                    validAuthor: ValidStatus.INVALID,
                });
            }
        }

        _handleValidNameCheck(status) {
            this.setState({
                validAuthor: status
            });
        }

        render() {
            const { author, validAuthor } = this.state;

            return <Component
                {...this.props}
                author={author}
                validAuthor={validAuthor}
                onNameInput={this._handleNameInput}
                onNameValidCkeck={this._handleValidNameCheck}
            />;
        }
    }

    WithName.propTypes = {};

    return WithName;
};

export default withName;