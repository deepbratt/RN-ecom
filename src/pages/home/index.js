import React, { Component } from "react";
import Header from '../Header/HomeHeader';
import Footer from '../Footer';
import { View, ScrollView} from "react-native";
import {
  Container,
  Text,
  Separator,
  Content
} from "native-base";
import styles from "./styles";
import TopSlider from './category.js';
import ProductSlider from './product.js';
import StoresSlider from './stores.js';
import NewArrivals from './newArrivals.js';
import FeaturedCategoriesForStore from './featuredCategories.js';
import FeaturedProducts from './featuredProducts.js';
import Top7Stores from './topStores.js';
import Top7RecommendedProducts from './topRecommendedProducts.js';
import MostViewedProducts from './mostViewedProducts.js';

export default class Home extends Component {
 
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

          <Content>
            <Text style={styles.topTitle}>MOST WANTED7 PRODUCTS</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <ProductSlider {...this.props} />
            </ScrollView>
          </Content>

          <Content>
            <Text style={styles.topTitle}>MOST WANTED7 STORES</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <StoresSlider />
            </ScrollView>
          </Content>

          <Content>
            <Text style={styles.topTitle}>NEW ARRIVALS</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <NewArrivals />
            </ScrollView>
          </Content>

          <Content>
            <Text style={styles.topTitle}>FEATURED CATEGORIES FOR STORES</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <FeaturedCategoriesForStore />
            </ScrollView>
          </Content>

          <Content>
            <Text style={styles.topTitle}>FEATURED PRODUCTS</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <FeaturedProducts />
            </ScrollView>
          </Content>

          <Content>
            <Text style={styles.topTitle}>TOP 7 STORES</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Top7Stores />
            </ScrollView>
          </Content>

          <Content>
            <Text style={styles.topTitle}>TOP 7 RECOMMENDED PRODUCTS</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Top7RecommendedProducts />
            </ScrollView>
          </Content>

          <Content style={{marginBottom:25}}>
            <Text style={styles.topTitle}>MOST VIEWED PRODUCTS</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <MostViewedProducts />
            </ScrollView>
          </Content>
          
        </ScrollView>
        <Footer />
      </Container>
    );
  }
}