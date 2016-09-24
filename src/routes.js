import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import requireAuth from './components/requireAuth';
import NotFoundPage from './components/common/NotFoundPage';

// uncomment for authentication
//const Authenticated = requireAuth((props) => props.children);
const Authenticated = (props) => props.children;

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route component={Authenticated} >
            <Route path="courses" component={CoursesPage} />
            <Route path="course" component={ManageCoursePage} />
            <Route path="course/:id" component={ManageCoursePage} />
        </Route>
        <Route path="about" component={AboutPage} />
    </Route>
);