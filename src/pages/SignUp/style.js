const React = require("react-native");
const { Dimensions, Platform } = React;
const dimensions = Dimensions.get('window');

const imageHeight = Math.round(dimensions.width * 0.05);
const imageWidth = dimensions.width * 0.06;

export default {
  iconSetLogo : {
    height: imageHeight,
    width: imageWidth,
    marginTop:-5
  },
  container: {
    backgroundColor: "#FFF"
  },
  mb10: {
    marginBottom: 10
  },
  HeadBg:{
    backgroundColor:"#62138F",
    marginTop:Platform.OS === "android" ? 0 : 0,
    height:80
  },
  iconSet: {
    color:"#fff",
    fontSize:24,
    height:30,
    width:30
  },
  iconSetBack:{
    color:"#fff",
    fontSize:36,
    height:30,
    width:30,
    marginTop:-10
  },
  logotxt: {
    color:"#fff",fontSize:24,marginTop:-10,
    marginLeft:Platform.OS === "android" ? 0 : -150,
  },
  barcont:{
    marginTop:Platform.OS === "android" ? 30 : 10,
  }
};
