import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContainerDiv = styled.div`
    padding: 20px 0;
`;

const Label = styled.label`
    display: inline-block;
    font-weight: bold;
    margin-bottom: 5px;
`;

class MainSearch extends Component {
    state = {
        value: ""
    }
    inputHandler = (event) => {
        this.setState({ value: event.target.value });
    }
    render() {
        return <ContainerDiv>
            <input id='search-input' value={this.state.value} onChange={this.inputHandler} />
            <Link to={`/search/${this.state.value}`}><button>Найти</button></Link>
        </ContainerDiv>
    }
}

export default MainSearch;