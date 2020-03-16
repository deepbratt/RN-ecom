import React, { Component } from "react";
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
import styles from "./style";
import CategorySlider from '../../components/categorySlider';
import ProductGrid from '../../components/productGrid';
import ProductListing from '../../components/productListing';

import { Dimensions } from 'react-native'
const deviceWidth = Dimensions.get('window').width;
const images = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/foodss.png', 
        title: 'Food'
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/7790b70f-f917-4214-81a5-446fb632212a.jpg', 
        title: 'Fashion'
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/furnituress.png', 
        title: 'Furniture'
    },
    {
        id: 4,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/foodss.png', 
        title: 'Food'
    },
    {
        id: 5,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/7790b70f-f917-4214-81a5-446fb632212a.jpg', 
        title: 'Fashion'
    },
    {
        id: 6,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/furnituress.png', 
        title: 'Furniture'
    }
  ];
  const prodImages = [
    {
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess1.png', 
        title: 'Nike React...',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess.png', 
        title: 'Nike Sneakers',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess2.png', 
        title: 'Amazon Echo',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 4,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess1.png', 
        title: 'Nike React...',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 5,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess.png', 
        title: 'Nike Sneakers',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    },
    {
        id: 6,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess2.png', 
        title: 'Amazon Echo',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00'
    }
  ];
  
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
        <ScrollView style={{padding:6}}>

          <View padder>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CategorySlider catData={images} />
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
          {
              this.state.selected1 === 'Grid' 
              ?
              <ProductGrid prodData={prodImages} />
              :
              <ProductListing prodData={prodImages} />
          }
        </ScrollView>
      </Container>
    );
  }
}