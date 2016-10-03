import React, {PropTypes} from 'react';
import TextInputCLI from  '../webcli/TextInputCLI';
import WebCLIHeader from '../webcli/WebCLIHeader';
import WebCLIOutput from '../webcli/WebCLIOutput';
import '../../styles/webcli.css';

class ModalBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showconsole: this.props.showmodal
		};
	}

	componentWillReceiveProps(nextProps) {
        this.setState({showconsole: nextProps.showmodal});
	}

    render() {
		const display_none = {display: 'none'};

		return(
			<div className="webcli" style={this.state.showconsole ? null : display_none}>
				<WebCLIHeader />
				<TextInputCLI />
			</div>		
		);
    }
}

ModalBox.propTypes = {
	showmodal: PropTypes.bool.isRequired
};

export default ModalBox;