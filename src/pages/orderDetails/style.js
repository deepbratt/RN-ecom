const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
import styles from '../home/styles';
export default {

  homeImageSlider:{
    borderWidth:1,
    borderColor:'#dddddd'
  },
  greyBackground: {
    backgroundColor:'#DBDBDB',
    paddingBottom:10,
    paddingTop:10
  },
  cpnGrid1:{
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 5,
    margin:0,padding:0
  },
  productbrand:{
    fontWeight:"bold",fontSize:16
  }

};
