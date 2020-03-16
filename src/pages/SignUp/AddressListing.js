import React, { Component } from 'react';
import { Container, Content, Form, Item, Icon, Button, Text, Col, Row, Grid, Picker, Input, View } from 'native-base';
import { StatusBar } from 'react-native';
import VerifyHeader from '../Header/VerifyHeader';

export default class AddressListing extends Component{
    constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
    render(){
        return(
            <>
                <Container>
                    <StatusBar barStyle="dark-content" />
                        <VerifyHeader {...this.props} style={{borderWidth:1,borderColor:"red"}} />
                        <Content style={{ marginTop: 5, borderBottomColor: "#CCC", borderBottomWidth: 7 }} padder>
                            <Grid >
                                <Row>
                                    <Col>
                                        <Button block iconLeft style={{ borderRadius: 5, marginTop: 15,textAlign:"left", backgroundColor: "#6A077F",height:60 }}>
                                            <Icon name='my-location' type="MaterialIcons" />
                                            <Text style={{fontSize:18}}>ADD NEW ADDRESS</Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid style={{marginTop:10,borderWidth:3,borderRadius:10,height:130,borderColor:"#ccc"}}>
                                <Row >
                                    <Col style={{padding:12,width:"13%",marginTop:7}}>
                                        <Icon name="check" type="Feather" style={{color: "green",fontSize:25}}/> 
                                    </Col>
                                    <Col style={{padding:12,width:"75%",textAlign:"left",marginLeft:-20}}>
                                        <Text style={{color:"#676767",fontWeight:"bold",fontSize:25,fontFamily: "Montserrat"}}>Shuvradeb Mondal</Text>
                                    </Col>
                                    <Col style={{padding:12,width:"12%",marginTop:2,marginLeft:15}}>
                                        <Picker
                                            mode="dropdown"
                                            iosHeader=""
                                            Icon={<Icon name="arrow-dropdown-circle" style={{ color: "black", IconSize: 45 }} />}
                                            style={{ width: undefined }}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)}
                                            style={{marginRight:-15,marginTop:-10}}
                                            >
                                            <Picker.Item label="Edit" value="key0" />
                                            <Picker.Item label="Delete" value="key1" />
                                            <Picker.Item label="Set As Default" value="key2" />
                                        </Picker>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:16,marginLeft:18}}>
                                    <Col style={{width:"13%"}}>
                                    </Col>
                                    <Col style={{width:"90%",textAlign:"left",marginLeft:-20}}>
                                    <Text style={{ color: "#676767", fontSize: 18, fontFamily: "Montserrat" }}>Upper Ground Floor, Block F
                                    </Text>
                                    </Col>
                                </Row>
                                <Row style={{marginLeft:18}}>
                                    <Col style={{width:"13%"}}>
                                    </Col>
                                    <Col style={{width:"60%",textAlign:"left",marginLeft:-20}}>
                                    <Text style={{ color: "#676767", fontSize: 18, fontFamily: "Montserrat" }}>7/29, Lodhi Garden
                                    </Text>
                                    </Col>
                                    <Col style={{width:"30%",borderWidth:1,height:30,borderRadius:15,textAlign:"center"}}>
                                        <Text style={{ color: "#676767",marginLeft:28 }}>
                                            <Text style={{ fontSize: 18,fontWeight:"bold", fontFamily: "Montserrat"}}>Home</Text>
                                        </Text>
                                        <Icon name="place" type="MaterialIcons" style={{fontSize:25,marginTop:-24,marginLeft:2}}/> 
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid style={{marginTop:10,borderWidth:3,borderRadius:10,height:130,borderColor:"#ccc"}}>
                                <Row >
                                    <Col style={{padding:12,width:"13%",marginTop:7}}>
                                        {/*<Icon name="check" type="Feather" style={{color: "green",fontSize:25}}/> */}
                                    </Col>
                                    <Col style={{padding:12,width:"75%",textAlign:"left",marginLeft:-20}}>
                                        <Text style={{color:"#676767",fontWeight:"bold",fontSize:25,fontFamily: "Montserrat"}}>Shuvradeb Mondal</Text>
                                    </Col>
                                    <Col style={{padding:12,width:"12%",marginTop:2,marginLeft:15}}>
                                        <Picker
                                            mode="dropdown"
                                            iosHeader=""
                                            Icon={<Icon name="arrow-dropdown-circle" style={{ color:"black",IconSize: 45 }} />}
                                            style={{ width: undefined }}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)}
                                            style={{marginRight:-15,marginTop:-10}}
                                            >
                                            <Picker.Item label="Edit" value="key0" />
                                            <Picker.Item label="Delete" value="key1" />
                                            <Picker.Item label="Set As Default" value="key2" />
                                        </Picker>
                                    </Col>
                                </Row>
                                <Row style={{marginTop:16,marginLeft:18}}>
                                    <Col style={{width:"13%"}}>
                                    </Col>
                                    <Col style={{width:"90%",textAlign:"left",marginLeft:-20}}>
                                    <Text style={{ color: "#676767", fontSize: 18, fontFamily: "Montserrat" }}>Upper Ground Floor, Block F
                                    </Text>
                                    </Col>
                                </Row>
                                <Row style={{marginLeft:18}}>
                                    <Col style={{width:"13%"}}>
                                    </Col>
                                    <Col style={{width:"60%",textAlign:"left",marginLeft:-20}}>
                                    <Text style={{ color: "#676767", fontSize: 18, fontFamily: "Montserrat" }}>7/29, Lodhi Garden
                                    </Text>
                                    </Col>
                                    <Col style={{width:"30%",borderWidth:1,height:30,borderRadius:15,textAlign:"center"}}>
                                        <Text style={{ color: "#676767",marginLeft:28 }}>
                                            <Text style={{ fontSize: 18,fontWeight:"bold", fontFamily: "Montserrat"}}>Work</Text>
                                        </Text>
                                        <Icon name="place" type="MaterialIcons" style={{fontSize:25,marginTop:-24,marginLeft:2}}/> 
                                    </Col>
                                </Row>
                                
                            </Grid>
                        </Content>
                 </Container>
            </>
        )
    }
}