import React, { useState, useEffect } from 'react';

const withFetch = (Component) => ({ type, disabled = false, params = '', error, errorHandler = () => {}, ...props }) => {
    const [elements, setElements] = useState(null);

    const makeGetParams = (params) => Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

    if (!disabled && !elements && !error) {
        fetch(`http://localhost:8080/api/${type}s?${makeGetParams(params)}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    setElements(JSON.parse(localStorage.getItem(type)));
                    throw new Error("Something went wrong. Something may not work properly.");
                }
            })
            .then((response) => {
                localStorage.setItem(type, JSON.stringify(response));
                setElements(response);
            })
            .catch(errorHandler);
    }

    return <Component type={type} elements={elements} disabled={disabled} {...props} />
}

export default withFetch;