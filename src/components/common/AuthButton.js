import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {authenticate} from '../../actions/authActions';

class AuthButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'Sign In'
		};

		this.checkauth = this.checkauth.bind(this);
	}

	changeMessage() {
		if (this.props.authenticated) {
			this.setState({message: 'Sign Out'});
		} else {
			this.setState({message: 'Sign In'});
		}
	}

	checkauth() {
		if (this.props.authenticated) {
			this.props.authenticate(false);
		} else {
			this.props.authenticate(true);
		}
		this.changeMessage();
	}

	render() {
		const divStyle = {
			marginTop: '0px',
			marginBottom: '0px'
		}; 

		return ( 
			<div className="pull-right" >
				<button style={divStyle} type="button" onClick={this.checkauth} className="btn navbar-btn btn-primary">{this.state.message}</button>
			</div>		
		);
	}
}

AuthButton.propTypes = {
	authenticated: React.PropTypes.bool,
	authenticate: React.PropTypes.func
};

function mapStateToProps(state) {
	return { authenticated: state.authenticated };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ authenticate: authenticate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);