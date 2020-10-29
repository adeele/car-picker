import React, { useState } from 'react';
import Picker from "./Picker";

const App = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    return <React.Fragment>
        <header>Car picker</header>
        <form>
            <Picker type="make" onPick={setMake} />
            <Picker type="model" disabled={!make} params={{ 'make': make }} onPick={setModel} />
        </form>
    </React.Fragment>;
};

export default App;