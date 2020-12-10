import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Application } from '../../common/components/application';

export function render() {
   return ReactDOMServer.renderToString(
        <Application/>
    );
}
