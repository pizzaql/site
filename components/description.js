import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    text-align: center;
`;

const Text = styled.h2`
    font-size: 1.2em;
`;

const Description = () => (
	<Wrapper>
		<Text>Modern Order Placement & Management System for Pizza Restaurants!</Text>
	</Wrapper>
);

export default Description;
