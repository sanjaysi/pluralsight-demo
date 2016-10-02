import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

class ManageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			course: Object.assign({}, this.props.course),
			errors: {},
			saving: false,
			deleting: false
		};
		toastr.options.timeOut = 1000;
		toastr.options.positionClass = "toast-top-center";
		this.updateCourseState = this.updateCourseState.bind(this);
		this.saveCourse = this.saveCourse.bind(this);
		this.deleteCourse = this.deleteCourse.bind(this);
		this.redirectAfterCancel = this.redirectAfterCancel.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// once deleted the course becomes undefined
		if (nextProps.course != undefined) {
			if (this.props.course.id != nextProps.course.id) {
				this.setState({course: Object.assign({}, nextProps.course)});
			}
		}	
	}

	updateCourseState(e) {
		const field = e.target.name;
		let course = this.state.course;
		course[field] = e.target.value;
		this.setState({course: course});
	}

	saveCourse(e) {
		e.preventDefault();
		if (this.isDataValid()) {
			this.setState({saving: true});
			this.props.actions.saveCourse(this.state.course)
				.then(() => this.redirect())
				.catch(error => {
					toastr.error(error);
					this.setState({saving: false});
				});
		}
	}

	isDataValid() {
		let {title, authorId, category, length} = this.state.course;
		if (title.length < 3 ||
			authorId.length < 3 ||
			category.length < 3 ||
			length.length < 1) {
			toastr.options.timeOut = 2000;
			toastr.warning('Please enter valid data');
			return false;
		}
		return true;
	}

	redirect() {
		this.setState({saving: false});
		toastr.success('Course saved');
		this.context.router.push('/courses');	
	}

	deleteCourse(e) {
		e.preventDefault();
		this.setState({deleting: true});
		this.props.actions.deleteCourse(this.state.course)
			.then(() => this.redirectAfterDelete())
			.catch(error => {
				toastr.error(error);
				this.setState({deleting: false});
			});
	}

	redirectAfterDelete() {
		this.setState({deleting: false});
		toastr.success('Course deleted');
		this.context.router.push('/courses');	
	}

	redirectAfterCancel() {
		this.context.router.push('/courses');	
	}

	render() {
		return (
			<CourseForm 
				allAuthors={this.props.authors}
				onChange={this.updateCourseState}
				onSave={this.saveCourse}
				course={this.state.course} 
				errors={this.state.errors} 
				saving={this.state.saving}
				onDelete={this.deleteCourse}
				onCancel={this.redirectAfterCancel}
				deleting={this.state.deleting}/>
		);
	}
}

ManageCoursePage.propTypes = {
	course: PropTypes.object,
	authors: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
	router: PropTypes.object
};

function getCourseById(courses, id) {
	const course = courses.filter(course => course.id == id);
	if (course) {
		return course[0];
	}
	return null;
}

function mapStateToProps(state, ownProps) {
	const courseId = ownProps.params.id;

	let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

	if (courseId && state.courses.length > 0) {
		course = getCourseById(state.courses, courseId);
	}

	const authorsFormattedForDropdown = state.authors.map(author => {
		return {
			value: author.id,
			text: author.firstName + ' ' + author.lastName
		};
	});

	return {
		course: course,
		authors: authorsFormattedForDropdown
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
