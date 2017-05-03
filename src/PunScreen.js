/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 100;
`;

const TextInputPink = styled.TextInput`
  color: red;
`

export default class PunScreen extends Component {
  render() {
    return (
      <Container>
        <TextInputPink value="test" placeholder="Enter Keywords" />
      </Container>
    );
  }
}
