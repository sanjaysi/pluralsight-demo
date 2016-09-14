import React from 'react';
import '../../styles/webcli.css';

let style_input = {display: 'block'};

const TextInputCLI = () => {
	return (
		<input    
			className="webcli-input" 
			spellCheck="false" 
			placeholder="_"
			style={style_input}>
		</input>
	);
};

export default TextInputCLI;