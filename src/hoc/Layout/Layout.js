import React, { Component } from 'react';

import Aux from '../Aux/Aux';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <main className="container mx-auto px-8 lg:px-0">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
