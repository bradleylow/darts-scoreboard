import React, { Component } from 'react';

import Aux from '../Aux/Aux';

class Layout extends Component {

    render () {
        return (
            <Aux>
                <main className="contain mx-auto relative px-8 lg:px-0 sm:h-screen">
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;
