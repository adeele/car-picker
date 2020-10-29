import React from 'react';

const ErrorMessage = ({ error }) => {
    return error && <div>{error.message}</div>
}

export default ErrorMessage;