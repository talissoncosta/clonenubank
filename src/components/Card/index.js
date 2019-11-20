import React from 'react';

import { Content, CardHeader, CardContent, CardFooter, Annotation, Title, Description, Card  } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from '~/components/Menu'

import {Animated } from 'react-native';
import { PanGestureHandler, State} from 'react-native-gesture-handler';

export default function Header() {
  const translateY = new Animated.Value(0);

  const animatedEvent =  Animated.event(
    [
      {
        nativeEvent:{
          translationY: translateY,
        }
      }
    ]

  )
  function onHandlerStateChanged(event) {

  }

  return (
      <Content>
        <Menu />
        <PanGestureHandler

          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            trasnform:[{
              translateY: translateY.interpolate({
                inputRange:[0,380],
                outputRange:[0,380],
                extrapolate:'clamp'
              }),
            }],
          }}>
            <CardHeader>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </CardHeader>
            <CardContent>
              <Title> Saldo disponivel</Title>
              <Description> R$ 1.000,00</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferencia de R$ 20,00 recebida de Amplisoftware Tecnologia.
                </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>
  )
}
