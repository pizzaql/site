import React from 'react';
import styled from 'styled-components';

import Vector from './vector';

const Button = styled.button`
    border: none;
    border-radius: 3px;
    padding: 10px 12px;
    margin: 10px;
    width: 18em;
    height: 3.5em;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background-color: #333;
    text-decoration: none;
    user-select: none;
    outline: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #444 radial-gradient(circle, transparent 1%, #444 1%) center/15000%;
    }
    
    &:active {
        background-color: #111;
        background-size: 100%;
        transition: background 0s;
    }
`;

const GithubButton = () => (
	<a href="https://github.com/pizzaql/pizzaql" target="_blank" rel="noopener noreferrer">
		<Button><Vector src="/static/images/github.svg"/>Star the project on Github</Button>
	</a>
);

export default GithubButton;
