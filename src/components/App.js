import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import WebCLI from './webcli/WebCLI';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <Header 
                        loading={this.props.loading}
                    />
                    {this.props.children}
                </div>
                <WebCLI />
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.ajaxCallsInProgress > 0
    };
}

export default connect(mapStateToProps)(App);