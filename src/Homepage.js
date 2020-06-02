import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from './Header';
import HomePagePony from "./HomePagePony";


const PoniesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

class Homepage extends Component {
//May be array without state
  state = {
    ponies: [
      {
        link: '/list/Alicorn',
        title: 'Аликорны',
        src: 'https://i.postimg.cc/kG80c6mt/twilight-sparkle-flying-off-by-andoanimalia-dchpvqp-fullview.png'
      },
      {
        link: '/list/Unicorn',
        title: 'Единороги',
        src: 'https://i.postimg.cc/tRLcwY9w/57c3d0961dea0156d4e6ca6b.png'
      },
      {
        link: '/list/Earth',
        title: 'Земные пони',
        src: 'https://i.postimg.cc/X7b89Fjj/137661.jpg'
      },
      {
        link: '/list/Pegasus',
        title: 'Пегасы',
        src: 'https://i.postimg.cc/Hx1JFwPj/rainbow-dash-dash-with-it-by-mysteriouskaos-d5cu0zq.png'
      }
    ]
  }

  render() {
    const { ponies } = this.state;
    return <div className="container">
      <Header title="Добро пожаловать в Эквестрию!" />
      <PoniesContainer>
        {ponies.map(element => { return <Link to={element.link}><HomePagePony title={element.title} src={element.src} /></Link> })}
      </PoniesContainer>
    </div>
  }
}

export default Homepage;
