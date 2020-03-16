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
  activeTopSlider : {
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
  catImage : {
    flex: 1,
    height: null,
    width:null,
    resizeMode:'cover'
  },
  activeCatImage : {
    flex: 1,
    height: null,
    width:null,
    resizeMode:'cover',
    opacity: 0.5,
    backgroundColor: '#62138F'
  }
};
