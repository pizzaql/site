import React from 'react';

import Container from '../components/container';
import Logo from '../components/logo';
import GithubButton from '../components/github-button';
import DocsButton from '../components/docs-button';
import Description from '../components/description';
import ButtonGroup from '../components/button-group';

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
	</Container>
);

export default Index;
