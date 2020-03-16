import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from "./../pages/home/";
import Wanted7 from "./../pages/home/wantedProducts";
import Wmalls from "./../pages/home/wmalls";
import SideBar from "./../pages/sidebar";
import ProductDetails from "./../pages/productDetails";
import SignUp from "./../pages/SignUp";
import SignupDetails from "./../pages/SignUp/SignupDetails"
import SignupOtp from "./../pages/SignUp/SignupOtp";
import Login from "./../pages/Login";
import Logout from "./../pages/Logout";
import ForgotPassword from "./../pages/ForgotPassword";
import SignupAddress from "./../pages/SignUp/SignupAddress";
import UserAddress from "./../pages/SignUp/UserAddress";
import UserAddressDetails from "./../pages/SignUp/UserAddressDetails";
import AddressLisitng from "./../pages/SignUp/AddressListing";
import Cart from './../pages/cart';
import MyProfile from "./../pages/myProfile";
import ForgotOTP from "./../pages/ForgotPassword/ForgotOTP";
import SetUpPassword from "./../pages/ForgotPassword/SetUpPassword";
import StoreDetails from "./../pages/storeDetails";
import Orders from "./../pages/orders";
import OrderDetail from "./../pages/orderDetails";
import HomeHeader from './../pages/Header/HomeHeader';

export default class Routes extends Component{
	render() {
		return(
			<Router>
				<Scene>
					<Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
						<Scene key="login" component={Login} initial={true} />
						<Scene key="signup" component={SignUp}  />
						<Scene key="signupdetails" component={SignupDetails} />
						<Scene key="signupotp" component={SignupOtp} />
						<Scene key="forgotpassword" component={ForgotPassword} />
						<Scene key="signupaddress" component={SignupAddress} />
						<Scene key="useraddress" component={UserAddress} />
						<Scene key="useraddressdetails" component={UserAddressDetails} />
						<Scene key="addresslisting" component={AddressLisitng} />
						<Scene key="forgototp" component={ForgotOTP} />
						<Scene key="setuppassword" component={SetUpPassword} />
					</Scene>
					<Scene key="app" drawer={true} hideNavBar={true} wrap={false} initial={this.props.isLoggedIn} contentComponent={props => <SideBar {...props} />} >
							<Scene key="Home" component={Home} initial={true} />
							<Scene key="MyProfile" component={MyProfile} />
							<Scene key="wanted7" component={Wanted7} />
							<Scene key="wmalls" component={Wmalls} />
							<Scene key="productdetails" component={ProductDetails}/>
							<Scene key="cart" component={Cart} />
							<Scene key="storedetails" component={StoreDetails} />
							<Scene key="Orders" component={Orders} />
							<Scene key="orderdetails" component={OrderDetail} />
							<Scene key="logout" component={Logout} />
					</Scene>
				</Scene>
			</Router>
		)
	}
}
