import React, { useState, useCallback, FormEvent } from 'react';

import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/logoBranco.png';
import Input from '../../components/Input';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const { push } = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [msgError, setMsgError] = useState('');
  const [isErrored, setIsErrored] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (user === '' || password === '') {
        setMsgError('Ops, usuário ou senha inválidos. Tente novamente!');
        setIsErrored(true);
      } else {
        setMsgError('');
        setIsErrored(false);
        push('/dashboard');
      }
    },
    [password, user, push],
  );

  return (
    <Container>
      <Content>
        <div className="instructions">
          <h1>Olá,</h1>
          <p>
            Para continuar navegando de forma segura, efetue o login na rede
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <Input
            name="user"
            type="email"
            icon="userIcon"
            placeholder="Usuário"
            value={user}
            onChange={e => {
              setUser(e.target.value);
            }}
            error={isErrored}
          />

          <Input
            name="password"
            type="password"
            icon="passowrdIcon"
            placeholder="Senha"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            error={isErrored}
          />

          {isErrored && <span>{msgError}</span>}

          <button type="submit">Continuar</button>
        </form>
      </Content>

      <Background>
        <img src={logo} alt="Compasso Uol" />
      </Background>
    </Container>
  );
};

export default SignIn;
