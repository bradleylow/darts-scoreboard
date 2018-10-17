import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Options from './containers/Options/Options';
import Scoreboard from './containers/Scoreboard/Scoreboard';

class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/scoreboard" exact component={Scoreboard} />
                    <Route path="/" exact component={Options} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
