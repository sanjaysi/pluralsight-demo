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

    _getj() {
        return(
            <pre>
                  {this.props.contentdata}
            </pre>
        );
    }

    _image() {
        return(
            <img src={this.props.contentdata} />
        );
    }    

    _video() {
        return(
            <ReactPlayer  url={this.props.contentdata} playing controls />
        );
    }    

    _audio() {
        return(
            <ReactPlayer  url={this.props.contentdata} playing controls height="60" />
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
            case (Actions.AUDIO): {
                output = this._audio();
                break;    
            }
            case (Actions.JSON): {
                output = this._getj();
                break;    
            }
            default: {
                output = this._message();
                break;
            }
        }

        return (
            <div className="webcli-output">
                {output}
            </div>
        );
    }
}

WebCLIOutput.propTypes = {
    contenttype: React.PropTypes.string,
    contentdata: React.PropTypes.string
};

export default WebCLIOutput;