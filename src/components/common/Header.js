import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import AuthButton from './AuthButton';

class Header extends React.Component {
	render() {
		return(
			<div>
				<nav>
					<IndexLink to="/" activeClassName="active">Home</IndexLink>
					{" | "}
					<Link to="/courses" activeClassName="active">Courses</Link>
					{" | "}
					<Link to="/about" activeClassName="active">About</Link>
					<AuthButton />
				</nav>
			</div>
		);
	}
}

export default Header;