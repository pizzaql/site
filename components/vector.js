import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Img = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 10px;
    vertical-align: text-top;
`;

const Vector = ({src}) => (
	<Img alt="icon" importance="low" decoding="async" loading="lazy" src={src} draggable={false}/>
);

Vector.propTypes = {
	src: PropTypes.string.isRequired
};

export default Vector;
