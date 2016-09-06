import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import '../../styles/webcli.css';

const Webcli = () => {
	let style_input = {
		display: 'block'
	};
	let style_busy = {
		display: 'none'
	};

    return(
		<div className="webcli">
			<div className="webcli-output">
				<span className="webcli-cmd">Dev Console [Version 0.0.1]</span>
				<br /><br />
			</div>
			<input className="webcli-input" spellCheck="false" style={style_input}></input>
			<div className="webcli-busy" style={style_busy}></div>
		</div>		
    );
};

export default Webcli;