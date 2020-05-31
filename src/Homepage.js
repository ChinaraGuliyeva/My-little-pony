import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import HomePagePony from "./HomePagePony";
import { Link } from 'react-router-dom';

const PoniesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Homepage extends Component {
//May be array without state
  state = {
    ponies: [
      {
        link: '/list/Bullion',
        title: 'Bullion coins',
        src: 'https://i.postimg.cc/gcBVSZpX/South-Vietnamese-Dong-1.png'
      },
      {
        link: '/list/Exclusive',
        title: 'Exclusive coins',
        src: 'https://i.postimg.cc/7ZJmMNTZ/ISK-2.png'
      },
      {
        link: '/list/Commemorative',
        title: 'Commemorative coins',
        src: 'https://i.postimg.cc/VvNFS981/Looney-1.png'
      }
    ]
  }

  render() {
    const { ponies } = this.state;
    return <div className="container">
      <Header title="Добро пожаловать в Понивиль" />
      <PoniesContainer>
        {ponies.map(element => { return <Link to={element.link}><HomePagePony title={element.title} src={element.src} /></Link> })}
      </PoniesContainer>
    </div>
  }
}

export default Homepage;
