const React = require("react-native");
const { Dimensions, Platform } = React;
const dimensions = Dimensions.get('window');

const imageHeight = Math.round(dimensions.width * 0.05);
const imageWidth = dimensions.width * 0.06;

export default {
  searchBoxRow : {
    borderColor:'#62138F',
    backgroundColor:'#62138F',
    padding:8,
    borderWidth:1,
    borderTopColor:'#ccc'
  },
  searchBox : {
    backgroundColor:'#fff',
    borderRadius:6,
    height:35
  },
  /* Tab Starts */
  tabRow : {
    height:45,
  },
  tabstyle:{
    backgroundColor: '#fff',
    borderBottomColor:'#CACACA',  //#636363
    borderBottomWidth: 2,
  },
  tabtextstyle:{
      color: '#62138F',
      fontFamily: 'Montserrat_Semibold',
      width:120,
      alignSelf:'center',
      justifyContent:'center',
  },
  activetabstyle:{
    borderBottomColor:'#000',  //#636363
    borderBottomWidth: 2,
    width:120,
    alignSelf:'center',
    justifyContent:'center',
  },
  activetextstyle:{
      color:'#fff',
      borderBottomColor:"#62138F",
      fontFamily: 'Montserrat_bold'
  },
    /* Tab Ends */
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
    marginTop:Platform.OS === "android" ? 0 : -25,
    height:80
  },
  SignHeadBg:{
    backgroundColor:"#fff",
    marginTop:Platform.OS === "android" ? 0 : 0,
    height:80,
    borderWidth: 2, 
    borderColor: "#6A077F"
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
    //marginLeft:Platform.OS === "android" ? 0 : -150,
    textAlign:'center',
    fontFamily:'Montserrat_Semibold'
  },
  signlogotxt: {
    color:"black",fontSize:24,marginTop:-10,
    marginLeft:Platform.OS === "android" ? 20 : -150,
    paddingTop:10
    
  },
  barcont:{
    marginTop:Platform.OS === "android" ? 30 : 10,
    alignSelf:'center',
    justifyContent:'center'
  },
  barcontCart:{
    marginTop:Platform.OS === "android" ? 30 : 15,
    alignSelf:'center',
    justifyContent:'center'
  }
};
