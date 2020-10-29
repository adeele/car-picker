import React, { useState, useEffect } from 'react';

const withFetch = (Component) => ({ type, disabled = false, params = '', ...props }) => {
    const [elements, setElements] = useState([]);

    const makeGetParams = (params) => Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

    if (!disabled && !elements.length) {
        fetch(`http://localhost:8080/api/${type}s?${makeGetParams(params)}`)
            .then(response => response.json())
            .then((response) => setElements(response))
            .catch(/* TODO */);
    }

    return <Component type={type} elements={elements} disabled={disabled} {...props} />
}

export default withFetch;