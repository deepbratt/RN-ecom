import React, { Component } from "react";
import Header from '../Header/HomeHeader';
import Footer from '../Footer';
import { View, ScrollView} from "react-native";
import {
  Container,
  Text,
  Content,
  Item,
  Button,
  Icon,
  Picker
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from "./styles";
import TopSlider from './category.js';
import { Dimensions } from 'react-native'
import Products from './WantedProducts/products.js';

const deviceWidth = Dimensions.get('window').width;
export default class WantedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedItem: undefined,
        selected1: 'List',
        selected2: 'Filter',
        results: {
            items: []
        }
    }
}

onValueChange (value) {
    this.setState({
        selected1 : value
    });
}
onValueChanged (value) {
  this.setState({
      selected2 : value
  });
}
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <ScrollView style={{padding:6}}>

          <View padder>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TopSlider />
            </ScrollView>
          </View>
         
          <Grid style={{paddingLeft:3,paddingRight:3}}>
              <Col>
                <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#62138F',width:deviceWidth/3,height: 35}}>
                  <Picker
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this)}
                    style={{ height: 35}}
                    >
                    <Picker.Item label='&#9776;  List' value='List' color="#62138F" />
                    <Picker.Item label='&#9638;  Grid' value='Grid' color="#62138F"/>
                  </Picker>
                </View>
                </Col>
                <Col  />
                <Col>
                <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#62138F',width:deviceWidth/3,height: 35}}>
                  <Picker
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChanged.bind(this)}
                    style={{height: 35 }} >
                    <Picker.Item label='&#10728; Filter' value='Filter' color="#62138F" />
                    <Picker.Item label='&#10728; Filter' value='Filter' color="#62138F" />
                  </Picker>
                </View>
              </Col>
          </Grid>
          <Products view={this.state.selected1} />
        </ScrollView>
        <Footer />
      </Container>
    );
  }
}