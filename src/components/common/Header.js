import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import AuthButton from './AuthButton';
import LoadingDots from './LoadingDots';

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
					{" | "}
					{this.props.loading && <LoadingDots interval={100} dots={20} />}
					<AuthButton />
				</nav>
			</div>
		);
	}
}

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;