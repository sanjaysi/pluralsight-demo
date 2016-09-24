import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import CourseList from './CourseList';

class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;

        return(
            <div>
                <h1>Courses</h1>
                <input  type="submit"
                        value="Add Course"
                        className="btn btn-primary"
                        onClick={this.redirectToAddCoursePage} />
                <CourseList courses={courses} />
            </div>
        );
    }
} 

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);