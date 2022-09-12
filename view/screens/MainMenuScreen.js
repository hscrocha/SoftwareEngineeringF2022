import {Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'    
import UserIcon from '../icons/UserIcon';
const DeviceWidth = Dimensions.get('window').width
const StdWidth = DeviceWidth*0.3;

export default function MainMenuScreen({ navigation }){
    return (
<View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <View style={{
      flexDirection: 'row',
      backgroundColor: "transparent"}}>
      <View>
        <TouchableOpacity style={menuStyle.boxitem} onPress={() =>
          navigation.navigate('Hello World') }>
          <Image style={menuStyle.image} source={require('../../resources/user-flat.png')} />
          <Text> Menu 1 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={menuStyle.boxitem} onPress={() =>
          navigation.navigate('Hello World 2') }>
          <UserIcon style={menuStyle.image} />
          <Text> Menu 2 </Text>
        </TouchableOpacity>
        <View style={menuStyle.boxitem} /> 
      </View>
      <View>
        <View style={menuStyle.boxitem} /> 
        <View style={menuStyle.boxitem} /> 
        <View style={menuStyle.boxitem} /> 
      </View>
      <View>
        <View style={menuStyle.boxitem} /> 
        <View style={menuStyle.boxitem} /> 
        <View style={menuStyle.boxitem} /> 
      </View>    
    </View>
  </View>
    );
}

const menuStyle = StyleSheet.create({
  boxitem: {
    width: StdWidth, 
    height: StdWidth, 
    marginBottom:1, 
    marginLeft:1,
    marginRight:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image:{
    width: StdWidth-20,
    height: StdWidth-20,
  }
});