import styled from 'styled-components';

const StyledBox = styled.div`
	width: 100px;
	height: 100px;
	background-color: ${({ $isOrange }) => ($isOrange ? 'red' : 'green')};

	// isOrange ? 'orange' : 'blue'
`;

export { StyledBox };
