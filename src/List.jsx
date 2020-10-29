import React, { useState } from 'react';
import { BinaryFilter, EnumFilter, NumericFilter } from "./Filters";

const List = ({ elements, disabled }) => {
    if (disabled) {
        return null;
    }

    const [enginePowerUnitsFilter, setEnginePowerUnitsFilter] = useState("Horsepower");
    const [enginePowerFilter, setEnginePowerFilter] = useState({});
    const [fuelTypeFilter, setFuelTypeFilter] = useState([]);
    const [bodyTypeFilter, setBodyTypeFilter] = useState([]);
    const [engineCapacityFilter, setEngineCapacityFilter] = useState({});

    const { fuelType, bodyType } = elements.reduce((values, current) => {
        values.fuelType.add(current.fuelType);
        values.bodyType.add(current.bodyType);

        return values;
    }, {
        fuelType: new Set(),
        bodyType: new Set(),
    });

    return <React.Fragment>
        <div>
            <BinaryFilter name="Engine power units" off="Horsepower" on="Kilowatts" setFilter={setEnginePowerUnitsFilter}/>
            <NumericFilter name="Engine power" setFilter={setEnginePowerFilter} />
            <EnumFilter values={[...fuelType]} name="Fuel type" setFilter={setFuelTypeFilter} />
            <EnumFilter values={[...bodyType]} name="Body type" setFilter={setBodyTypeFilter} />
            <NumericFilter name="Engine capacity" setFilter={setEngineCapacityFilter} />
        </div>
        {elements.map((element, index) => <div key={index} />)}
    </React.Fragment>;
}

export default List;
