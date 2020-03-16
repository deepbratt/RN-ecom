const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
    containerSlide:{
        height: deviceHeight-300,
        backgroundColor: '#fafafa'
    },
    page1: {
        flex: 1,
        height: "100%",
        width: Platform.OS === "android" ? "100%" : 375,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight-300,
        width: "100%",
        flex: 1,
        resizeMode: 'stretch',
    },
    tabcontent:{
        borderBottomColor:"#CCC",borderBottomWidth:7,marginTop:-30
    },
    tabcolcont:{
        backgroundColor: '#635DB7', height: "auto", marginTop: 30
    },
    tabstyle:{
        backgroundColor: '#E4E4E4'
    },
    tabtextstyle:{
        color: '#000',fontWeight:"normal"
    },
    activetabstyle:{
        borderBottomWidth:2, borderBottomColor:"#000",backgroundColor:"#707070"
    },
    activetextstyle:{
        color:'#fff',borderBottomColor:"#000"
    },
    sliderFab:{ 
        backgroundColor: '#DFDFE1',color: '#000',borderWidth: 1, borderColor: '#707070'
    },
    shortinfoContent:{
        marginTop:15,borderBottomColor:"#CCC",borderBottomWidth:7
    },
    optionshortInfoContent:{marginTop:-10,borderBottomColor:"#CCC",borderBottomWidth:7},
    productbrand:{
        fontWeight:"bold",fontSize:16
    },
    productname: {
        fontWeight:"normal",fontSize:18
    },
    ratingnumbers: {
        fontWeight:"normal",fontSize:12,marginTop:5
    },
    productPrice:{fontWeight:"bold",fontSize:18},
    productMrp:{fontWeight:"normal",fontSize:16,textDecorationLine: 'line-through', textDecorationStyle: 'solid',marginTop:2,marginLeft:0},
    productdiscount:{fontWeight:"bold",fontSize:12,marginTop:4,color:"#2CC0C1",marginLeft:0},
    productincltax:{fontWeight:"normal",fontSize:12},
    instock:{fontWeight:"normal",fontSize:14},
    available:{fontWeight:"bold",fontSize:14,marginLeft:-5,color:"green"},
    unavailable:{fontWeight:"bold",fontSize:14,marginLeft:-5,color:"red"},
    rating:{fontWeight:"bold",fontSize:14},
    optionsSize:{marginRight:5},
    cpnGrid1:{
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
      },
    cpnGrid2:{marginTop: 0, padding: 10, borderColor: '#CCC', borderWidth: 1},
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
    soldBylabel:{fontSize: 16,padding: 5,backgroundColor: '#fff',color:"#62138F",borderRadius:5,borderWidth:1,borderColor:"#62138F"},
    checkdelesttime:{fontWeight:"normal"},
    checkdelesttimeActive:{fontWeight:"bold"},

    checkdelcost:{fontWeight:"normal",textAlign:"center"},
    checkdelcostActive:{fontWeight:"bold",textAlign:"center"},
    
};
