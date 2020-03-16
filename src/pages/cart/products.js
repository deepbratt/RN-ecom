import React,{useState} from 'react';
import {Content, Text,Right} from 'native-base';
import {CheckBox,ScrollView} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import CartProduct from '../../components/cartProduct';
import Coupon from '../../components/cartProduct/coupon';

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
            },{
                valuesName:"XXL",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"Black",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        }]
    },{
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess.png', 
        title: 'Nike Sneakers',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Delivery',
        deliveryEstimation: 'Tue 31 Jan',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"M",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"L",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"Black",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        }]
    },{
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess2.png', 
        title: 'Amazon Echo',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Bluedart',
        deliveryEstimation: 'Sun 29 Jan',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"XL",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"XXL",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"Black",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        }]
    }]
},{
    storeName:'Reebook',
    cartProduct: [{
        id: 1,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess1.png', 
        title: 'Nike React Sneaker',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Bluedart',
        deliveryEstimation: 'Sun 29 Jan',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"L",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"XXL",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"Black",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        }]
    },{
        id: 2,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess.png', 
        title: 'Nike Sneakers',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Bluedart',
        deliveryEstimation: 'Sun 29 Jan',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"M",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"L",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"Black",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        }]
    },{
        id: 3,
        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/shoess2.png', 
        title: 'Amazon Echo',
        actualPrice: '2999.00',
        discount: '65',
        discountPrice: '1049.00',
        deliveredBy: 'Delivery',
        deliveryEstimation: 'Sun 29 Jan',
        cartOptions : [{
            options : 'Size',
            optionValues : [{
                valuesName:"XL",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"XXL",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
            }]
        },{
            options : 'Color',
            optionValues : [{
                valuesName:"Blue",
                modifierType:"rupees",
                modify:"plus",
                amount:"15"
            },{
                valuesName:"Black",
                modifierType:"rupees",
                modify:"plus",
                amount:"10"
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
                        <CheckBox  style={{marginTop:-4}} onChange={()=> setStoreNameChecked(!storeNameChecked)} 
                        value={storeNameChecked} />
                        <Text style={styles.productbrand}> {data.storeName} </Text>
                        <Right>
                            <TouchableOpacity onPress={() => setModal(!modal)}>
                                <Text style={{fontSize: 13}}> Get Coupons </Text>
                            </TouchableOpacity>
                        </Right>
                    </Row>
                    <Coupon modalShow={modal} />
                    <CartProduct prodData={data.cartProduct} />
                </Grid>
            )
        })
        }
        </ScrollView>
        </Content>
       
    </>
  );
}
