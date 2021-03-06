import styled from 'styled-components';
import { device } from '../../utilities/devices';

const StyledContainer = styled.div`
	width: 87.2%;
	margin: auto;
	${(props) => props.additionalStyles};

	@media ${device.tablet} {
		width: 89.7%;
	}

	@media ${device.desktop} {
		width: 77.08%;
	}
`;

export default StyledContainer;
