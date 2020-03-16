import React, {useState, useEffect , Component} from 'react';
import { ScrollView, Text } from 'react-native';
import { Container, Content } from 'native-base';
import CartHeader from '../Header/cart-header';
import Products from './products';
import CartFooter from '../Footer/cartFooter';
export default function Cart(props){
    
    return(
        <Container>
            <CartHeader title="MY ORDERS" {...props} />
            <ScrollView>
                <Products />
            </ScrollView>
        </Container>
    );
}