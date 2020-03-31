import React from 'react';

const Hello = () => {
    return React.createElement(
        'div', 
        {id: 'myid', className:'myClass'}, 
        React.createElement('h1', null, 'Hello.js')
    )
}

export default Hello