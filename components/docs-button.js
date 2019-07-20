import React from 'react';
import styled from 'styled-components';

import Vector from './vector';

const Button = styled.button`
    border: none;
    border-radius: 3px;
    padding: 10px 12px;
    margin: 10px;
    width: 17em;
    height: 3.5em;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background-color: #4263f7;
    text-decoration: none;
    user-select: none;
    outline: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #637ef8 radial-gradient(circle, transparent 1%, #637ef8 1%) center/15000%;
    }
    
    &:active {
        background-color: #113bf5;
        background-size: 100%;
        transition: background 0s;
    }
`;

const DocsButton = () => (
	<a href="https://docs.pizzaql.tech" target="_blank" rel="noopener noreferrer">
		<Button><Vector src="/static/images/document.svg"/>Read the documentation</Button>
	</a>
);

export default DocsButton;
