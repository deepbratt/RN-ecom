import React from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {Image ,Dimensions, Text} from 'react-native';

const deviceHeight = Dimensions.get("window").height;
export default function Loader() {
    return (
      <Container padder style={{justifyContent: 'center',alignItems: 'center',flex:1}}>
        <Content>
          <Grid>
            <Row>
                <Image source={{ uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/logo.png'}} style={{width:130,height:100,marginTop:deviceHeight/2-50}} />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
}