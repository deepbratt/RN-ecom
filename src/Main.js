import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import {connect} from "react-redux";

import Setup from './config/setup';
class Main extends Component{

	render() {
    const {authData:{isLoggedIn}} = this.props;
		return(
      <View style={styles.container}>
        <Setup {...this.props} />
      </View>
			)
	}
} 

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
});

mapStateToProps = state => ({
    authData: state.authReducer.authData
})

export default connect(mapStateToProps, null)(Main)
