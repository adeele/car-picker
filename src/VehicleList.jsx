import React from 'react';

const VehicleList = ({ vehicles }) => {
    return <div>
        {
            vehicles.map((element, index) => (
                <div key={index}>
                    Engine power [Horsepower]: {element.enginePowerPS}
                    Engine power [Kilowatts]: {element.enginePowerKW}
                    Fuel type: {element.fuelType}
                    Body type: {element.bodyType}
                    Engine capacity: {element.engineCapacity}
                    All elements: {vehicles.length}
                </div>
            ))
        }
    </div>
}

export default VehicleList;
