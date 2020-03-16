import React, {Component} from 'react';
import {Footer, FooterTab, Button, Icon} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Image, Text} from 'react-native';
const FooterWantedLogo = require ('../../../assets/icons/colorlogo.png');
export default class FooterProdDetails extends Component {
  render () {
    return (
      <Footer style={{backgroundColor:"#F9DBFF"}}>
            <Grid>
                <Col>
                    <Button iconLeft block primary bordered style={{margin:5,backgroundColor:"#fff"}}>
                        <Icon name='bookmark' style={{marginRight:10,color:"#62138F"}}/>
                        <Text style={{color:"#62138F"}}>Wanted List</Text>
                    </Button>
                </Col>

                <Col>
                    <Button iconLeft block light primary style={{margin:5}}>
                        <Icon name='cart' style={{marginRight:10,color:"#fff"}} />
                        <Text style={{color:"#fff"}}>Add To Cart</Text>
                    </Button>
                </Col>
            </Grid>
          

          
      </Footer>
    );
  }
}
