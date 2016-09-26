import React, {PropTypes} from 'react';
import TextInputCLI from  './TextInputCLI';
import WebCLIOutput from './WebCLIOutput';
import WebCLIBusy from './WebCLIBusy';
import {courses} from './courseData';
import Console from './actions';
import Actions from './constants';
import '../../styles/webcli.css';

class WebCLI extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			contenttype: Actions.DEFAULT,
			contentdata: '',
			showconsole: false,
			showimage: false,
			showinnerhtml: false,
			imageUrl: null,
			showvideo: false,
			videoUrl: '',
			history: [],
			cmdoffset: 0,
			output: '_'
		};
		this.handleShortcut = this.handleShortcut.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleShortcut);
	}

	handleShortcut(e) {
		if (e.keyCode == 13) {
			let newState = this.state.history.slice();
			newState.push(e.target.value);
			this.setState({history: newState});
			this.runCmd(e.target.value.trim());
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

	runCmd(command) {
		Console._cls(this);

		if (command == "") {return;}

		let tokens = command.split(" ");
		let	cmd = tokens[0].toUpperCase();

		switch (cmd) {
			case 'ECHO': { Console._echo(this, tokens); return; }
			case 'CLS': { Console._cls(this); return; }
			case 'IMG': { Console._img(this, tokens[1]); return; }
			case 'VDO': { Console._vdo(this, tokens[1]); return; }
			case 'CRS': { Console._crs(this, courses); return; }
			case 'HELP': { Console._help(this); return; }
			default: { Console._invalid(this); return; }
		}
	}

    render() {
		const display_none = {display: 'none'};

		return(
			<div className="webcli" style={this.state.showconsole ? null : display_none}>
				<WebCLIOutput />
				<TextInputCLI />
				<WebCLIBusy contenttype={this.state.contenttype}
							contentdata={this.state.contentdata} />
			</div>		
		);
    }
}

export default WebCLI;