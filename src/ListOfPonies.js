import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';
import ListOfPoniesPony from './ListOfPoniesPony';
import Footer from './Footer';

const PoniesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 150px
`;

class ListOfPonies extends Component {
    state = {
        ponies: []
    }
    componentDidMount() {
        const id = this.props.match.params.id;

        fetch('http://localhost:3001/ponies')
            .then(res => res.json())
            .then(poniesData => {
                let ponies = poniesData.filter(element => {return element.type==id});
                this.setState({ ponies });
                console.log(ponies[0].type)
            });
    }
    render() {
        const { ponies } = this.state;
        return <div className="container">
            <Header title='Список пони' />
            <PoniesContainer>
                {ponies.map(element => {return <Link to={`/pony/${element.id}`} className="coin-title"><ListOfPoniesPony title={element.name} src={element.img} /></Link>})}
            </PoniesContainer>
            <Footer />
        </div>
    }
}

export default ListOfPonies;