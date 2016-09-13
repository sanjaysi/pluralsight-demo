import React from 'react';
import ReactPlayer from 'react-player'
import '../../styles/webcli.css';

class WebCLIBusy extends React.Component {
    render() {
		const style_none = {display: ''}; //none
		const style_video = this.props.showvideo ? {display: 'none'} : {display: 'block'};

		return (
			<div className="webcli-busy" style={style_none}>
				<div>{this.props.message}</div>
				<img src={this.props.image} />
				<ReactPlayer style={style_video} url={this.props.video} width="480" height="270" playing="true" />
			</div>
		);
	}
}

WebCLIBusy.propTypes = {
	message: React.PropTypes.string
};

export default WebCLIBusy;