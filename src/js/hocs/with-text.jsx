import React, { useState } from 'react';
import { ValidStatus } from '../utils/const';

const withText = (Component) => {

    const WithText = (props) => {

        const [data, setData] = useState({
            comment: ``,
            dignity: ``,
            limitations: ``,
            validComment: ValidStatus.VALID,
            });

        const _handleCommentInput = (evt) => {

            if (evt.target.value) {
                setData({
                    ...data,
                    comment: evt.target.value,
                    validComment: ValidStatus.VALID
                });
            } else {
                setData({
                    ...data,
                    comment: ``,
                    validComment: ValidStatus.INVALID,
                });
            }
        }

        const _handleDignityInput = (evt) => {
            setData({
                ...data,
                dignity: evt.target.value,
            });
        }

        const _handleLimitationsInput = (evt) => {
            setData({
                ...data,
                limitations: evt.target.value,
            });
        }

        const _handleValidCommentCheck = (status) => {
            setData({
                ...data,
                validComment: status
            });
        }

            const { comment, dignity, limitations, validComment } = data;

            return <Component
                {...props}
                comment={comment}
                dignity={dignity}
                limitations={limitations}
                validComment={validComment}
                onCommentInput={_handleCommentInput}
                onDignityInput={_handleDignityInput}
                onLimitationsInput={_handleLimitationsInput}
                onValidCommentCheck={_handleValidCommentCheck}
            />;
    }

    WithText.propTypes = {};

    return WithText;
};

export default withText;