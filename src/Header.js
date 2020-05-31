import React, { Component } from 'react';

import styled from 'styled-components';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Heading = styled.h1`
    font-weight: normal;
    margin: 0;
    padding: 0;
    font-size: 40px;
`;

class Header extends Component {
    render() {
        return <HeaderDiv>
            <Heading>{this.props.title}</Heading>
        </ HeaderDiv>
    }
}

export default Header;