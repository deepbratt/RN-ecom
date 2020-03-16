const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  catImage : {
    flex: 1,
    margin:4
  },
  storeImage : {
    height:220,
    width:200,
    resizeMode:'cover'
  },
  bottomText : {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 4, 
    justifyContent:'flex-end' ,
    alignItems: 'center',
    color: '#ccc'
  },
  textBackground: {
    backgroundColor:'#ffffff',
    paddingLeft:15,
    paddingRight:15,
    borderWidth: 1,
    borderColor:'#ccc'
  }
};
