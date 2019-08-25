import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {createGlobalStyle} from 'styled-components';

import '../node_modules/modern-normalize/modern-normalize.css';

// Fonts
import MontserratWoff from '../static/fonts/montserrat-v12-latin-ext-regular.woff';
import MontserratWoff2 from '../static/fonts/montserrat-v12-latin-ext-regular.woff2';

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-display: fallback;
		src: local('Montserrat Regular'), local('Montserrat-Regular'),
			url(${MontserratWoff2}) format('woff2'),
			url(${MontserratWoff}) format('woff');
	}
 
	body {
		background-color: #fff;
		font-family: Montserrat, Georgia, monospace;
		margin: auto;
		width: 100%;
		font-size: 16px;
		padding-top: 100px;
		color: #000;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
	}
`;

class MyApp extends App {
	render() {
		const {Component, pageProps} = this.props;

		return (
			<>
				<GlobalStyle/>
				<Head>
					<title>PizzaQL</title>
				</Head>
				<Component {...pageProps}/>
			</>
		);
	}
}

export default MyApp;
