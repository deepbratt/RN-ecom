import React, { Component } from "react";
import Header from '../Header/HomeHeader';
import Footer from '../Footer';
import { View, ScrollView} from "react-native";
import {
  Container,
  Text,
  Content
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import WMalls from './WMalls/WMallsListing.js';


export default class Wmalls extends Component {
 
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <ScrollView>

          <View padder>
            <ScrollView>
              <WMalls />
            </ScrollView>
          </View>

        </ScrollView>
        <Footer />
      </Container>
    );
  }
}