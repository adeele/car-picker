import React, { useState } from 'react';

const VehicleList = ({ vehicles, onSelect }) => {
    const [selected, setSelected] = useState({});

    const getListElement = ({ make, model, enginePowerPS, enginePowerKW, fuelType, bodyType, engineCapacity }) => ({
        "Make": make,
        "Model": model,
        "Engine power [Horsepower]": enginePowerPS,
        "Engine power [Kilowatts]": enginePowerKW,
        "Fuel type": fuelType,
        "Body type": bodyType,
        "Engine capacity": engineCapacity
    });

    const onVehicleClick = (element) => {
        setSelected(element);
        onSelect(element);
    }

    const isElementSelected = (element) => JSON.stringify(element) === JSON.stringify(selected);

    return vehicles.map((element, index) => (
        <div key={index}
             className={`list-element ${isElementSelected(element) ? "selected" : ""}`}
             onClick={() => onVehicleClick(element)}
        >
            {
                Object.entries(getListElement(element)).map(([key, value]) =>
                    <div className="list-entry" key={key}>
                        <div className="entry-key">{`${key}:`}</div>
                        <div className="entry-value">{value}</div>
                    </div>)
            }
        </div>
    ))
}

export default VehicleList;
