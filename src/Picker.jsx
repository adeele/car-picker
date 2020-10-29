import React, { useState, useEffect } from 'react';

const Picker = ({ type, elements, disabled, onPick }) => {
    const setElement = ({ target: { value }}) => {
        const element = elements.includes(value) ? value : '';

        onPick(element);
    }

    return <div className={`picker ${disabled && "disabled"}`}>
        <label>{`Choose ${type}:`}</label>
        <input type="text" list={type} onChange={setElement} />
        <datalist id={type}>
            {elements.map((element, index) => <option value={element} key={index} />)}
        </datalist>
    </div>;
}

export default Picker;
