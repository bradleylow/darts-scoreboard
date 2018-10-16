import React, { Component } from 'react';

import Aux from '../Aux/Aux';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <main className="container mx-auto">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
