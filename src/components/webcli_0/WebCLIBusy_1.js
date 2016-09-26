/* eslint-disable react/no-danger */
import React from 'react';
import ReactPlayer from 'react-player';
import '../../styles/webcli.css';

class WebCLIBusy extends React.Component {
    
    _innerhtml() {
		return(
			<div  
				dangerouslySetInnerHTML={{__html: this.props.message}} >
			</div>
		);
    }

    _message() {
		return(
			<div>  
				{this.props.message}
			</div>
		);
    }

    _image() {
		return(
			<img src={this.props.imageUrl} />
		);
    }    

    _video() {
		return(
			<ReactPlayer  url={this.props.videoUrl} playing />
		);
    }    

    render() {
		
		let output = null;
		if (this.props.showinnerhtml) {
			output = this._innerhtml();
		} else if (this.props.imageUrl) {
			output = this._image();
		} else if (this.props.videoUrl) {
			output = this._video();
		} else {
			output = this._message();
		}

		return (
			<div className="webcli-busy" >
				{output}
			</div>
		);
	}
}

WebCLIBusy.propTypes = {
	message: React.PropTypes.string,
	showinnerhtml: React.PropTypes.bool,
	videoUrl: React.PropTypes.string,
	imageUrl: React.PropTypes.string
};

export default WebCLIBusy;