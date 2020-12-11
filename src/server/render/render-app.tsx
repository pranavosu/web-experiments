import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Application } from '../../common/components/application';

export function render() {
   return '<!doctype html>' + ReactDOMServer.renderToString(
    <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>blah</title>
        </head>
        <body>
            <div id="root">
               <Application/>
            </div>
            <script src="main.js"></script>
        </body>
    </html>
  );
}
