import React, { Component } from 'react';
import styled from 'styled-components';

const PonyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    width: 700px;
`;

const Pony = styled.img`
    display: block;
    width: 200px;
    height: 200px;
    margin-right: 30px;
`;

const PonyTitle = styled.h1`
    font-weight: bold;
    font-size: 30px;
    line-height: 19px;
`;

class ListOfPoniesPony extends Component {
    render() {
        return <PonyContainer>
            <PonyTitle>{this.props.title}</PonyTitle>
            <Pony src={this.props.src} alt="Пони"/>
        </PonyContainer>
    }
}

export default ListOfPoniesPony;