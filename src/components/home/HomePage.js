import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Exploring React + Redux</h1>
                <p>React, Redux, React Router, Babel, Webpack, 
                    npm scripts, ES6, etc. for building ultra
                    responsive web app.</p>
                <Link to="about">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;