import React from 'react';
import '../../styles/webcli.css';

class WebCLIBusy extends React.Component {
    render() {
	    const style_none = {display: ''}; //none
		return (
	        <div className="webcli-busy" style={style_none}>
	        	<div>{this.props.message}</div>
	        </div>
		);
	}
}

export default WebCLIBusy;