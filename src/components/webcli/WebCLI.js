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
			showimage: false,
			imageUrl: '',
			showvideo: false,
			videoUrl: '',
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
		// clear output
		this.setState({showimage: false});
		this.setState({videoUrl: false});
		this.setState({output: ''});
		
		if (command == "") {return;}

		let tokens = command.split(" ");
		let	cmd = tokens[0].toUpperCase();

		if(cmd === "ECHO") { 
			tokens.shift();
			let str = tokens.join(' ');
			this.setState({output: str});
		}
		if(cmd === "CLS") { this.setState({output: ''});}
		if(cmd === "IMG") { 
			this.setState({showimage: true});
			this.setState({imageUrl: tokens[1]});
		}
		if(cmd === "VDO") { 
			this.setState({showvideo: true});
			this.setState({videoUrl: tokens[1]});
			console.log('vdo: ', this.state.videoUrl);
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
				<WebCLIBusy message={this.state.output}
							image={this.state.showimage ? this.state.imageUrl : null} 
							video={this.state.showvideo ? this.state.videoUrl : null} />
			</div>		
		);
    }
}

export default WebCLI;