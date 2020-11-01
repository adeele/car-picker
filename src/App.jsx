import React, { useEffect, useState } from 'react';
import Picker from "./Picker";
import VehicleBrowser from "./VehicleBrowser";
import ErrorMessage from "./ErrorMessage";

const App = () => {
    const [error, setError] = useState(null);

    const [{ makes, make, models, model, vehicles }, setState] = useState({});

    const doFetch = (type, params, callback) => {
        fetch(`http://localhost:8080/api/${type}s?${new URLSearchParams(params)}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    callback(JSON.parse(localStorage.getItem(type)));
                    throw new Error("An error occurred. Application may not work properly.");
                }
            })
            .then((response) => {
                localStorage.setItem(type, JSON.stringify(response));
                callback(response);
            })
            .catch(setError);
    }

    useEffect(() => {
        doFetch('make', {}, (makes) => setState({ makes }));
    }, []);

    const onMakePick = (make) => {
        setState(({ makes }) => ({ makes }));
        if (make) {
            doFetch(
                'model',
                {make},
                (models) => setState((prevState) => ({ ...prevState, make, models })));
        }
    }

    const onModelPick = (model) => {
        setState(({ models, makes, make }) => ({ models, makes, make }));
        if (model) {
            doFetch(
                'vehicle',
                { make, model },
                (vehicles) => setState((prevState => ({ ...prevState, model, vehicles }))));
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