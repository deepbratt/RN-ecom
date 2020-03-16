import React, {useState} from 'react';
import {Content, Text, Icon, Button, Right, Left} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import styles from './style.js';
import SizeChart from './sizechart';

const AllSizeList = [
  {
    id: 1,
    size: 'S',
  },
  {
    id: 2,
    size: 'M',
  },
  {
    id: 3,
    size: 'L',
  },
  {
    id: 4,
    size: 'XL',
  },
  {
    id: 5,
    size: 'XXL',
  },
];

const AllColorList = [
  {
    id: 1,
    color: '#FF1F1F',
  },
  {
    id: 2,
    color: '#090909',
  },
  {
    id: 3,
    color: '#FEFEFE',
  },
];
export default function ShortInfo () {
  const [size, setSize] = useState (null);
  const [color, setColor] = useState (null);
  return (
    <Content style={styles.optionshortInfoContent} padder>
     {
        AllSizeList.length > 0 
        ?
            <>
                <Grid>
                    <Row style={{borderBottomColor: '#CCC', borderBottomWidth: 1}}>
                    <Left>
                        <Col style={{width: 'auto'}}>
                        <Text style={styles.productbrand}> SELECT SIZE </Text>
                        </Col>
                    </Left>
                    <Right>
                        <Col>
                        <SizeChart />
                        </Col>
                    </Right>
                    </Row>
                </Grid>
                
                <Grid style={{marginTop: 5}}>
                    <Row>
                    {AllSizeList.map ((data, index) => {
                        return (
                        <Button
                            key={index}
                            light={size === data.size ? false : true}
                            style={styles.optionsSize}
                            onPress={() => setSize (data.size)}
                        >
                            <Text> {data.size} </Text>
                        </Button>
                        );
                    })}
                    </Row>
                </Grid>
            </>
        :
            <Text> </Text>
      }

      {
        AllSizeList.length > 0 
        ?
            <>
                <Grid style={{marginTop: 20}}>
                    <Row style={{borderBottomColor: '#CCC', borderBottomWidth: 1}}>
                    <Left>
                        <Col style={{width: 'auto'}}>
                        <Text style={styles.productbrand}> SELECT COLOR </Text>
                        </Col>
                    </Left>
                    </Row>
                </Grid>

                <Grid style={{marginTop: 5, marginBottom: 5}}>
                    <Row>
                    {AllColorList.map ((data, index) => {
                        return (
                        <Button
                            key={index}
                            style={{
                            marginRight: 5,
                            backgroundColor: data.color,
                            justifyContent: 'center',
                            borderWidth: 1,
                            borderColor: '#62138F',
                            width: 60,
                            }}
                            onPress={() => setColor (data.color)}
                        >

                            {data.color === color
                            ? <Icon
                                name="done"
                                type="MaterialIcons"
                                style={{color: checkDarkColor (data.color)}}
                                />
                            : <Text />}
                        </Button>
                        );
                    })}
                    </Row>
                </Grid>
            </>
            :
            <Text> </Text>
      }
    </Content>
  );
}

function checkDarkColor (c) {
  var c = c.substring (1);
  var rgb = parseInt (c, 16);
  var r = (rgb >> 16) & 0xff;
  var g = (rgb >> 8) & 0xff;
  var b = (rgb >> 0) & 0xff;

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  if (luma < 40) {
    return '#fff';
  } else {
    return '#000';
  }
}
