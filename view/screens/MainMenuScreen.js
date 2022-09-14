import {Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'    
import MainMenuItem from '../components/MainMenuItem';
import QuestionIcon from '../icons/QuestionIcon';
const DeviceWidth = Dimensions.get('window').width
const StdWidth = DeviceWidth*0.48;

export default function MainMenuScreen(props){
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
        {/* The component bellow is to showcase the original menu code */}
        <TouchableOpacity style={menuStyle.boxitem} onPress={() =>
          props.navigation.navigate('Hello World') }>
          <Image style={menuStyle.image} source={require('../../resources/question-mark-icon.png')} />
          <Text style={{fontSize:16}}> Menu 1 </Text>
        </TouchableOpacity>
        {/* Since all menu items are basically the same,
          I took out the code and placed into a new component: MainMenuItem */}
        <MainMenuItem 
          style={menuStyle} 
          image={require('../../resources/user-flat.png')} 
          text='Register' 
          action={()=>{props.navigation.navigate('Register')}}
          />
        <MainMenuItem 
          style={menuStyle} 
          text='Menu 3' 
          action={()=>{props.navigation.navigate('Hello World',{text:'Hello M3'})}}
          />
      </View>
      <View>
      <MainMenuItem 
          style={menuStyle} 
          text='Menu 4' 
          action={()=>{props.navigation.navigate('Hello World',{text:'Hello M4'})}}
          />
        <MainMenuItem 
          style={menuStyle} 
          text='Menu 5' 
          action={()=>{props.navigation.navigate('Hello World',{text:'Hello M5'})}}
          />
        <MainMenuItem 
          style={menuStyle} 
          text='Menu 6' 
          action={()=>{props.navigation.navigate('Hello World',{text:'Hello M6'})}}
          />
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