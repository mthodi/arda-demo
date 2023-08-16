import React from "react";
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import {Route, Switch} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "assets/vendors/style";
import "styles/wieldy.less";

import configureStore, { history } from './appRedux/store';
import App from "./containers/App/index";

const store = configureStore();

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } }
});

const NextApp = () =>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
    </QueryClientProvider>
  </Provider>;


export default NextApp;
