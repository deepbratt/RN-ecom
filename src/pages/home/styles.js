const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  homeImageSlider:{
    height:220,
    width:125,
    margin:4,
    borderWidth:0.5,
    borderColor:'#dddddd',
    borderRadius:10
  },
  // Product Slider Css
  activeProductSlider : {
    height:220,
    width:125,
    margin:4,
    borderWidth:0.5,
    borderColor:'#dddddd',
    borderRadius:10,
    borderColor:'#62138F',
    borderWidth:2,
    backgroundColor : '#62138F',
    color:'#fff'
  },
  topTitle: {
    backgroundColor:'#f0f0f0',
    marginTop:3,
    padding:8,
    fontSize:14,
    fontFamily: 'Montserrat_Semibold'    
  }
};
