import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './containers/Home';
import EmployeeExplorer from './containers/EmployeeExplorer';
import Layout from './components/Layout';

const App=()=>{
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/overview/:name" component={EmployeeExplorer} />
      <Redirect to="/" />
    </Switch>
  );
  return(
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);
