import React, { useState } from 'react';
import { BinaryFilter, EnumFilter, NumericFilter } from "./Filters";

const VehicleBrowser = ({ elements, disabled }) => {
    if (disabled) {
        return null;
    }

    const [enginePowerUnitsFilter, setEnginePowerUnitsFilter] = useState("Horsepower");
    const [enginePowerFilter, setEnginePowerFilter] = useState({});
    const [fuelTypeFilter, setFuelTypeFilter] = useState("");
    const [bodyTypeFilter, setBodyTypeFilter] = useState("");
    const [engineCapacityFilter, setEngineCapacityFilter] = useState({});

    const { fuelType, bodyType } = elements.reduce((values, current) => {
        values.fuelType.add(current.fuelType);
        values.bodyType.add(current.bodyType);

        return values;
    }, {
        fuelType: new Set(),
        bodyType: new Set(),
    });

    const enginePowerKey = enginePowerUnitsFilter === "Horsepower" ? "enginePowerPS" : "enginePowerKW";

    const filteredElements = elements.filter((element) => {
        return !(enginePowerFilter.min && element[enginePowerKey] < enginePowerFilter.min ||
            enginePowerFilter.max && element[enginePowerKey] < enginePowerFilter.max ||
            fuelTypeFilter.length && !fuelTypeFilter.includes(element.fuelType) ||
            bodyTypeFilter.length && !bodyTypeFilter.includes(element.bodyType) ||
            engineCapacityFilter.min && element.engineCapacity < engineCapacityFilter.min ||
            engineCapacityFilter.max && element.engineCapacity > engineCapacityFilter.max);
    });

    return <React.Fragment>
        <div>
            <BinaryFilter name="Engine power units" off="Horsepower" on="Kilowatts" setFilter={setEnginePowerUnitsFilter}/>
            <NumericFilter name="Engine power" setFilter={setEnginePowerFilter} />
            <EnumFilter values={[...fuelType]} name="Fuel type" setFilter={setFuelTypeFilter} />
            <EnumFilter values={[...bodyType]} name="Body type" setFilter={setBodyTypeFilter} />
            <NumericFilter name="Engine capacity" setFilter={setEngineCapacityFilter} />
        </div>
        {
            filteredElements.map((element, index) => (
                <div key={index}>
                    Engine power [{enginePowerUnitsFilter}]: {element[enginePowerKey]}
                    Fuel type: {element.fuelType}
                    Body type: {element.bodyType}
                    Engine capacity: {element.engineCapacity}
                    All elements: {filteredElements.length}
                </div>
            ))
        }
    </React.Fragment>;
}

export default VehicleBrowser;
