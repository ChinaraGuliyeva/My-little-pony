import React, { Component } from 'react';
import styled from 'styled-components';

const Pony = styled.img`
    display: block;
    width: 214px;
    height: 214px;
`;

class HomePagePony extends Component {
//Replace a href with p
    render() {
        return <div>
                    <h1>{this.props.title}</h1>
                    <Pony src={this.props.src} alt="Пони"/>
            </div>
    }
}

export default HomePagePony;