import React from 'react';

const ErrorMessage = ({ error }) => {
    return error ? <div className="error">{error.message}</div> : null;
}

export default ErrorMessage;