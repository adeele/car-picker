import React, { useState, useEffect } from 'react';

const Picker = ({ type, params = '', disabled = false, onPick }) => {
    const [elements, setElements] = useState([]);

    const makeGetParams = (params) => Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

    const setElement = ({ target: { value }}) => {
        const element = elements.includes(value) ? value : '';

        onPick(element);
    }

    useEffect(() => {
        if (!disabled && !elements.length) {
            fetch(`http://localhost:8080/api/${type}s?${makeGetParams(params)}`)
                .then(response => response.json())
                .then((response) => setElements(response))
                .catch(/* TODO */);
        }
    });

    return <div className="picker">
        <label>{`Choose ${type}:`}</label>
        <input type="text" list={type} onChange={setElement} />
        <datalist id={type}>
            {elements.map((element, index) => <option value={element} key={index} />)}
        </datalist>
    </div>;
}

export default Picker;
