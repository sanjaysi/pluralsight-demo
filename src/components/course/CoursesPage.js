import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import CourseList from './CourseList';

class CoursesPage extends Component {
    constructor(props) {
        super(props);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        const {courses} = this.props;

        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
} 

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);