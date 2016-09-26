/* eslint-disable react/no-danger */
import React from 'react';
import ReactPlayer from 'react-player';
import Actions from './constants';
import '../../styles/webcli.css';

class WebCLIOutput extends React.Component {
    
    _innerhtml() {
        return(
            <div  
                dangerouslySetInnerHTML={{__html: this.props.contentdata}} >
            </div>
        );
    }

    _message() {
        return(
            <div>  
                {this.props.contentdata}
            </div>
        );
    }

    _image() {
        return(
            <img src={this.props.contentdata} />
        );
    }    

    _video() {
        return(
            <ReactPlayer  url={this.props.contentdata} playing />
        );
    }    

    render() {
        let output = null;

        switch (this.props.contenttype) {

            case (Actions.INNERHTML): {
                output = this._innerhtml();
                break;
            }
            case (Actions.IMAGE): {
                output = this._image();
                break;    
            }
            case (Actions.VIDEO): {
                output = this._video();
                break;    
            }
            default: {
                output = this._message();
                break;
            }
        }

        return (
            <div className="webcli-output" >
                {output}
            </div>
        );
    }
}

WebCLIOutput.propTypes = {
    contenttype: React.PropTypes.enum,
    contentdata: React.PropTypes.string
};

export default WebCLIOutput;