import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';

class App extends Component {

    render() {
        let routes = null;

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}

export default App;
