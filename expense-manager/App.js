import React from 'react';
import { Font, AppLoading } from 'expo';
import { View, StatusBar } from 'react-native';
import { Root } from 'native-base';
import Routes from './src/Routes';

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
       Roboto: require('native-base/Fonts/Roboto.ttf'),
       Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
       Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
     });

     this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <View>
          <AppLoading />
        </View>
      );
    }
    return (
            <Root>
              <StatusBar
                backgroundColor="brown"
                barStyle="light-content"
              />
              <Routes />
            </Root>
      );
  }
}

export default App;
