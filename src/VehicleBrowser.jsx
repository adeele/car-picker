import React, { useState } from 'react';
import VehicleFilter from "./VehicleFilter";
import VehicleList from "./VehicleList";

const isInRange = (value, {min, max}) => (!min || value > min) && (!max || value < max);
const isMatchingString = (value, pattern) => !pattern || pattern === value;

const VehicleBrowser = ({ elements, onVehicleSelect }) => {
    if (!elements) {
        return null;
    }

    const [filters, setFilters] = useState({})

    const { fuelTypeValues, bodyTypeValues } = elements.reduce((values, current) => {
        values.fuelTypeValues.add(current.fuelType);
        values.bodyTypeValues.add(current.bodyType);

        return values;
    }, {
        fuelTypeValues: new Set(),
        bodyTypeValues: new Set(),
    });

    const {
        enginePowerUnits,
        enginePower = {},
        fuelType,
        bodyType,
        engineCapacity = {}
    } = filters;

    const enginePowerKey = enginePowerUnits === "Horsepower" ? "enginePowerPS" : "enginePowerKW";

    const filteredVehicles = elements.filter((element) =>
        isInRange(element[enginePowerKey], enginePower) &&
        isMatchingString(element.fuelType, fuelType) &&
        isMatchingString(element.bodyType, bodyType) &&
        isInRange(element.engineCapacity, engineCapacity));

    return <div className="browser">
        <VehicleFilter fuelType={[...fuelTypeValues]}
                       bodyType={[...bodyTypeValues]}
                       setFilters={setFilters} />
        <VehicleList vehicles={filteredVehicles} onSelect={onVehicleSelect} />
    </div>;
}

export default VehicleBrowser;
