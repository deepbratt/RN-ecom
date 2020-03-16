import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {Icon, Button, Fab} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';
import styles from './style';
var Carousel = require ('react-native-carousel');

const Imges = [
  {
    imageID : 1,
    imageURL : "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod1.jpg"
  },
  {
    imageID : 1,
    imageURL : "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod2.jpg"
  },
  {
    imageID : 1,
    imageURL : "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod3.jpg"
  },
  {
    imageID : 1,
    imageURL : "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod4.jpg"
  },
  {
    imageID : 1,
    imageURL : "https://wanted7cdn.s3.ap-south-1.amazonaws.com/uploads/defaults/prod5.jpg"
  },
]
export default function SliderImage (props) {
  const [activate, setActivate] = useState (true);
  return (
    <Grid>
      <Col style={styles.containerSlide}>
        <Carousel
          width={375}
          height={800}
          hideIndicators={false}
          indicatorColor="#000000"
          indicatorSize={25}
          indicatorSpace={20}
          indicatorAtBottom={true}
          indicatorOffset={-30}
          animate={true}
          delay={2000}
          loop={false}
        >
        {
          Imges.map((data,index) => {
            return(
              <View style={styles.page1} key={index}>
                <Image
                  source={{
                    uri: data.imageURL,
                  }}
                  style={styles.content}
                />
              </View>
            )
          })
        }
        </Carousel>

        <Fab
          active={activate}
          direction="left"
          containerStyle={{marginLeft: 10}}
          style={styles.sliderFab}
          position="topRight"
          onPress={() => setActivate (!activate)}
        >

          <Icon name="md-share" style={{color: '#000', fontSize: 30}} />
          <Button style={{backgroundColor: '#34A34F'}}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{backgroundColor: '#3B5998'}}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{backgroundColor: '#DD5144'}}>
            <Icon name="ios-mail" />
          </Button>
        </Fab>

      </Col>
    </Grid>
  );
}
