import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from '../common/components/application';

ReactDOM.hydrate(
    <Application/>,
    document.getElementById('root')
);