import React, {Component} from 'react';
import { ScrollView, Content,Text } from 'react-native';
import { Container } from 'native-base';
import StoreHeader from '../Header/storeHeader';
import FooterProdDetails from '../Footer';
import SliderImage from './sliderImage';

import TabInfo from './tabInfo';
import styles from '../home/styles';

class ProductDetails extends Component {
  
  render () {
    //console.log(this.props.navigation.state.params.title);
    return (
      <Container>
        <StoreHeader {...this.props} />
        {/*  stickyHeaderIndices={[10]}  */}
        <ScrollView>
            <SliderImage  />
            <TabInfo />
        </ScrollView>
        <FooterProdDetails {...this.props} />
      </Container>
    );
  }
}

export default ProductDetails;
