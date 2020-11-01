import React, { useEffect, useState } from 'react';
import Picker from "./Picker";
import VehicleBrowser from "./VehicleBrowser";
import ErrorMessage from "./ErrorMessage";
import { getMakes, getModels, getVehicles } from "./API";

const App = () => {
    const [error, setError] = useState(null);
    const [{ makes, make, models, model, vehicles }, setState] = useState({});

    useEffect(() => {
        getMakes().then((makes) => setState({ makes })).catch(setError);
    }, []);

    const onMakePick = (make) => {
        setState(({ makes }) => ({ makes, make }));

        if (make) {
            getModels(make)
                .then((models) => setState((prevState) => ({ ...prevState, models })))
                .catch(setError);
        }
    }

    const onModelPick = (model) => {
        setState(({ models, makes, make }) => ({ models, model, makes, make }));

        if (model) {
            getVehicles(make, model)
                .then((vehicles) => setState((prevState) => ({ ...prevState, vehicles })))
                .catch(setError);
        }
    }

    return <>
        <header>Car picker</header>
        <form>
            <Picker type="make" onPick={onMakePick} elements={makes} />
            <Picker type="model" onPick={onModelPick} elements={models} />
            <VehicleBrowser type="vehicle" disabled={!model} elements={vehicles} />
        </form>
        <ErrorMessage error={error} />
    </>;
};

export default App;