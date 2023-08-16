import React from "react";
import {Route, Switch} from "react-router-dom";

import asyncComponent from "util/asyncComponent";

const App = ({match}) => { 
  
  // const updateView = (view) => {
  //   console.log(view);
  // }
  
  return (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}sample`} component={asyncComponent(() => import('./SamplePage'))} />
      <Route path={`${match.url}ixp/growth`} component={asyncComponent(() => import('./ixp/growth'))}/>
      <Route path={`${match.url}ixp/overview`} component={asyncComponent(() => import('./ixp/overview'))}/>
       {/* Country routes */}
      <Route path={`${match.url}country/overview`} component={asyncComponent(() => import('./country/overview'))}/>
      <Route path={`${match.url}country/asn-relations`} component={asyncComponent(() => import('./country/ASRelations'))}/>
      {/* Region routes */}
      <Route path={`${match.url}region/overview`} component={asyncComponent(() => import('./region/overview'))}/>
      <Route path={`${match.url}region/asn-relations`} component={asyncComponent(() => import('./region/ASRelations'))}/>
    </Switch>
  </div>
);
}

export default App;
