import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Button} from 'react-bootstrap';
import CourseList from './CourseList';

import {loadCourses} from '../../actions/courseActions';

class CoursesPage extends Component {
    constructor(props) {
        super(props);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    componentWillMount(){
        // always get the latest courses
        this.props.dispatch(loadCourses());
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
                <div>
                    <h3>Courses</h3>
                    <Button type="submit" bsStyle="primary" onClick={this.redirectToAddCoursePage}>Add Course</Button>
                    {/* <input  type="submit"
                             value="Add Course"
                             className="btn btn-primary"
                             onClick={this.redirectToAddCoursePage} />
                    */}
                </div>
                <CourseList courses={courses} />
            </div>
        );
    }
} 

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
};

CoursesPage.contextTypes = {
    store: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);