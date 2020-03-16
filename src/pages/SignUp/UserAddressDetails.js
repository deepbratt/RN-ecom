import React, { Component } from 'react';
import { Container, Content, Form, Item, Icon, Button, ListItem, Text, Col, Row, Grid, Input,Right, Left,Radio } from 'native-base';
import { StatusBar,Dimensions,InteractionManager } from 'react-native';
import VerifyHeader from '../Header/VerifyHeader';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


export default class UserAddressDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            markers:[]
          }
          this.handlePress = this.handlePress.bind(this);
    }
  
    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
          this.setState({ loading: false });
        });
      }
      handlePress= (e) =>{
        this.setState({
          ...this.state.markers,
          markers:[
            coordinates : e.nativeEvent.coordinate,
              cost : '$${getRandoInt(50,300)}'
          ]
          })
        }
    render(){
        const { width, height } = Dimensions.get('window');
        const ratio = width / height;
        const coordinates = {
            latitude: 28.610001,
            longitude: 	77.230003,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0922 * ratio,
          };
        return(
            <>
                 <Container>
                    <StatusBar barStyle="dark-content" />
                    <VerifyHeader {...this.props} />
                    <Content style={{ marginTop: 5, borderBottomColor: "#CCC", borderBottomWidth: 7 }} padder>
               
                         <Grid >
                            <Row>
                                <Col style={{borderWidth:1,borderColor:"#ccc",borderRadius:5}}>
                                     <MapView
                                        initialRegion={coordinates}
                                        style={{borderBottomWidth:2,height:330}}
                                        onPress={this.handlePress}
                                        >
                                        {this.state.markers.map(marker => (
                                            <Marker {...marker}>
                                            </Marker>
                                        ))}
                                        </MapView>
                                </Col>
                            </Row>
                        </Grid>
                        <Grid>
                            <Row style={{  marginTop: 10, borderColor: "#ccc" }}>
                                <Col style={{ padding: 8, textAlign: "center" }}>
                                    <Text style={{ color: "#676767", fontSize: 22, fontFamily: "Montserrat",fontWeight:"bold" }}>Edit   
                                        <Icon name='info' type="MaterialIcons" style={{ color: "#6A077F",fontSize: 20, }}  />
                                    </Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form style={{  borderTopColor: "#000", marginBottom: 15, }}>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='Block F, Lodhi Garden' style={{ fontFamily: "Montserrat" }} />
                                                    <Button style={{ borderBottomRightRadius: 5, borderTopRightRadius: 5, height: 50, backgroundColor: "#cccccc", borderBottomLeftRadius: 0, borderTopLeftRadius: 0, borderLeftColor: "#6A077F", borderLeftWidth: 1}}>
                                                        <Text>Change</Text>
                                                    </Button>
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Item regular style={{ marginTop: 10, borderRadius: 7, borderWidth: 2, borderColor: "#6A077F" }}>
                                                    <Input placeholder='Block F, Lodhi Garden, New Delhi' style={{ fontFamily: "Montserrat" }} />
                                                </Item>
                                            </Col>
                                        </Row>
                                        <Button block iconLeft style={{ borderRadius: 7, marginTop: 30 }}>
                                            <Text>CONFIRM</Text>
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Grid>
                    </Content>
           
                 </Container>
            </>
        );
    }
}
