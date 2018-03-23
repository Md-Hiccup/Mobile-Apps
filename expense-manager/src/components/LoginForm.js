import React, { Component } from 'react';
import { Container, Content, Header, Form, Item, Label, Input, Button, Text,
  Body, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

 class LoginForm extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button
              block 
              onPress={() => { Actions.home(); }}
            >
              <Text>Signin</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default LoginForm;
