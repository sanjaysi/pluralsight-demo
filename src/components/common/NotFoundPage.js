import React from 'react';
import {Link} from 'react-router';

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Sorry....</h1>
                <p>You hit the wrong page.</p>
                <Link to="/">Got to main page</Link>
            </div>
        );
    }
}

export default NotFoundPage;