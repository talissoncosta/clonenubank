import React from 'react';

import { Container, TabsContainer, TabsItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {


  return (
    <Container>
      <TabsContainer>
        <TabsItem>
          <Icon name="search" size={35} color="#FFF"/>
          <TabText> Buscar profissional</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name="date-range" size={35} color="#FFF"/>
          <TabText> Agendamentos</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name="favorite" size={35} color="#FFF"/>
          <TabText> Favoritos</TabText>
        </TabsItem>
        <TabsItem>
          <Icon name="account-box" size={35} color="#FFF"/>
          <TabText> Meu perfil</TabText>
        </TabsItem>
      </TabsContainer>
    </Container>
  )
}
