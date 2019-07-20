import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const Img = styled.img`
    ${breakpoint('desktop')`
        width: 30%;
        height: 30%;
    `}

    ${breakpoint('mobile')`
        width: 75%;
        height: 75%;
    `}
`;

const Logo = () => (
	<Img alt="Logo" importance="high" decoding="async" loading="eager" src="/static/images/logo.png" draggable={false}/>
);

export default Logo;
