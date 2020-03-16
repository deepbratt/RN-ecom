import React,{useState} from 'react';
import {Content, Text,Right} from 'native-base';
import {ScrollView} from 'react-native';
import {Row, Grid,Col} from 'react-native-easy-grid';
import OrderProducts from '../../components/orders';

import styles from './style.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
const data = [{
    storeName:'Patel Fashion',
    orderId: 'ORD28112019-155-121',
    cartProduct: [{
        id: 1,
        orderId: 'ORD28112019-155-121-1',
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess1.png', 
        title: 'React Sneaker',
        brand: 'Nike',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Delivery',
        deliveryEstimation: 'Mon 30 Jan',
        deliveryStatus:'pending',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"L",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        }]
    },{
        id: 2,
        orderId: 'ORD28112019-155-121-2',
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess.png', 
        title: 'Sneakers',
        brand: 'Nike',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Delivery',
        deliveryEstimation: 'Tue 31 Jan',
        deliveryStatus:'delivered',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"M",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        }]
    },{
        id: 3,
        orderId: 'ORD28112019-155-121-3',
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess2.png', 
        title: 'Echo',
        brand: 'Amazon',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Bluedart',
        deliveryEstimation: 'Sun 29 Jan',
        deliveryStatus:'return',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"XL",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        }]
    }]
},{
    storeName:'Reebook',
    orderId: 'ORD28112019-155-122',
    cartProduct: [{
        id: 1,
        orderId: 'ORD28112019-155-122-1',
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess1.png', 
        title: 'React Sneaker',
        brand: 'Nike',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Bluedart',
        deliveryEstimation: 'Sun 29 Jan',
        deliveryStatus:'delivered',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"L",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        }]
    },{
        id: 2,
        orderId: 'ORD28112019-155-122-2',
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess.png', 
        title: 'Sneakers',
        brand: 'Nike',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Bluedart',
        deliveryEstimation: 'Sun 29 Jan',
        deliveryStatus:'pending',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"M",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        }]
    },{
        id: 3,
        orderId: 'ORD28112019-155-122-3',
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess2.png', 
        title: 'Echo',
        brand: 'Amazon',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Delivery',
        deliveryEstimation: 'Sun 29 Jan',
        deliveryStatus:'delivered',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"XL",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
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
                <Grid style={styles.cpnGrid1} key={index}>
                    <Row style={styles.greyBackground} key={index}>
                        <Col>
                            <Text style={styles.productbrand}> {data.storeName} </Text>
                        </Col>
                        <Col>
                            <Right>
                                <Text style={styles.orderBrand}>{data.orderId}</Text>
                            </Right>
                        </Col>
                    </Row>
                    <OrderProducts prodData={data.cartProduct} />
                </Grid>
            )
        })
        }
        </ScrollView>
        </Content>
       
    </>
  );
}
