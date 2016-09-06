import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import WebCLI from './webcli/WebCLI';

class App extends Component {
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <Header />
                    {this.props.children}
                </div>
                <WebCLI />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;