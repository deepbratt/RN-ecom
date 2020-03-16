import React, {useState} from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Image, Text} from 'react-native';

export default function CartFooter(props){
    return (
        <Footer style={{backgroundColor:"#F9DBFF"}}>
            <Grid>
                <Col>
                   <Text style={{fontSize:16,textAlign:'center',fontWeight:'bold'}}>{'\u20B9'} 3594.00</Text>
                   <Text style={{color:"#62138F",fontSize:18,textAlign:'center',fontWeight:'bold'}}>View Details</Text>
                </Col>

                <Col>
                    <Button iconLeft block light primary style={{margin:5}}>
                        <Text style={{color:"#fff",fontSize:18,fontWeight:'bold'}}>Place Order</Text>
                    </Button>
                </Col>
            </Grid>
        </Footer>
    );
}
