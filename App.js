/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { StyleProvider } from "native-base";
import Main from "./src/Main";
import persist from "./src/config/store";

import getTheme from "./src/theme/components";
import variables from "./src/theme/variables/commonColor";

const persistStore = persist();

export default class App extends Component{
  render() {
    return (
      <Provider store={persistStore.store}>
        <PersistGate loading={null} persistor={persistStore.persistor}>
          <StyleProvider style={getTheme(variables)}>
            <Main />
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}
