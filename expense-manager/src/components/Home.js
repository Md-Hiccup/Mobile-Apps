import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

 class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  This is Page One, Press button to goto page two
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            dark bordered style={{ alignSelf: 'center', margin: 30 }}
            onPress={() => { Actions.login(); }}
          >
            <Text>Goto Page 1</Text>
         </Button>
        </Content>
      </Container>
    );
  }
}

export default Home;
