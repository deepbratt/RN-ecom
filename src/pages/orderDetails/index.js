import React, {useState, useEffect , Component} from 'react';
import { ScrollView, Text } from 'react-native';
import { Container, Content } from 'native-base';
import CartHeader from '../Header/cart-header';
import Products from './products';
export default function OrderDetails (props){
    
    return(
        <Container>
            <CartHeader title="ORDER DETAILS" {...props} />
            <ScrollView>
                <Products />
            </ScrollView>
        </Container>
    );
}