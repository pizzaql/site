import React from 'react';

import Container from '../components/container';
import Logo from '../components/logo';
import GithubButton from '../components/github-button';
import DocsButton from '../components/docs-button';
import Description from '../components/description';
import ButtonGroup from '../components/button-group';
import Card from '../components/card';
import Footer from '../components/footer';

const Index = () => (
	<Container>
		<Logo/>
		<br/>
		<br/>
		<Description/>
		<br/>
		<ButtonGroup>
			<GithubButton/>
			<br/>
			<DocsButton/>
		</ButtonGroup>
		<Card
			src="../static/images/undraw_react.svg"
			title="Built with React"
			text="Code is maintainable & easy to understand"
		/>
		<Card
			src="../static/images/undraw_open_source.svg"
			title="Open Source"
			text="All code is available on our Github repository"
		/>
		<Card
			src="../static/images/undraw_speed.svg"
			title="Fast"
			text="Focused on high performance"
		/>
		<Card
			src="../static/images/undraw_stripe.svg"
			title="Online payments"
			text="Stripe is supported out-of-the-box"
		/>
		<Footer>
			<p>MIT. Copyright (c) <a href="https://kepinski.me" target="_blank" rel="noopener noreferrer">Antoni Kepinski</a></p>
		</Footer>
	</Container>
);

export default Index;
