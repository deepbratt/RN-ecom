import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body,Icon } from "native-base";
import {ScrollView,Dimensions,View} from 'react-native';
import HTML from 'react-native-render-html';
import {Row, Grid} from 'react-native-easy-grid';
import styles from './style';
const refund = `
    <p>Correct and complete product (with the original brand/product Id/
        undetached MRP tag/product's original packaging/freebies and 
        accessories).</p>
    <p>The product should be in unused, undamaged and original condi-
    tion without any scratches or dents.</p>
    <p>Before returning a Mobile/Laptop/Tablet, the device should be 
    formatted and screen lock should be disabled. iCloud account sho-
    uld be unlocked for Apple devices.</p>
`;

const replacement = `
    <p>For products requiring installation, returns shall be eligible only wh-
    en such products are installed by the brand's authorized personnel.</p>
    <p>In order to help you resolve issues with your product, we may troub-
    leshoot your product either through online tools, over the phone, 
    and/or through an in-person technical visit.</p>
    <p>If a defect is determined within the Returns Window, a replacement
    of the same model will be provided at no additional cost. If no defe-
   ct is confirmed or the issue is not diagnosed within 10 days of delive-
   ry or Installation wherever applicable, you will be directed to a brand 
   service centre to resolve any subsequent issues.</p>
`;


export default function ReturnPolicy(){
    return (
        <Content style={{borderBottomWidth: 5, borderBottomColor: '#CCC'}}>
            <Grid style={styles.cpnGrid1}>
                <Row>
                    <Text style={styles.productbrand}> Return & Refund Policy </Text>
                </Row>
            </Grid>
          <Card transparent>
            <CardItem style={{marginTop:-5,marginLeft:-5}}>
                <ScrollView style={{ flex: 1 }}>
                    

                    <View style={{backgroundColor:"#E4E4E4",padding:5,flexDirection:"row"}}> 
                        <Icon name="brightness-1" type="MaterialIcons" style={{fontSize:15,marginTop:1,color:"#6A077F"}}/>
                        <Text style={{fontSize:14,marginLeft:-15}}>
                             Easy 10 days returns and  
                        </Text>
                        <Text style={{fontSize:14,fontWeight:"bold"}} > Refund </Text>
                        <Icon name="help" type="MaterialIcons" style={{fontSize:15,marginTop:1,color:"#6A077F"}}/>
                    </View>
                    <HTML html={refund} imagesMaxWidth={Dimensions.get('window').width} />


                    <View style={{backgroundColor:"#E4E4E4",padding:5,flexDirection:"row"}}> 
                        <Icon name="brightness-1" type="MaterialIcons" style={{fontSize:15,marginTop:1,color:"#6A077F"}}/>
                        <Text style={{fontSize:14,marginLeft:-15}}>
                             Easy 10 days returns and  
                        </Text>
                        <Text style={{fontSize:14,fontWeight:"bold"}} > Replacement </Text>
                        <Icon name="help" type="MaterialIcons" style={{fontSize:15,marginTop:1,color:"#6A077F"}}/>
                    </View>
                    <HTML html={replacement} imagesMaxWidth={Dimensions.get('window').width} />
                </ScrollView>
            </CardItem>
          </Card>
        </Content>
    );
}