import React, { useState } from 'react';
import Picker from "./Picker";
import withFetch from "./withFetch";
import VehicleBrowser from "./VehicleBrowser";
import ErrorMessage from "./ErrorMessage";

const PickerWithFetch = withFetch(Picker);
const VehicleBrowserWithFetch = withFetch(VehicleBrowser);

const App = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [error, setError] = useState(null);

    return <React.Fragment>
        <header>Car picker</header>
        <form>
            <PickerWithFetch type="make" onPick={setMake} error={error} errorHandler={setError} />
            <PickerWithFetch type="model"
                             disabled={!make}
                             params={{ 'make': make }}
                             onPick={setModel}
                             error={error}
                             errorHandler={setError} />
            <VehicleBrowserWithFetch type="vehicle"
                                     disabled={!model}
                                     params={{ 'make': make, 'model': model }}
                                     error={error}
                                     errorHandler={setError}/>
        </form>
        <ErrorMessage error={error} />
    </React.Fragment>;
};

export default App;