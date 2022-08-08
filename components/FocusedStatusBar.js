import { StatusBar } from 'react-native';
import { useIsFocused } from "@react-navigation/core";
import { View, Text } from 'react-native';


const FocusedStatusBar = (props) => {


  const IsFocused = useIsFocused();


  return IsFocused ? <StatusBar animated={true} {...props}/> : null
//   const IsFocused = useIsFocused(props);

//   return IsFocused ? <StatusBar animated={true}{...props}/> : null
 }

export default FocusedStatusBar 