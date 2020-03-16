const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  homeImageSlider:{
    borderWidth:1,
    borderColor:'#dddddd'
  },
  greyBackground: {
    backgroundColor:'#f0f0f0'
  },
  cpnGrid1:{
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  productbrand:{
    fontWeight:"bold",fontSize:16
  },
  cpnGrid2:{marginTop: 0, padding: 10, borderColor: '#CCC', borderWidth: 1,backgroundColor:'#DCDCDC'},
  cpnLabel:{
    fontSize: 14,
    borderStyle: 'dashed',
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#F9DBFF',
  },
cpnTnC:{fontSize: 13, marginTop: 7, color: 'red'},
cpnDisProDetail:{fontSize: 14, color: '#11C61E', fontWeight: 'bold'},

};
