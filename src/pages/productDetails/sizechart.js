import React, { Component } from "react";
import { View,Image } from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Left,Right } from "native-base";

import Modal from "react-native-modal";
import styles from './style';
export default class ModalTester extends Component {
  state = {
    isModalVisible: false
  };
 
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
 
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button transparent onPress={this.toggleModal}>
            <Text style={{fontSize:13,color:"red"}}>SIZE CHART</Text>
        </Button>

        <Modal 
        isVisible={this.state.isModalVisible}
        onBackButtonPress={this.toggleModal}
        coverScreen={true}
        onSwipeComplete={this.toggleModal}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{justifyContent: 'flex-end',margin: 0}}
        >
            <Card transparent>
                <CardItem header bordered>
                    <Left>
                        <Text style={{fontSize:16,fontWeight:"bold"}}>SIZE CHART</Text>
                    </Left>
                    <Right>
                        <Button transparent onPress={this.toggleModal}>
                                <Text style={{fontSize:14,color:"red"}}>Close</Text>
                        </Button>
                    </Right>
                </CardItem>

                <CardItem>
                <Body>
                    <Image
                    source={{
                        uri: 'https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/size_chart2.png',
                    }}
                    style={{height:250,width:"100%",resizeMode:"contain"}}
                    />

                    
                </Body>
                </CardItem>
            </Card>

        </Modal>
      </View>
    );
  }
}