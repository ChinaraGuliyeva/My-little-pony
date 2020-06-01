import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from './img/pony-pattern.jpg';

const Container = styled.div`
    display: flex;
    width: 50%;
    margin: 100px auto;
`;

const Pony = styled.img`
    margin: 40px 40px;
    display: block;
    width: 300px;
    height: 300px;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 700px;
    padding: 43px;
    background-image: url(${img});
    color: white;
    border-radius: 10px;
`;

const Text=styled.p`
    background-color: white;
    color: #48036F;
    padding: 20px;
    border-radius: 10px;
    font-family: sans-serif;
    font-size: 20px;
`;

const Title = styled.h1`
    font-size: 28px;
    padding: 20px;
    text-align: center;
    background-color: white;
    color: purple;
    margin: 0;
    border-radius: 10px;
`;

const A = styled.div`
    color: white;
    margin: 20px 0 0;
`;

class CoinDetails extends Component {
    state = {
        pony: ''
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        fetch('http://localhost:3001/ponies')
            .then(res => res.json())
            .then(poniesData => {
                let pony = poniesData.find(element => { return element.id == id });
                this.setState({ pony: pony })
                console.log(this.state.pony);
            });
    }
    render() {
        const { pony } = this.state;
        return <Container>
            <div>
                <Pony src={pony.img} alt="Пони" />
            </div>
            <DescriptionContainer>
                <div>
                    <Title>{pony.name}</Title>
                    <table>
                        <tr>
                            <td>Пол</td>
                            <td>{pony.gender}</td>
                        </tr>
                        <tr>
                            <td>Знак отличия</td>
                            <td>{pony['cutie-mark']}</td>
                        </tr>
                        <tr>
                            <td>Город</td>
                            <td>{pony.town}</td>
                        </tr>
                        <tr>
                            <td>Где живет</td>
                            <td>{pony.location}</td>
                        </tr>
                    </table>
                    <Text>{pony.description}</Text>
                    
                </div>
                <Link to={`/list/${pony.type}`}><A>Назад к списку</A></Link>
            </DescriptionContainer>
        </Container>
    }
}

export default CoinDetails;