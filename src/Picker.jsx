import React, { useState } from 'react';

const Picker = ({ type, elements, onPick }) => {
    const [value, setValue] = useState('');

    const handleChange = ({ target: { value }}) => {
        setValue(value);

        const element = elements && elements.includes(value) ? value : '';

        onPick(element);
    }

    if (!elements && value) {
        setValue('');
    }

    return <div className={`picker ${elements && "disabled"}`}>
        <label>{`Choose ${type}:`}</label>
        <input type="text" list={type} onChange={handleChange} value={value}/>
        <datalist id={type}>
            {elements && elements.map((element, index) => <option value={element} key={index} />)}
        </datalist>
    </div>;
}

export default Picker;
