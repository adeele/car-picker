import React from 'react';

export const NumericFilter = ({ name, setFilter }) => {
    const setFilterValue = (field) => ({ target: { value }}) => {
        setFilter({ [field]: value });
    }

    return <div className="filter numeric-filter">
        <label>{name}</label>
        <div className="filter-input">
            <input type="number" onChange={setFilterValue('min')} />
            <label>-</label>
            <input type="number" onChange={setFilterValue('max')} />
        </div>
    </div>
}

export const EnumFilter = ({ values = [], name, setFilter, defaultValue }) => {
    const setFilterValue = ({ target: { value }}) => {
        setFilter(value);
    }

    return <div className="filter enum-filter">
        <label>{name}</label>
        <select onChange={setFilterValue} defaultValue={defaultValue} className="filter-input">
            { defaultValue ? null : <option /> }
            {
                values.map((value, index) => (
                    <option key={index}>{value}</option>
                ))
            }
        </select>
    </div>;
}

