import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Options from './containers/Options/Options';
import Scoreboard from './containers/Scoreboard/Scoreboard';
import Result from './containers/Result/Result';

class App extends Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/scoreboard" exact component={Scoreboard} />
                    <Route path="/results" exact component={Result} />
                    <Route path="/" exact component={Options} />
                </Switch>
            </Layout>
        );
    }
}

export default App;
