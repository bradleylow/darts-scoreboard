import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Options from './containers/Options/Options';

class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Options} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
