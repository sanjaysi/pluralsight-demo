import React, {PropTypes} from 'react';
import TextInputCLI from  './TextInputCLI';
import WebCLIOutput from './WebCLIOutput';
import WebCLIBusy from './WebCLIBusy';
import '../../styles/webcli.css';

class WebCLI extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showconsole: false,
			history: [],
			cmdoffset: 0,
			output: '_'
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
			let newstate = !this.state.showconsole;
			this.setState({showconsole: newstate});
			}
		}
	}

	runCmd(e) {
		if (e.target.value.trim() == "CMD") {
			this.setState({output: 'Hello CMD'});
		} else {
			this.setState({output: 'Invalid Command'});
		}
	}

	handleOnClick(e) {
		//console.log('handleOnClick');
	}

    render() {
    	const display_none = {display: 'none'};

		return(
			<div className="webcli" style={this.state.showconsole ? null : display_none}>
				<WebCLIOutput />
				<TextInputCLI onClick={this.handleOnClick} />
				<WebCLIBusy message={this.state.output}/>
			</div>		
		);
    }
}

export default WebCLI;