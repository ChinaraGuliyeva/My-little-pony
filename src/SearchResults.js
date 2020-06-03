import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';
import MainSearch from './MainSearch';
import ListOfPoniesPony from './ListOfPoniesPony';

const CoinsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class SearchResultList extends Component {
    state = {
        ponies: []
    }
    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('http://localhost:3001/ponies')
            .then(res => res.json())
            .then(poniesData => {
                let ponies = poniesData.filter(element => {
                    let name = element.name.toLowerCase();
                    let result = id.toLowerCase();
                    return name.indexOf(result)!= -1
                });
                this.setState({ ponies });
            });
    }
    render() {
        const { ponies } = this.state;
        return <div className="container">
            <Header title="Результаты поиска" />
            <MainSearch />
            <CoinsContainer>
                {ponies.map(element => {return <Link to={`/pony/${element.id}`} className="coin-title"><ListOfPoniesPony title={element.name} src={element.img} /></Link>})}
            </CoinsContainer>
        </div>
    }
}

export default SearchResultList;