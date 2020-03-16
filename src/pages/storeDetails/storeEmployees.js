import React,{useState} from 'react';
import {Content, Text, Icon} from 'native-base';
import {Image} from 'react-native';
import {Row, Grid,Col} from 'react-native-easy-grid';
import styles from './style.js';

export default function StoreEmployees (props) {
  const [empData,setEmpData] = useState(props.empData);
  return (
    <Content>
      {
        empData.map((data,index) => {
          return(
            <Grid key={index}>
              <Row style={styles.cpnGrid3}>
                  <Text style={{marginTop:7,marginRight:10,fontWeight:"bold"}}>
                    {data.designation}
                  </Text>
              </Row>
              {
                data.employee.map((empData,empIndex) => {
                  return(
                    <Row style={styles.cpnGrid1} key={empIndex}>
                    <Col style={{width:'20%'}}>
                      <Image source={{ uri: empData.uri}} style={{ height: 50, width:null, resizeMode: 'contain' }} />
                    </Col>
                    <Col style={{width:'80%'}}>
                      <Text style={{fontFamily:'Montserrat_bold',fontSize:14}}> {empData.name}</Text>
                      <Text style={{fontWeight:'normal',fontSize:14}}> {empData.role}</Text>
                    </Col>
                  </Row>
                  )
                })
              }
            </Grid>
          )
        })
      }
    </Content>
  );
}
