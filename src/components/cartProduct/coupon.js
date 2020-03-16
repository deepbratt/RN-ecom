import React from 'react';
import { Content, Text, Icon, Right, Left, Toast} from 'native-base';
import {Clipboard,TouchableOpacity,View} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import styles from './style.js';

const AllCouponList = [
  {
    id: 1,
    discountPercentage: '40%',
    discountDescription: 'On orders of \u20B93000 and above. Valid once when check-out. Not Applicable on some selected items.',
    discountMaxAmt: '1000',
    discountLabelName: 'BEAUTY10XX',
    discountproductPriceDisvalue: '101.00'
  },
  {
    id: 2,
    discountPercentage: '60%',
    discountDescription: 'On orders of \u20B93000 and above. Valid once when check-out. Not Applicable on some selected items.',
    discountMaxAmt: '1500',
    discountLabelName: 'BEAUTY60XX',
    discountproductPriceDisvalue: '201.00'
  },
];
function copyCoupon(data){
  Clipboard.setString(data);
  Toast.show({
    text: "Coupon Copied to Clipboard",
    buttonText: "Okay",
    duration: 3000,
    type: "success",
    position: "bottom"
  });
}

export default function Coupons (props) {
  return (
    <View style={{}}>
        {
          props.modalShow && AllCouponList.length > 0
          ?
          AllCouponList.map((data, index) => {
            return (
              <View key={index}>
              <Grid style={{marginTop: 10, padding: 10}}>
                <Row>
                  <Text style={{fontSize: 14, fontFamily: 'Montserrat_Semibold'}}>
                    {data.discountPercentage} OFF
                  </Text>
                  <Text style={{fontSize: 14}}> up to </Text>
                  <Text style={{fontSize: 14, fontFamily: 'Montserrat_Semibold'}}>
                    {'\u20B9'} {data.discountMaxAmt}.
                  </Text>
                </Row>

                <Row style={{marginTop: 10}}>
                  <Text style={{fontSize: 13}}>
                    {data.discountDescription}
                  </Text>
                </Row>
              </Grid>

              <Grid style={styles.cpnGrid2} key={"_"+index} >
                <Row>
                  <Left style={{flexDirection: 'row'}}>
                    
                      <Text style={styles.cpnLabel}>
                        {data.discountLabelName}
                      </Text>
                    
                    <TouchableOpacity onPress={() => copyCoupon(data.discountLabelName)}>
                      <Icon name='bookmark' type="MaterialIcons" style={{color:"#62138F"}} />
                    </TouchableOpacity>

                    <Text style={styles.cpnTnC}>
                      {' '}T & C apply
                    </Text>
                  </Left>
                  <Right>
                    <Text style={styles.cpnDisProDetail}>
                      SAVE {'\u20B9'}{data.discountproductPriceDisvalue}
                    </Text>
                  </Right>
                </Row>
              </Grid>
              </View>
            )
          })

          :
             null
        }
    </View>
  );
}
