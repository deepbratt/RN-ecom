import React from 'react';
import {Content, Text, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Row, Grid} from 'react-native-easy-grid';
import styles from './style.js';

export default function SoldBy () {
  return (
    <Content style={{borderBottomWidth: 5, borderBottomColor: '#CCC'}}>
      <Grid style={styles.cpnGrid1}>
        <Row>
          <Text style={styles.productbrand}> Seller Information </Text>
        </Row>
      </Grid>

      <Grid style={styles.cpnGrid2}>
        <Row style={{flexDirection: 'row',marginTop:5}}>
            <Text style={{marginTop:7,marginRight:10,fontWeight:"bold"}}>
              Sold By:
            </Text>
            <TouchableOpacity>
                <Text style={styles.soldBylabel}>
                    <Text style={{color: '#62138F',fontSize:16,fontWeight:"bold"}}> Patel Fashion </Text>
                </Text>      
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={{marginTop:0,fontWeight:"bold"}}>
                    <Icon name='keyboard-arrow-right' type="MaterialIcons" style={{color:"#62138F",fontSize:30}} />
                </Text>
            </TouchableOpacity>
        </Row>

        <Row style={{flexDirection: 'row',marginTop:10}}>
            <Text style={{marginTop:5,fontWeight:"bold",marginRight:5}}>
                <Icon name='album' type="MaterialIcons" style={{color:"#62138F",fontSize:16}} />
            </Text>
            <Text style={{marginTop:5,marginRight:5,fontWeight:"bold",fontSize:14}}>
               Cash On Delivery
            </Text>
            <Text style={{marginTop:5,fontSize:14}}>
                Available
            </Text>
        </Row>

        <Row style={{flexDirection: 'row'}}>
            <Text style={{marginTop:5,fontWeight:"bold",marginRight:5}}>
                <Icon name='album' type="MaterialIcons" style={{color:"#62138F",fontSize:16}} />
            </Text>

            <Text style={{marginTop:5,marginRight:5,fontSize:14}}>
              Easy 10 days returns and
            </Text>
            <Text style={{marginTop:5,fontSize:14,fontWeight:"bold"}}>
                Refunds
            </Text>
        </Row>

        <Row style={{flexDirection: 'row',marginBottom:10}}>
            <Text style={{marginTop:5,fontWeight:"bold",marginRight:5}}>
                <Icon name='album' type="MaterialIcons" style={{color:"#62138F",fontSize:16}} />
            </Text>

            <Text style={{marginTop:5,marginRight:5,fontSize:14}}>
              Easy 10 days returns and
            </Text>
            <Text style={{marginTop:5,fontSize:14,fontWeight:"bold"}}>
                Replacement
            </Text>
        </Row>
      </Grid>

    </Content>
  );
}
