import { AsyncStorage, } from "react-native";

export default function Logout(props){
   AsyncStorage.clear()
   return props.navigation.navigate('Login');
   
}