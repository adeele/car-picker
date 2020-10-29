import React from 'react';
import { BinaryFilter, EnumFilter, NumericFilter } from "./Filters";

const VehicleFilter = ({ fuelType, bodyType, setFilters }) => {
    const setFilterValue = (key) => (value) => {
        setFilters((filters) => ({
            ...filters,
            [key]: value,
        }))
    }

    const setFilterObject = (key) => (filter) => {
        setFilters((filters) => ({
            ...filters,
            [key]: {
                ...filters[key],
                ...filter,
            },
        }))
    }

    return <div>
        <BinaryFilter
            name="Engine power units"
            off="Horsepower"
            on="Kilowatts"
            setFilter={setFilterValue('enginePowerUnits')} />
        <NumericFilter name="Engine power" setFilter={setFilterObject('enginePower')} />
        <EnumFilter values={fuelType} name="Fuel type" setFilter={setFilterValue('fuelType')} />
        <EnumFilter values={bodyType} name="Body type" setFilter={setFilterValue('bodyType')} />
        <NumericFilter name="Engine capacity" setFilter={setFilterObject('engineCapacity')} />
    </div>
}

export default VehicleFilter;
