import React,{useState} from 'react';
import {Content, Text,Right} from 'native-base';
import {ScrollView} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import OrderDetailsProducts from '../../components/orderDetails';

import styles from './style.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
const data = [{
    storeName:'Patel Fashion',
    cartProduct: [{
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess1.png', 
        title: 'Nike React Sneaker',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Delivery',
        deliveryEstimation: 'Mon 30 Jan',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"L",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        }]
    }]
}];

export default function Products (props) {
 const [cart, setCart] = useState(data);
 const [storeNameChecked,setStoreNameChecked] = useState(true);
 const [modal,setModal] = useState(false);
  return (
    <>
        <Content style={{borderBottomWidth: 5, borderBottomColor: '#CCC'}}>
         <ScrollView>
        {
        cart.map((data,index) => {
            return(
                <Grid key={index}>
                    <Row style={styles.greyBackground} key={index}>
                        <Text style={styles.productbrand}> Order ID - ORD28112019-155-121 </Text>
                    </Row>
                    <OrderDetailsProducts prodData={data.cartProduct} />
                </Grid>
            )
        })
        }
        </ScrollView>
        </Content>
       
    </>
  );
}
