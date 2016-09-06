import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import Devconsole from './common/Devconsole';

class App extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Header />
                {this.props.children}
                <h2>Devconsole tool</h2>
                <Devconsole />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;