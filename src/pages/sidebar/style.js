const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10,
    height: 150
  },
  drawerImage: {
    alignSelf : 'center',
    height:60,
    width:60
  },
  profileText: {
    fontSize:16,
    color:'white'
  },
  sideBarIcon: {
    color: "#62138F", 
    fontSize: 26, 
    width: 30 
  },
  sideBarSeperator : {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height:2
  }
};
