import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Button} from 'react-bootstrap';
import CourseList from './CourseList';
import {loadCourses} from '../../actions/courseActions';
import ModalBox from '../common/VideoPlayer';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showmodal: false
        };
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        this.openModalBox = this.openModalBox.bind(this);
    }

    componentWillMount(){
        // get the latest courses each time it is routed
        // to this page
        this.props.dispatch(loadCourses());
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    openModalBox(e) {
        let newstate = !this.state.showmodal;
        this.setState({showmodal: newstate});
        console.log(e.target);
    }

    render() {
        const {courses} = this.props;

        return(
            <div>
               {/*<ModalBox showmodal={this.state.showmodal} />
                <div     input type="button" 
                            className="btn btn-link" 
                            data="http://www.com"
                            onClick={this.openModalBox}>Open modal</div>
                */}
                <div>
                <h4><span   type="submit" 
                            className="btn btn-success" 
                            onClick={this.redirectToAddCoursePage}>Add Course</span></h4>
                    {/* 
                    <Button type="submit" bsStyle="primary" onClick={this.redirectToAddCoursePage}>Add Course</Button>
                    */}
                </div>
                <br/>
                <CourseList courses={courses} />
            </div>
        );
    }
} 

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

CoursesPage.contextTypes = {
    router: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);