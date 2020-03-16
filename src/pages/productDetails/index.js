import React, {Component} from 'react';
import { ScrollView, Content,Text } from 'react-native';
import { Container } from 'native-base';
import ProductHeader from '../Header/product-header';
import FooterProdDetails from '../Footer/footerProdDetails';
import SliderImage from './sliderImage';
import ShortInfo from './shortInfo';
import Options from './options';
//import TabInfo from './tabInfo';

import Coupons from './coupons';
import SoldBy from './soldBy';
import CheckDelivery from './checkDelivery';

import Description from './description';
import Specification from './specification';
import ReturnPolicy from './returnPolicy';
import Ratings from './ratings';
import ProductSlider from '../home/product';
import styles from '../home/styles';

class ProductDetails extends Component {
  
  render () {
    //console.log(this.props.navigation.state.params.title);
    return (
      <Container>
        <ProductHeader {...this.props} />
        {/*  stickyHeaderIndices={[10]}  */}
        <ScrollView>
            <SliderImage  />
            <ShortInfo  />
            <Options />
            <Coupons />
            <SoldBy />
            <CheckDelivery />

            <Description />
            <Specification />
            <ReturnPolicy />
            <Ratings />

            <Text style={styles.topTitle}> SIMILAR PRODUCTS </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <ProductSlider />
            </ScrollView>

            <Text style={styles.topTitle}> PRODUCTS FROM PATEL FASHION </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <ProductSlider />
            </ScrollView>

        </ScrollView>
        
        <FooterProdDetails {...this.props} />
      </Container>
    );
  }
}

export default ProductDetails;
