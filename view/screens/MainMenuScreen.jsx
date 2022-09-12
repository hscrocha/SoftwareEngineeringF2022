import {Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'    
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
      backgroundColor: "white"}}>
      <View>
        <TouchableOpacity style={menuStyle.menubox} onPress={() =>
          navigation.navigate('Hello World') }>
          <Text> Menu 1 </Text>
        </TouchableOpacity>
        <View style={menuStyle.menubox} /> 
        <View style={menuStyle.menubox} /> 
      </View>
      <View>
        <View style={menuStyle.menubox} /> 
        <View style={menuStyle.menubox} /> 
        <View style={menuStyle.menubox} /> 
      </View>
      <View>
        <View style={menuStyle.menubox} /> 
        <View style={menuStyle.menubox} /> 
        <View style={menuStyle.menubox} /> 
      </View>    
    </View>
  </View>
    );
}

const menuStyle = StyleSheet.create({
  menubox: {
    width: DeviceWidth*0.3, 
    height: DeviceWidth*0.3, 
    marginBottom:1, 
    marginLeft:1,
    marginRight:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  }
});