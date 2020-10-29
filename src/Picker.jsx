import React, { useState, useEffect } from 'react';

const Picker = ({ type, disabled = false }) => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        if (!disabled && !elements.length) {
            fetch(`http://localhost:8080/api/${type}s?$`)
                .then(response => response.json())
                .then(response => setElements([...response]))
                .catch(/* TODO */);
        }
    });

    return <div className="picker">
        <label>{`Choose ${type}:`}</label>
        <input type="text" list={type} />
        <datalist id={type}>
            {elements.map((element, index) => <option value={element} key={index} />)}
        </datalist>
    </div>;
}

export default Picker;
