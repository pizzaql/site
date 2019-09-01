import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 45vw;

	${breakpoint('desktop')`
    	padding-bottom: 4em;
    `}

    ${breakpoint('mobile')`
    	padding-bottom: 50px;
    `}
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 30em;
`;

const Img = styled.img`
    width: 18em;
`;

const Card = ({src, title, text}) => (
	<Wrapper>
		<Img alt={title} importance="low" decoding="async" loading="lazy" src={src} draggable={false}/>
		<br/>
		<Description>
			<h2>{title}</h2>
			<p>{text}</p>
		</Description>
	</Wrapper>
);

Card.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default Card;
