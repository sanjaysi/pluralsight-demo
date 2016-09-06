import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import Webcli from './common/webcli';

class App extends Component {
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <Header />
                    {this.props.children}
                </div>
                <Webcli />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;