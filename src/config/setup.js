import React, { Component } from "react";
import {Actions} from 'react-native-router-flux';
import { YellowBox,StatusBar } from 'react-native';
import {connect} from 'react-redux';
import Loader from '../components/loader';
import Routes from '../components/Routes';

class Setup extends Component {
  state = {
    loading:true
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
        'Montserrat': require('../../assets/Fonts/Montserrat-Regular.ttf'),
        'Montserrat_Semibold': require('../../assets/Fonts/Montserrat-SemiBold.ttf'),
        'Montserrat_bold': require('../../assets/Fonts/Montserrat-Bold.ttf'),
        "Ionicons": require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),  //MaterialIcons
        "MaterialIcons": require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialIcons.ttf'),

        
        //...Ionicons.font, 
        //...MaterialIcons.font
    })
    this.setState({ loading: false })
}

  render() {
    const {authData:{isLoggedIn}} = this.props;
    if (this.state.loading) {
      return (
        <Loader />
      );
    }
    return (
      <>
        <StatusBar
            backgroundColor="#1c313a"
            barStyle="light-content"
          />
          {/*<StatusBar barStyle="light-content" />*/}

          <Routes isLoggedIn={isLoggedIn} />
      </>
    );
  }
}
export default connect(null,null)(Setup);
YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested',
  'VirtualizedList: missing keys for items'
]);
