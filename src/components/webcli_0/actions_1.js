/* eslint-disable no-console */

import {pretty} from 'js-object-pretty-print';

class Console {

	static _cls(that) {
		that.setState({showimage: false});
		that.setState({showinnerhtml: false});
		that.setState({videoUrl: false});
		that.setState({output: ''});
	}

	static _echo(that, tokens) {
		tokens.shift();
		let str = tokens.join(' ');
		that.setState({output: str});
	}

	static _img(that, url) {
		that.setState({showimage: true});
		that.setState({imageUrl: url});
	}

	static _vdo(that, url) {
		that.setState({showvideo: true});
		that.setState({videoUrl: url});
	}

	static _crs(that, courses) {
		console.log(courses);
		let string = pretty(courses);
		that.setState({output: string});
	}

	static _help(that) {
		this._cls(that);
		that.setState({showinnerhtml: true});
		let help = 'Hello <br/>World';
		that.setState({output: help});
	}

	static _invalid(that) {
		that.setState({output: 'Invalid command'});
	}	

}

export default Console;