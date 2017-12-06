import React, { Component } from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import { ScreenOrientation } from 'expo';
import { Provider } from 'react-redux';
import { store } from './redux';
import * as WebSocket from './websocket';
import { WebsocketStatusBar } from './modules/websocket';
import { AppNavigator } from './modules/app';

class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content', false);
    WebSocket.init();
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT_UP);
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <View style={{ flex: 1 }}>
            <WebsocketStatusBar />
            <AppNavigator />
          </View>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
});

export default App;
