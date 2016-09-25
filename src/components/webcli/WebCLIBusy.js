import React from 'react';
import ReactPlayer from 'react-player';
import '../../styles/webcli.css';

class WebCLIBusy extends React.Component {
	constructor(props) {
		super(props);
	}

    render() {
		const style_video = this.props.showvideo ? {display: 'none'} : {display: 'block'};
		const style_innerhtml = this.props.showinnerhtml ? {display: 'block'} : {display: 'none'};
		const style_output = this.props.showinnerhtml ? {display: 'none'} : {display: 'block'};

		return (
			<div className="webcli-busy" style={style_video}>
				<div style={style_innerhtml} 
					dangerouslySetInnerHTML={{__html: this.props.message}} >
				</div>
				
				<div style={style_output}>{this.props.message}</div>
				<img src={this.props.imageUrl} />
				<ReactPlayer  url={this.props.videoUrl} playing />
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