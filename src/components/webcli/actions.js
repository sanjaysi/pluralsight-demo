/* eslint-disable no-console */

import {pretty} from 'js-object-pretty-print';
import Actions from './constants';

class Console {

    static _cls(that) {
        that.setState({contenttype: Actions.DEFAULT});
        that.setState({contentdata: ''});
    }

    static _echo(that, tokens) {
        tokens.shift();
        let str = tokens.join(' ');
        that.setState({contentdata: str});
    }

    static _img(that, url) {
        that.setState({contenttype: Actions.IMAGE});
        that.setState({contentdata: url});
    }

    static _vdo(that, url) {
        that.setState({contenttype: Actions.VIDEO});
        that.setState({contentdata: url});
    }

    static _crs(that, courses) {
        let string = pretty(courses);
        that.setState({contentdata: string});
    }

    static _help(that) {
        this._cls(that);
        that.setState({contenttype: Actions.INNERHTML});
        let help = 'Hello <br/>World';
        that.setState({contentdata: help});
    }

    static _invalid(that) {
        that.setState({contentdata: 'Invalid command'});
    }   

}

export default Console;