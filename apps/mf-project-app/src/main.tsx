import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import 'semantic-ui-css/semantic.min.css'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import * as serviceWorker from "./serviceWorker";
import "./SubscriberWidgetElement";

declare global {
  interface Window {
    renderProjectApp: any;
    unmountProjectApp: any;
  }
}




import App from './app/app';
const client = new ApolloClient({
  uri: 'http://localhost:5005/graphql',
  cache: new InMemoryCache()
});


window.renderProjectApp = (containerId, history) => {
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
      </ApolloHooksProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById(containerId)
  );
  serviceWorker.unregister();
};
window.unmountProjectApp = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("ProjectApp-container")) {
  // ReactDOM.render(<App />, document.getElementById("root"));
  ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
      </ApolloHooksProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
    document.getElementById("root")
  );
  serviceWorker.unregister();
}