import React from 'react';
import '../../styles/webcli.css';

let style_input = {display: 'block'};

const TextInputCLI = ({onClick}) => {
	return (
		<input    
			className="webcli-input" 
			spellCheck="false" 
			placeholder="_"
            onClick={onClick}
			style={style_input}>
		</input>
	);
};

export default TextInputCLI;