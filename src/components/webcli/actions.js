import {pretty} from 'js-object-pretty-print';
import ContentType from './constants';
import axios from 'axios';
import validUrl from 'valid-url';
import config from '../../actions/serviceConfig';

const commands = [
    {'ECHO [string...]': 'Echo string'}, 
    {'CLS': 'Clear console'}, 
    {'IMG [url]': 'Show image'}, 
    {'VDO [url]': 'Watch video'}, 
    {'GETJ [url]': 'Get Json data'}, 
    {'DELETE [url]': 'Delete data'}, 
    {'HELP': 'Help menu'} 
];

class Console {
    static _cls(that) {
        that.setState({ contenttype: ContentType.DEFAULT,
                        contentdata: '' });
    }

    static _echo(that, tokens) {
        tokens.shift();
        let str = tokens.join(' ');
        that.setState({contentdata: str});
    }

    static _validurl(url) {
        if (validUrl.isUri(url)) {
            return true;
        }
    }

    static _validstr(str) {
        if (str != undefined && str.length > 0) {
            return true;
        }
    }

    static _img(that, url='') {
        if (this._validurl(url)) {
            that.setState({ contenttype: ContentType.IMAGE,
                            contentdata: url });
        } else {this._invalid(that);}
    }

    static _vdo(that, url) {
        if (this._validurl(url)) {
            that.setState({ contenttype: ContentType.VIDEO,
                            contentdata: url });
        } else {this._invalid(that);}
    }

    static _getj(that, url) {
        if (this._validurl(url)) {
            axios.get(url)
              .then(function(response){
                let data = pretty(response.data);
                that.setState({ contenttype: ContentType.JSON,
                                contentdata: data });
            })
            .catch(function(response) {
                that.setState({ contenttype: ContentType.DEFAULT,
                                contentdata: response.message });
            });
        } else {this._invalid(that);}
    }

    static _delete(that, id) {
        if (this._validstr(id)) {
            axios.delete(`${config.host}/courses/${id}`)
              .then((response) => {
                that.setState({ contenttype: ContentType.DEFAULT,
                                contentdata: `Successfully deleted: ${id} 
                                            Response: ${response.status}` });
            })
            .catch(function(response) {
                that.setState({ contenttype: ContentType.DEFAULT,
                                contentdata: response.message });
            });
        } else {this._invalid(that);}
    }

    static _help(that) {
        let help='';
        commands.forEach(function (item){
            for(let k in item){
                help += k + ' - ' + item[k] + '<br/>';
            }
        });
        that.setState({ contenttype: ContentType.INNERHTML, 
                        contentdata: help});
    }

    static _invalid(that) {
        that.setState({contentdata: 'Invalid command'});
    }   

}

export default Console;