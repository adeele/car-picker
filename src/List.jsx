import React from 'react';

const List = ({ elements }) => {

    return <React.Fragment>
        {elements.map((element, index) => <div key={index} />)}
    </React.Fragment>;
}

export default List;
