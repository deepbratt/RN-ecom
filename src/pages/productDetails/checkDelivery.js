import React,{ useState } from 'react';
import {Content, Text, Icon, Left, Right, Input} from 'native-base';
import {TouchableOpacity,View} from 'react-native';
import {Row ,Col , Grid} from 'react-native-easy-grid';
import styles from './style.js';

const shippingapi = [
    {
        id : 1,
        deliverydate : 'Mon 30 Jan',
        cost : "00.00",
        carrier: "Delivery"
    },
    {
        id : 2,
        deliverydate : 'Mon 27 Jan',
        cost : "70.00",
        carrier: "Delivery"
    },
    {
        id : 3,
        deliverydate : 'Mon 29 Jan',
        cost : "50.00",
        carrier: "Bluedart"
    },
]

export default function CheckDelivery () {
  const [active, setActive] = useState(shippingapi[0]['id']);
  return (
    <Content style={{borderBottomWidth: 5, borderBottomColor: '#CCC'}}>
      <Grid style={styles.cpnGrid1}>
        <Row>
          <Left>
            <Text style={styles.productbrand}> Check Delivery </Text>
          </Left>

          <Input name="pincode" style={{width:80,backgroundColor:"#fff",borderColor:"#CCC",borderWidth:1,height:30}} placeholder="Pincode"/>

        </Row>
      </Grid>

      <Grid style={styles.cpnGrid2}>
        <Row style={{flexDirection: 'row',marginTop:5,borderBottomColor:"#000",borderBottomWidth:1,paddingBottom:4}}>
            <Col>
                <Text style={{textAlign:"center"}}>Estimated Time</Text>
            </Col>
            <Col><Text style={{textAlign:"center"}}>Cost</Text></Col>
            <Col><Text style={{textAlign:"center"}}>Carrier</Text></Col>
        </Row>
        {
            shippingapi.map((data,index) => {
                return(
                    <View key={index}>
                        <TouchableOpacity onPress={() => setActive(data.id)}>
                            <Row style={{flexDirection: 'row',marginTop:5}}>
                                <Col>
                                    <Text style={(active === data.id)?styles.checkdelesttimeActive:styles.checkdelesttime} >
                                        <Icon name={(active === data.id)?'radio-button-checked':'radio-button-unchecked'} type="MaterialIcons" style={{color:"#62138F",fontSize:14}} />
                                        {' '}{data.deliverydate}
                                    </Text>
                                </Col>
                                <Col><Text style={(active === data.id)?styles.checkdelcostActive:styles.checkdelcost}>{'\u20B9'}{data.cost}</Text></Col>
                                <Col><Text style={(active === data.id)?styles.checkdelcostActive:styles.checkdelcost}>{data.carrier}</Text></Col>
                            </Row>
                        </TouchableOpacity>
                    </View>
                );
            })
        }
        


      </Grid>

    </Content>
  );
}
