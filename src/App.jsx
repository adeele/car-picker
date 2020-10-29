import React from 'react';
import Picker from "./Picker";

const App = () =>
    <React.Fragment>
        <header>Car picker</header>
        <form>
            <Picker type="make" />
            <Picker type="model" disabled={true} />
        </form>
    </React.Fragment>;

export default App;