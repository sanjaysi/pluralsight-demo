import React, {PropTypes} from 'react';
import TextInputCLI from  './TextInputCLI';
import WebCLIOutput from './WebCLIOutput';
import WebCLIBusy from './WebCLIBusy';
import '../../styles/webcli.css';

const style_none = {display: 'none'};

class WebCLI extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			consolestatus :  style_none,
			history: [],
			cmdoffset: 0
		};
		this.handleShortcut = this.handleShortcut.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleShortcut);
	}

	handleShortcut(e) {
		if (e.keyCode == 13) {
			let newState = this.state.history.slice();
			newState.push(e.target.value);
			this.setState({history: newState});
			this.runCmd(e);
			e.target.value = "";
		} else if (e.keyCode == 38) {
			let cmdoffset = this.state.cmdoffset;
			let history = this.state.history;

			if ((history.length + cmdoffset) > 0) {
				cmdoffset--;
				this.setState({cmdoffset: cmdoffset});
				e.target.value = history[history.length + cmdoffset];
				e.preventDefault();
			}
		} else if (e.keyCode == 40) {
			let cmdoffset = this.state.cmdoffset;
			let history = this.state.history;

			if (cmdoffset < -1) {
				cmdoffset++;
				this.setState({cmdoffset: cmdoffset});
				e.target.value = history[history.length + cmdoffset];
				e.preventDefault();
			}
		} else {
		if (e.ctrlKey && e.keyCode == 192) {
			if (this.state.consolestatus == null) {
				this.setState({consolestatus: style_none});
				} else {
					this.setState({consolestatus: null });
				}
			}
		}
	}

	runCmd(e) {
		if (e.target.value.trim() == "CMD") {
			console.log("Command: CMD");
		}
	}

	handleOnClick(e) {
		//console.log('handleOnClick');
	}

    render() {
		return(
			<div className="webcli" style={this.state.consolestatus}>
				<WebCLIOutput />
				<TextInputCLI onClick={this.handleOnClick} />
				<WebCLIBusy />
			</div>		
		);
    }
}

export default WebCLI;