import React from 'react';

export const BinaryFilter = ({ name, on, off, setFilter }) => {
    const setFilterValue = ({ target: { checked }}) => {
        setFilter(checked ? on : off);
    }

    return <React.Fragment>
        <label>{name}</label>
        <div>
            <label>{on}</label>
            <input type="checkbox" onChange={setFilterValue} />
            <label>{off}</label>
        </div>
    </React.Fragment>
}

export const NumericFilter = ({ name, setFilter }) => {
    const setFilterValue = (field) => ({ target: { value }}) => {
        setFilter({ [field]: value });
    }

    return <React.Fragment>
        <label>{name}</label>
        <div>
            <input type="number" onChange={setFilterValue('min')} />
            <label>-</label>
            <input type="number" onChange={setFilterValue('max')} />
        </div>
    </React.Fragment>
}

export const EnumFilter = ({ values = [], name, setFilter }) => {
    const setFilterValue = ({ target: { value }}) => {
        setFilter(value);
    }

    return <React.Fragment>
        <label>{name}</label>
        <select onChange={setFilterValue}>
            <option />
            {
                values.map((value, index) => (
                    <option key={index}>{value}</option>
                ))
            }
        </select>
    </React.Fragment>;
}

