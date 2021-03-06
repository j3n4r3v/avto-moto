import React, { useState } from 'react';
import { ValidStatus } from '../utils/const';

const withName = (Component) => {
    const WithName = (props) => {
        
        const [data, setData] = useState({
            author: ``,
            validAuthor: ValidStatus.VALID,
        })

            const _handleNameInput = (evt) => {

            if (evt.target.value) {
                setData({
                    ...data,
                    author: evt.target.value,
                    validAuthor: ValidStatus.VALID,
                });
            } else {
                setData({
                    ...data,
                    author: ``,
                    validAuthor: ValidStatus.INVALID,
                });
            }
        }

        const _handleValidNameCheck = (status) => {
            setData({
                ...data,
                validAuthor: status
            });
        }

        const { author, validAuthor } = data;

            return <Component
                {...props}
                author={author}
                validAuthor={validAuthor}
                onNameInput={_handleNameInput}
                onValidNameCheck={_handleValidNameCheck}
            />;
    }

    WithName.propTypes = {};

    return WithName;
};

export default withName;