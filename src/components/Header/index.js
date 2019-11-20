import React from 'react';

import { Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/logo-vertical.png';

export default function Header() {


  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Amplimed Consulta</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF"></Icon>
    </Container>
  )
}
