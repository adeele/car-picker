import React, { useState } from 'react';
import Picker from "./Picker";
import withFetch from "./withFetch";
import List from "./List";

const PickerWithFetch = withFetch(Picker);
const ListWithFetch = withFetch(List);

const App = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    return <React.Fragment>
        <header>Car picker</header>
        <form>
            <PickerWithFetch type="make" onPick={setMake} />
            <PickerWithFetch type="model" disabled={!make} params={{ 'make': make }} onPick={setModel} />
            <ListWithFetch type="vehicle" disabled={!model} params={{ 'make': make, 'model': model }} />
        </form>
    </React.Fragment>;
};

export default App;