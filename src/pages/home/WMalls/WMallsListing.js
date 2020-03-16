import React, { useState } from "react";
import {List, ListItem,Left,Text,Body,Icon,Item,Input,View,Button,Right} from 'native-base';
import {Picker,TextInput} from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Dimensions} from 'react-native'
const deviceWidth = Dimensions.get('window').width;
const wmalls = [
    {
        id: 1,
        title: 'Khan Market',
        quantity: '1k Products'
    },
    {
        id: 2,
        title: 'Howrah Bridge Market',
        quantity: '3k Products'
    },
    {
        id: 3,
        title: 'Kamlapur Market',
        quantity: '5k Products'
    },
    {
        id: 4,
        title: 'Khan Market',
        quantity: '10k Products'
    },
    {
        id: 5,
        title: 'Khan Market',
        quantity: '12k Products'
    },
    {
        id: 6,
        title: 'Khan Market',
        quantity: '16k Products'
    },
    {
        id: 7,
        title: 'Khan Market',
        quantity: '20k Products'
    },
    
  ]

  //console.log(images);
    export default function WMallsListing(){
        const [wmallsData,activeWmallsData] = useState(wmalls);
        const [activeMalls,selectedWMallData] = useState(0);
        const [selected,activeSelected] = useState("Filter");


        return (
            <>
            <Grid style={{margin:15}}>
                <Col style={{width:deviceWidth/1.7}}>
                    <View style={{height:35,borderColor:'#62138F',borderWidth:1,borderRadius:10}}>
                        <Item>
                            <Icon active name="search" />
                            <Input placeholder='Search for Products' style={{height:35}} />
                        </Item>
                    </View>
                </Col>
                <Col style={{padding:10}} />
                <Col style={{width:deviceWidth/3}}>
                    <View style={{borderRadius: 10, borderWidth: 1, borderColor: '#62138F', overflow: 'hidden',width:120,height: 35}}>
                        <Picker style={{height: 35}} 
                        selectedValue={selected}
                        onValueChange={() => activeSelected(selected)}>
                            <Picker.Item label='&#10728; Filter' value='Filter' color="#62138F" />
                        </Picker>
                    </View>
                </Col>
            </Grid>
            
            <List style={{borderTopWidth:1,borderTopColor:'#DCDCDC'}}>
                {
                wmallsData.map((data,index)=> {
                    return(
                    <View style={activeMalls === data.id ? {backgroundColor:'#f0f0f0'} : {}} key={index}>
                        <ListItem onPress={() => {selectedWMallData(data.id)}}>
                            <Left>
                                <Text>{data.title}</Text>
                            </Left>
                            <Body>
                                <Text style={{fontWeight:'bold',fontSize:14}}>{data.quantity}</Text>
                            </Body>
                            <Right>
                            {
                                activeMalls === data.id ?
                                    <Button small style={{borderRadius:6,width:50}}><Text style={{fontSize:12}}>Go</Text></Button>
                                :
                                    <View></View>
                            }
                            </Right>

                        </ListItem>
                    </View>
                    )
                })
                }
            </List>
            </>
        );
    }

