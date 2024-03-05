import { useState } from 'react';
import { StyledBox } from './box.styles';

/* 
  Siempre que se pueda el estado debe ser un número o un booleano

*/

const Box = () => {
	const [isOrange, isNotOrange] = useState(true);
	return (
		<>
			<StyledBox $isOrange={isOrange} />
			<button onClick={() => changeColor(isOrange, isNotOrange)}>
				CHANGE COLOR
			</button>
		</>
	);
};


// Aquí se crea la función del cambio o de lo que quieres que ocurra

const changeColor = (isOrange, isNotOrange) => {
	isNotOrange(!isOrange);
};

export default Box;
