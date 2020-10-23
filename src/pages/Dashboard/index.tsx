import React from 'react';

import { useHistory } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import iconWeather from '../../assets/images/VectorWeather.svg';

import { Container, Header, Content, Footer } from './styles';

const Dashboard: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <Header>
        <img src={logo} alt="Compasso Uol" />
        <div className="time">
          <strong>11:26</strong>
          <span>terça-feira, 17 de março de 2020</span>
        </div>
        <div className="city">
          <span>Passo Fundo - RS</span>
          <div className="weather">
            <img src={iconWeather} alt="Clima" />
            <strong>22º</strong>
          </div>
        </div>
      </Header>

      <Content>
        <strong className="initial">Our mission is</strong>
        <p>Nossa missão é</p>
        <strong className="standard">to transform the world</strong>
        <p>transformar o mundo</p>
        <strong className="standard">building digital experiences</strong>
        <p>construindo experiências digitais</p>
        <strong className="standard">that enable our client’s growth</strong>
        <p>que permitam o crescimento dos nossos clientes</p>
      </Content>

      <Footer>
        <div className="instructions">
          <p>
            Essa janela do navegador é usada para manter sua sessão de
            autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova
            janela para continuar a navegar.
          </p>
        </div>

        <div className="application">
          <span>Apllication refresh in</span>
          <div className="seconds">
            <strong>600</strong>
            <span>seconds</span>
          </div>
        </div>

        <div className="actions">
          <button type="button" className="continue">
            Continuar Navegando
          </button>

          <button type="button" className="logout" onClick={goBack}>
            Logout
          </button>
        </div>
      </Footer>
    </Container>
  );
};

export default Dashboard;
