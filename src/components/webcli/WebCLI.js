import React, {PropTypes} from 'react';
import TextInputCLI from  './TextInputCLI';
import '../../styles/webcli.css';

const style_none = {display: 'none'};

class WebCLI extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			consolestatus :  style_none
		};
		this.handleShortcut = this.handleShortcut.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleShortcut);
	}

	handleShortcut(e) {
		if (e.ctrlKey && e.keyCode == 192) {
			if (this.state.consolestatus == null) {
				this.setState({consolestatus: style_none});
			} else {
				this.setState({consolestatus: null });
			}
		}
	}

    render() {
		return(
			<div className="webcli" style={this.state.consolestatus}>
				<div className="webcli-output">
					<span className="webcli-cmd">Dev Console [Version 0.0.1]</span>
					<br /><br />
				</div>
				{TextInputCLI()}
				<div className="webcli-busy" style={style_none}></div>
			</div>		
		);
    }
}

export default WebCLI;