import React, { Component } from 'react';

import styled from 'styled-components';

const FooterContainer = styled.div`
    margin-top: 300px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid pink;
    padding-top: 30px
`;

class Footer extends Component {
    render() {
        return <FooterContainer>
            <div>Сделано Чинарой Гулиевой</div>
            <div>2020 год</div>
        </ FooterContainer>
    }
}

export default Footer;