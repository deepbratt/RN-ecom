import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";
import Loader from '../../components/loader';
import {logoutUser} from "../../actions/auth.actions";

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  textStyle: {
      color: "#fff",
      fontSize: 18
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
});

class Logout extends Component{

  componentDidMount(){
      this.props.dispatch(logoutUser());
  }

	render() {
    const {getUser: {userDetails}} = this.props;

		return(<Loader />
			)
	}
}

mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser
});

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
