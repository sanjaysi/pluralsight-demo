/* eslint-disable no-console */

import {pretty} from 'js-object-pretty-print';
import ContentType from './constants';

const commands = [
    {'CLS': 'Clear console'}, 
    {'IMG': 'Show image'}, 
    {'VDO': 'Watch video'}, 
    {'CRS': 'Show course data'}, 
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

    static _img(that, url) {
        that.setState({ contenttype: ContentType.IMAGE,
                        contentdata: url });
    }

    static _vdo(that, url) {
        that.setState({ contenttype: ContentType.VIDEO,
                        contentdata: url });
    }

    static _crs(that, courses) {
        let string = pretty(courses);
        that.setState({contentdata: string});
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